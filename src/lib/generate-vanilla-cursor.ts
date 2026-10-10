import { CURSOR_ARTWORK, type ArtworkNode } from "./cursor-artwork";

const attributeName = (name: string) =>
  name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const escapeAttribute = (value: string | number) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/** Export the same geometry and motion as the React collection, without dependencies. */
export function generateVanillaCursor(cursorId: string): string | undefined {
  const artwork = CURSOR_ARTWORK[cursorId];
  if (!artwork) return undefined;

  const plans: {
    index: number;
    loop?: ArtworkNode["loop"];
    hover?: ArtworkNode["hover"];
  }[] = [];
  let index = 0;
  const render = (node: ArtworkNode): string => {
    const attrs = Object.entries(node.attrs)
      .map(([name, value]) => {
        // SVG's camel-case attributes are case sensitive.
        const key = [
          "viewBox",
          "pathLength",
          "maskUnits",
          "gradientUnits",
        ].includes(name)
          ? name
          : attributeName(name);
        return `${key}="${escapeAttribute(value)}"`;
      })
      .join(" ");
    let motion = "";
    if (node.loop || node.hover) {
      const current = index++;
      plans.push({ index: current, loop: node.loop, hover: node.hover });
      motion = ` data-motion="${current}" style="transform-box:view-box;transform-origin:${node.origin || "17px 17px"}"`;
    }
    return `<${node.tag} ${attrs}${motion}>${(node.children || []).map(render).join("")}</${node.tag}>`;
  };
  const svg = artwork.nodes.map(render).join("\n    ");

  return `<!-- ${cursorId} cursor. Paste anywhere in the page body. -->
<style>
  [data-gallery-cursor="${cursorId}"] {
    position: fixed; top: 0; left: 0; width: 34px; height: 34px;
    pointer-events: none; z-index: 2147483647; visibility: hidden;
  }
  [data-gallery-cursor="${cursorId}"] svg { display: block; }
  @media (hover: none) { [data-gallery-cursor="${cursorId}"] { display: none; } }
  @media (hover: hover) and (pointer: fine) {
    html:has([data-gallery-cursor="${cursorId}"]),
    html:has([data-gallery-cursor="${cursorId}"]) * { cursor: none !important; }
  }
</style>
<div data-gallery-cursor="${cursorId}">
  <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"
    fill="none" stroke="${artwork.accent}" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"${artwork.glow ? ` style="filter:drop-shadow(0 0 6px ${artwork.accent}66)"` : ""}>
    ${svg}
  </svg>
</div>
<script>
(() => {
  const cursor = document.currentScript.previousElementSibling;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const plans = ${JSON.stringify(plans)};
  const elements = plans.map(plan => cursor.querySelector('[data-motion="' + plan.index + '"]'));
  const loops = [];
  const springs = plans.map(plan => {
    const rest = {};
    for (const key of Object.keys(plan.hover || {})) rest[key] = key.startsWith('scale') ? 1 : 0;
    return { value: { ...rest }, velocity: { ...rest }, rest, target: { ...rest } };
  });
  for (const spring of springs) {
    for (const key of Object.keys(spring.velocity)) spring.velocity[key] = 0;
  }
  // Unique mask and gradient IDs allow multiple pasted snippets on one page.
  const prefix = 'cursor-' + Math.random().toString(36).slice(2) + '-';
  const ids = new Map();
  cursor.querySelectorAll('[id]').forEach(element => {
    ids.set(element.id, prefix + element.id);
    element.id = prefix + element.id;
  });
  cursor.querySelectorAll('*').forEach(element => {
    for (const attr of [...element.attributes]) {
      for (const [id, replacement] of ids) {
        if (attr.value === 'url(#' + id + ')') element.setAttribute(attr.name, 'url(#' + replacement + ')');
      }
    }
  });
  const transform = value =>
    'translate(' + (value.x || 0) + 'px,' + (value.y || 0) + 'px) ' +
    'rotate(' + (value.rotate || 0) + 'deg) ' +
    'rotateX(' + (value.rotateX || 0) + 'deg) rotateY(' + (value.rotateY || 0) + 'deg) ' +
    'scale(' + (value.scale === undefined ? 1 : value.scale) + ') ' +
    'scaleX(' + (value.scaleX === undefined ? 1 : value.scaleX) + ') ' +
    'scaleY(' + (value.scaleY === undefined ? 1 : value.scaleY) + ')';
  const frame = value => {
    const result = { transform: transform(value) };
    if (value.opacity !== undefined) result.opacity = value.opacity;
    if (value.strokeDashoffset !== undefined) result.strokeDashoffset = value.strokeDashoffset;
    return result;
  };
  const staticValue = loop => loop.static || Object.fromEntries(
    Object.entries(loop.values).map(([key, values]) => [key, values[0]])
  );
  let hovering = false;
  const start = () => {
    loops.splice(0).forEach(animation => animation.cancel());
    plans.forEach((plan, index) => {
      if (!plan.loop) return;
      const loop = plan.loop;
      Object.assign(elements[index].style, frame(staticValue(loop)));
      if (reduced.matches) return;
      const values = hovering && loop.hoverValues ? loop.hoverValues : loop.values;
      const length = Math.max(...Object.values(values).map(values => values.length));
      const turnDuration = loop.duration - 0.7;
      const keyframes = Array.from({ length }, (_, i) => {
        const value = Object.fromEntries(Object.entries(values).map(([key, frames]) => [key, frames[i]]));
        const offset = loop.times ? loop.times[i] : i / (length - 1);
        return { ...frame(value), offset: loop.springReturn ? offset * turnDuration / loop.duration : offset,
          easing: loop.ease === 'linear' ? 'linear' : 'cubic-bezier(0.42,0,0.58,1)' };
      });
      if (loop.springReturn) {
        const angle = loop.values.rotate.at(-1);
        const frequency = Math.sqrt(320 - 100);
        for (let i = 1; i <= 42; i++) {
          const t = i / 60;
          const rotate = i === 42 ? 0 : angle * Math.exp(-10 * t) *
            (Math.cos(frequency * t) + 10 / frequency * Math.sin(frequency * t));
          keyframes.push({ ...frame({ rotate }), offset: (turnDuration + t) / loop.duration, easing: 'linear' });
        }
      }
      const animation = elements[index].animate(keyframes, {
        duration: loop.duration * 1000, iterations: Infinity, delay: (loop.delay || 0) * 1000
      });
      if (hovering && loop.hoverDuration) animation.updatePlaybackRate(loop.duration / loop.hoverDuration);
      loops.push(animation);
    });
  };
  let springFrame = 0;
  let previousTime = 0;
  const tick = time => {
    const dt = Math.min((time - (previousTime || time - 16)) / 1000, 0.032);
    previousTime = time;
    let moving = false;
    plans.forEach((plan, index) => {
      if (!plan.hover) return;
      const spring = springs[index];
      for (const key of Object.keys(spring.value)) {
        // Substeps keep the 320 stiffness / 20 damping spring stable at low frame rates.
        for (let step = 0; step < 4; step++) {
          const acceleration = 320 * (spring.target[key] - spring.value[key]) - 20 * spring.velocity[key];
          spring.velocity[key] += acceleration * dt / 4;
          spring.value[key] += spring.velocity[key] * dt / 4;
        }
        if (Math.abs(spring.target[key] - spring.value[key]) > 0.001 || Math.abs(spring.velocity[key]) > 0.001) moving = true;
        else { spring.value[key] = spring.target[key]; spring.velocity[key] = 0; }
      }
      Object.assign(elements[index].style, frame(spring.value));
    });
    springFrame = moving ? requestAnimationFrame(tick) : 0;
  };
  const setHover = active => {
    const changed = active !== hovering;
    hovering = active;
    if (changed && plans.some(plan => plan.loop?.hoverValues)) start();
    let loopIndex = 0;
    plans.forEach((plan, index) => {
      if (plan.loop && !reduced.matches) {
        const animation = loops[loopIndex++];
        if (animation && plan.loop.hoverDuration) animation.updatePlaybackRate(active ? plan.loop.duration / plan.loop.hoverDuration : 1);
      }
      if (!plan.hover) return;
      springs[index].target = active && !reduced.matches ? plan.hover : springs[index].rest;
    });
    if (!springFrame && !reduced.matches) { previousTime = 0; springFrame = requestAnimationFrame(tick); }
  };
  const motionChanged = () => {
    cancelAnimationFrame(springFrame); springFrame = 0;
    plans.forEach((plan, index) => {
      if (!plan.hover) return;
      springs[index].value = { ...springs[index].rest };
      for (const key of Object.keys(springs[index].velocity)) springs[index].velocity[key] = 0;
      Object.assign(elements[index].style, frame(springs[index].rest));
    });
    start(); setHover(hovering);
  };
  document.addEventListener('pointermove', event => {
    cursor.style.visibility = 'visible';
    cursor.style.transform = 'translate(' + (event.clientX - 17) + 'px,' + (event.clientY - 17) + 'px)';
    const active = !!(event.target instanceof Element && event.target.closest('a,button,input,select,textarea,label,[role="button"],.cursor-pointer'));
    if (active !== hovering) setHover(active);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { cursor.style.visibility = 'hidden'; setHover(false); });
  reduced.addEventListener('change', motionChanged);
  motionChanged();
})();
</script>`;
}
