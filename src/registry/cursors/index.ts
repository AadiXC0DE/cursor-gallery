import { ComponentType } from "react";

// Existing cursors
import DefaultCursor from "./default";
import DotRingCursor from "./dot-ring";
import GlowCursor from "./glow";
import GlitchCursor from "./glitch";
import GradientBlobCursor from "./gradient-blob";
import LiquidMercuryCursor from "./liquid-mercury";
import ParticleSwarmCursor from "./particle-swarm";
import CyberScannerCursor from "./cyber-scanner";
import AuroraCursor from "./aurora";
import HaloCursor from "./halo";
import CometCursor from "./comet";
import SpotlightCursor from "./spotlight";
import ChromaticCursor from "./chromatic";
import LaserCursor from "./laser";
import TerminalCursor from "./terminal";
import GooCursor from "./goo";
import FirefliesCursor from "./fireflies";
import RadarCursor from "./radar";
import ApertureCursor from "./aperture";
import VortexCursor from "./vortex";
import ConstellationCursor from "./constellation";
import PaperPlaneCursor from "./paper-plane";
import UfoCursor from "./ufo";
import ButterflyCursor from "./butterfly";
import MatrixCursor from "./matrix";
import PrismCursor from "./prism";
import GalaxyCursor from "./galaxy";
import SaberCursor from "./saber";
import InkCursor from "./ink";
import VinylCursor from "./vinyl";
import SakuraCursor from "./sakura";
import LanternCursor from "./lantern";
import EclipseCursor from "./eclipse";
import PotionCursor from "./potion";
import RibbonCursor from "./ribbon";
import PlasmaCursor from "./plasma";
import StardustCursor from "./stardust";
import FeatherCursor from "./feather";
import BokehCursor from "./bokeh";

// Minimal cursors
import CircleCursor from "./circle";
import ArrowCursor from "./arrow";
import PlusCursor from "./plus";
import CrosshairCursor from "./crosshair";
import DiamondCursor from "./diamond";
import SquareCursor from "./square";
import TriangleCursor from "./triangle";
import LineCursor from "./line";

// Effect cursors
import TrailCursor from "./trail";
import SparkleCursor from "./sparkle";
import FireCursor from "./fire";
import RippleCursor from "./ripple";
import PulseCursor from "./pulse";
import NeonCursor from "./neon";
import ElectricCursor from "./electric";
import SmokeCursor from "./smoke";

// Shape cursors
import HeartCursor from "./heart";
import StarCursor from "./star";
import HexagonCursor from "./hexagon";
import MoonCursor from "./moon";
import SunCursor from "./sun";
import CloudCursor from "./cloud";
import LeafCursor from "./leaf";
import FlowerCursor from "./flower";
import SnowflakeCursor from "./snowflake";

// Animated cursors
import SpinnerCursor from "./spinner";
import BounceCursor from "./bounce";
import WobbleCursor from "./wobble";
import RotateCursor from "./rotate";
import BreatheCursor from "./breathe";
import OrbitCursor from "./orbit";
import FloatCursor from "./float";

// Creative cursors
import TextCursor from "./text";
import PixelCursor from "./pixel";
import RainbowCursor from "./rainbow";
import GlassCursor from "./glass";
import MagnetCursor from "./magnet";
import TargetCursor from "./target";
import EyeCursor from "./eye";
import WandCursor from "./wand";

// Character cursors
import LightningCursor from "./lightning";
import RocketCursor from "./rocket";
import GhostCursor from "./ghost";
import PlanetCursor from "./planet";
import AtomCursor from "./atom";
import DnaCursor from "./dna";

// Emoji cursors
import GamepadCursor from "./gamepad";
import CoffeeCursor from "./coffee";

import MusicCursor from "./music";
import CrownCursor from "./crown";
import GemCursor from "./gem";
import SkullCursor from "./skull";
import CatCursor from "./cat";

import DogCursor from "./dog";
import PizzaCursor from "./pizza";
import FireworkCursor from "./firework";
import RobotCursor from "./robot";
import BrowserCursor from "./browser";
import KeyCursor from "./key";
import CameraCursor from "./camera";
import IdeaCursor from "./idea";
import LockCursor from "./lock";
import ZapCursor from "./zap";
import FlameCursor from "./flame";
import TreeCursor from "./tree";

// Illustrated collection
import JellyfishCursor from "./jellyfish";
import KoiCursor from "./koi";
import SnailCursor from "./snail";
import DragonflyCursor from "./dragonfly";
import DandelionCursor from "./dandelion";
import MoonPhaseCursor from "./moon-phase";
import CassetteCursor from "./cassette";
import DominoCursor from "./domino";
import NewtonsCradleCursor from "./newtons-cradle";
import PinballCursor from "./pinball";
import YoyoCursor from "./yoyo";
import TypewriterCursor from "./typewriter";
import DialCursor from "./dial";
import GearTrainCursor from "./gear-train";
import CaliperCursor from "./caliper";
import DraftingCompassCursor from "./drafting-compass";
import OscilloscopeCursor from "./oscilloscope";
import PacketCursor from "./packet";
import SeismographCursor from "./seismograph";
import KaleidoscopeCursor from "./kaleidoscope";
import ZenCursor from "./zen";
import LabyrinthCursor from "./labyrinth";
import SlinkyCursor from "./slinky";
import GyroscopeCursor from "./gyroscope";
import ArcadeCoinCursor from "./arcade-coin";
import HotAirBalloonCursor from "./hot-air-balloon";
import LighthouseCursor from "./lighthouse";
import HourglassCursor from "./hourglass";
import SnowGlobeCursor from "./snow-globe";
import CompassCursor from "./compass";
import MetronomeCursor from "./metronome";
import CactusCursor from "./cactus";
import OctopusCursor from "./octopus";
import PenguinCursor from "./penguin";
import BeeCursor from "./bee";
import LadybugCursor from "./ladybug";
import OrigamiCraneCursor from "./origami-crane";
import LavaLampCursor from "./lava-lamp";
import DiscoBallCursor from "./disco-ball";
import RubberDuckCursor from "./rubber-duck";
import OwlCursor from "./owl";
import DonutCursor from "./donut";
import BobaCursor from "./boba";
import AstronautCursor from "./astronaut";
import SoapBubbleCursor from "./soap-bubble";
import CrystalBallCursor from "./crystal-ball";
import MagnifierCursor from "./magnifier";
import PufferfishCursor from "./pufferfish";
import PinwheelCursor from "./pinwheel";
import AlarmClockCursor from "./alarm-clock";

export interface CursorDefinition {
  id: string;
  name: string;
  description: string;
  tags: string[];
  component: ComponentType<{
    x: number;
    y: number;
    isHovering?: boolean;
    isStatic?: boolean;
  }>;
  featured?: boolean;
  code: {
    react: string;
    vanilla: string;
    hook?: string;
  };
}

export const CURSORS: CursorDefinition[] = [
  // === MINIMAL CATEGORY ===
  {
    id: "default",
    name: "Default",
    description: "Elegant gradient dot cursor",
    tags: ["minimal", "basic"],
    component: DefaultCursor,
    code: { react: `// Default cursor`, vanilla: `// Pending` },
  },
  {
    id: "circle",
    name: "Circle",
    description: "Clean circular outline",
    tags: ["minimal", "geometry"],
    component: CircleCursor,
    code: { react: `// Circle cursor`, vanilla: `// Pending` },
  },
  {
    id: "arrow",
    name: "Arrow",
    description: "Classic pointer with gradient",
    tags: ["minimal", "pointer"],
    component: ArrowCursor,
    code: { react: `// Arrow cursor`, vanilla: `// Pending` },
  },
  {
    id: "plus",
    name: "Plus",
    description: "Precision crosshair plus",
    tags: ["minimal", "geometry"],
    component: PlusCursor,
    code: { react: `// Plus cursor`, vanilla: `// Pending` },
  },
  {
    id: "crosshair",
    name: "Crosshair",
    description: "Target precision cursor",
    tags: ["minimal", "precision"],
    component: CrosshairCursor,
    code: { react: `// Crosshair cursor`, vanilla: `// Pending` },
  },
  {
    id: "diamond",
    name: "Diamond",
    description: "Rotated square shape",
    tags: ["minimal", "geometry"],
    component: DiamondCursor,
    code: { react: `// Diamond cursor`, vanilla: `// Pending` },
  },
  {
    id: "square",
    name: "Square",
    description: "Simple box outline",
    tags: ["minimal", "geometry"],
    component: SquareCursor,
    code: { react: `// Square cursor`, vanilla: `// Pending` },
  },
  {
    id: "triangle",
    name: "Triangle",
    description: "Gradient pointer triangle",
    tags: ["minimal", "geometry"],
    component: TriangleCursor,
    code: { react: `// Triangle cursor`, vanilla: `// Pending` },
  },
  {
    id: "line",
    name: "Line",
    description: "Slim gradient line",
    tags: ["minimal", "basic"],
    component: LineCursor,
    code: { react: `// Line cursor`, vanilla: `// Pending` },
  },
  {
    id: "dot-ring",
    name: "Dot & Ring",
    description: "Dot with trailing ring",
    tags: ["minimal", "geometry"],
    component: DotRingCursor,
    featured: true,
    code: { react: `// DotRing cursor`, vanilla: `// Pending` },
  },
  {
    id: "halo",
    name: "Halo",
    description: "Elegant lagging ring with precise dot",
    tags: ["minimal"],
    component: HaloCursor,
    featured: true,
    code: { react: `// Halo cursor`, vanilla: `// Pending` },
  },

  // === EFFECT CATEGORY ===
  {
    id: "glow",
    name: "Soft Glow",
    description: "Radiant illumination effect",
    tags: ["effect", "light", "dark-mode"],
    component: GlowCursor,
    code: { react: `// Glow cursor`, vanilla: `// Pending` },
  },
  {
    id: "trail",
    name: "Trail",
    description: "Fading dot trail effect",
    tags: ["effect", "trail", "motion"],
    component: TrailCursor,
    code: { react: `// Trail cursor`, vanilla: `// Pending` },
  },
  {
    id: "sparkle",
    name: "Sparkle",
    description: "Glittering star particles",
    tags: ["effect", "particles", "magical"],
    component: SparkleCursor,
    code: { react: `// Sparkle cursor`, vanilla: `// Pending` },
  },
  {
    id: "fire",
    name: "Fire",
    description: "Animated flame particles",
    tags: ["effect", "particles", "hot"],
    component: FireCursor,
    code: { react: `// Fire cursor`, vanilla: `// Pending` },
  },
  {
    id: "ripple",
    name: "Ripple",
    description: "Expanding water rings",
    tags: ["effect", "water", "motion"],
    component: RippleCursor,
    code: { react: `// Ripple cursor`, vanilla: `// Pending` },
  },
  {
    id: "pulse",
    name: "Pulse",
    description: "Pulsating ring animation",
    tags: ["effect", "motion"],
    component: PulseCursor,
    code: { react: `// Pulse cursor`, vanilla: `// Pending` },
  },
  {
    id: "neon",
    name: "Neon",
    description: "Flickering neon glow",
    tags: ["effect", "glow", "cyberpunk"],
    component: NeonCursor,
    code: { react: `// Neon cursor`, vanilla: `// Pending` },
  },
  {
    id: "electric",
    name: "Electric",
    description: "Lightning bolt animation",
    tags: ["effect", "energy"],
    component: ElectricCursor,
    code: { react: `// Electric cursor`, vanilla: `// Pending` },
  },
  {
    id: "smoke",
    name: "Smoke",
    description: "Rising vapor effect",
    tags: ["effect", "particles"],
    component: SmokeCursor,
    code: { react: `// Smoke cursor`, vanilla: `// Pending` },
  },
  {
    id: "glitch",
    name: "Cyber Glitch",
    description:
      "RGB-split block caret with slice jitter that goes haywire on hover",
    tags: ["effect", "cyberpunk"],
    component: GlitchCursor,
    code: { react: `// Glitch cursor`, vanilla: `// Pending` },
  },
  {
    id: "liquid-mercury",
    name: "Liquid Mercury",
    description: "Fluid metallic motion",
    tags: ["effect", "metallic"],
    component: LiquidMercuryCursor,
    featured: true,
    code: { react: `// Liquid Mercury cursor`, vanilla: `// Pending` },
  },
  {
    id: "particle-swarm",
    name: "Particle Swarm",
    description: "Dynamic orbiting particles",
    tags: ["effect", "particles"],
    component: ParticleSwarmCursor,
    code: { react: `// Particle Swarm cursor`, vanilla: `// Pending` },
  },
  {
    id: "cyber-scanner",
    name: "Cyber Scanner",
    description:
      "HUD reticle with a sweeping scan beam that locks on to targets",
    tags: ["effect", "cyberpunk"],
    component: CyberScannerCursor,
    code: { react: `// Cyber Scanner cursor`, vanilla: `// Pending` },
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Flowing northern-lights gradient wash",
    tags: ["effect", "gradient", "dark-mode"],
    component: AuroraCursor,
    code: { react: `// Aurora cursor`, vanilla: `// Pending` },
  },
  {
    id: "comet",
    name: "Comet",
    description: "Velocity-driven tail that follows your motion",
    tags: ["effect", "motion"],
    component: CometCursor,
    featured: true,
    code: { react: `// Comet cursor`, vanilla: `// Pending` },
  },
  {
    id: "spotlight",
    name: "Spotlight",
    description: "Soft flashlight pool for dark interfaces",
    tags: ["effect", "light", "dark-mode"],
    component: SpotlightCursor,
    code: { react: `// Spotlight cursor`, vanilla: `// Pending` },
  },
  {
    id: "fireflies",
    name: "Fireflies",
    description: "Drifting glowing swarm with natural lag",
    tags: ["effect", "nature", "particles"],
    component: FirefliesCursor,
    code: { react: `// Fireflies cursor`, vanilla: `// Pending` },
  },
  {
    id: "radar",
    name: "Radar",
    description: "Sweeping sonar dish with ping rings",
    tags: ["effect", "tech"],
    component: RadarCursor,
    code: { react: `// Radar cursor`, vanilla: `// Pending` },
  },
  {
    id: "vortex",
    name: "Vortex",
    description: "Spinning two-tone energy swirl",
    tags: ["effect", "abstract"],
    component: VortexCursor,
    code: { react: `// Vortex cursor`, vanilla: `// Pending` },
  },
  {
    id: "constellation",
    name: "Constellation",
    description: "Connected star trail across the night sky",
    tags: ["effect", "space"],
    component: ConstellationCursor,
    code: { react: `// Constellation cursor`, vanilla: `// Pending` },
  },
  {
    id: "galaxy",
    name: "Galaxy",
    description: "Slow-spinning spiral star system",
    tags: ["effect", "space"],
    component: GalaxyCursor,
    code: { react: `// Galaxy cursor`, vanilla: `// Pending` },
  },
  {
    id: "eclipse",
    name: "Eclipse",
    description: "Solar corona ring around a dark disc",
    tags: ["effect", "space", "dark-mode"],
    component: EclipseCursor,
    code: { react: `// Eclipse cursor`, vanilla: `// Pending` },
  },
  {
    id: "ribbon",
    name: "Ribbon",
    description: "Flowing silk gradient trail",
    tags: ["effect", "gradient", "colorful"],
    component: RibbonCursor,
    code: { react: `// Ribbon cursor`, vanilla: `// Pending` },
  },
  {
    id: "plasma",
    name: "Plasma",
    description: "Tesla orb with arcing tendrils",
    tags: ["effect", "energy"],
    component: PlasmaCursor,
    code: { react: `// Plasma cursor`, vanilla: `// Pending` },
  },
  {
    id: "stardust",
    name: "Stardust",
    description: "Golden stars that tumble in your wake",
    tags: ["effect", "particles", "magical"],
    component: StardustCursor,
    code: { react: `// Stardust cursor`, vanilla: `// Pending` },
  },
  {
    id: "bokeh",
    name: "Bokeh",
    description: "Soft out-of-focus light orbs drifting behind",
    tags: ["effect", "light", "calm"],
    component: BokehCursor,
    code: { react: `// Bokeh cursor`, vanilla: `// Pending` },
  },
  {
    id: "sakura",
    name: "Sakura",
    description: "Drifting cherry-blossom petals",
    tags: ["effect", "nature", "particles"],
    component: SakuraCursor,
    code: { react: `// Sakura cursor`, vanilla: `// Pending` },
  },

  // === SHAPE CATEGORY ===
  {
    id: "gradient-blob",
    name: "Gradient Blob",
    description: "Fluid organic shape",
    tags: ["shape", "gradient", "abstract"],
    component: GradientBlobCursor,
    code: { react: `// Gradient Blob cursor`, vanilla: `// Pending` },
  },

  {
    id: "heart",
    name: "Heart",
    description: "Beating heart shape",
    tags: ["shape", "love"],
    component: HeartCursor,
    code: { react: `// Heart cursor`, vanilla: `// Pending` },
  },
  {
    id: "star",
    name: "Star",
    description: "Rotating golden star",
    tags: ["shape", "rotating"],
    component: StarCursor,
    code: { react: `// Star cursor`, vanilla: `// Pending` },
  },
  {
    id: "hexagon",
    name: "Hexagon",
    description: "Rotating hexagon",
    tags: ["shape", "geometry"],
    component: HexagonCursor,
    code: { react: `// Hexagon cursor`, vanilla: `// Pending` },
  },
  {
    id: "moon",
    name: "Moon",
    description: "Cratered crescent with twinkling stars",
    tags: ["shape", "space"],
    component: MoonCursor,
    code: { react: `// Moon cursor`, vanilla: `// Pending` },
  },
  {
    id: "sun",
    name: "Sun",
    description: "Rotating sun rays",
    tags: ["shape", "nature"],
    component: SunCursor,
    code: { react: `// Sun cursor`, vanilla: `// Pending` },
  },
  {
    id: "cloud",
    name: "Cloud",
    description: "Soft drifting cumulus",
    tags: ["shape", "nature"],
    component: CloudCursor,
    code: { react: `// Cloud cursor`, vanilla: `// Pending` },
  },
  {
    id: "leaf",
    name: "Leaf",
    description: "Swaying green leaf",
    tags: ["shape", "nature"],
    component: LeafCursor,
    code: { react: `// Leaf cursor`, vanilla: `// Pending` },
  },
  {
    id: "flower",
    name: "Flower",
    description: "Spinning flower petals",
    tags: ["shape", "nature"],
    component: FlowerCursor,
    code: { react: `// Flower cursor`, vanilla: `// Pending` },
  },
  {
    id: "snowflake",
    name: "Snowflake",
    description: "Rotating ice crystal",
    tags: ["shape", "winter"],
    component: SnowflakeCursor,
    code: { react: `// Snowflake cursor`, vanilla: `// Pending` },
  },

  // === ANIMATED CATEGORY ===
  {
    id: "spinner",
    name: "Spinner",
    description: "Loading spinner animation",
    tags: ["animated", "loading"],
    component: SpinnerCursor,
    code: { react: `// Spinner cursor`, vanilla: `// Pending` },
  },
  {
    id: "bounce",
    name: "Bounce",
    description: "Bouncing ball effect",
    tags: ["animated", "playful"],
    component: BounceCursor,
    code: { react: `// Bounce cursor`, vanilla: `// Pending` },
  },
  {
    id: "wobble",
    name: "Wobble",
    description: "Wobbly jelly effect",
    tags: ["animated", "playful"],
    component: WobbleCursor,
    code: { react: `// Wobble cursor`, vanilla: `// Pending` },
  },
  {
    id: "rotate",
    name: "Rotate",
    description: "Continuously spinning",
    tags: ["animated", "motion"],
    component: RotateCursor,
    code: { react: `// Rotate cursor`, vanilla: `// Pending` },
  },
  {
    id: "breathe",
    name: "Breathe",
    description: "Gentle breathing scale",
    tags: ["animated", "calm"],
    component: BreatheCursor,
    code: { react: `// Breathe cursor`, vanilla: `// Pending` },
  },
  {
    id: "orbit",
    name: "Orbit",
    description: "Orbiting satellite dots",
    tags: ["animated", "space"],
    component: OrbitCursor,
    code: { react: `// Orbit cursor`, vanilla: `// Pending` },
  },
  {
    id: "float",
    name: "Float",
    description: "Drifting motion effect",
    tags: ["animated", "calm"],
    component: FloatCursor,
    code: { react: `// Float cursor`, vanilla: `// Pending` },
  },
  {
    id: "lightning",
    name: "Lightning",
    description: "Flickering bolt",
    tags: ["animated", "energy"],
    component: LightningCursor,
    code: { react: `// Lightning cursor`, vanilla: `// Pending` },
  },
  {
    id: "rocket",
    name: "Rocket",
    description: "Space rocket pointer",
    tags: ["animated", "space"],
    component: RocketCursor,
    code: { react: `// Rocket cursor`, vanilla: `// Pending` },
  },
  {
    id: "ghost",
    name: "Ghost",
    description:
      "Glossy floating ghost that throws up its arms and says boo on hover",
    tags: ["animated", "fun"],
    component: GhostCursor,
    featured: true,
    code: { react: `// Ghost cursor`, vanilla: `// Pending` },
  },
  {
    id: "paper-plane",
    name: "Paper Plane",
    description: "Banks and steers toward your movement",
    tags: ["animated", "playful"],
    component: PaperPlaneCursor,
    code: { react: `// Paper Plane cursor`, vanilla: `// Pending` },
  },
  {
    id: "ufo",
    name: "UFO",
    description: "Hovering saucer with tractor beam",
    tags: ["animated", "fun", "space"],
    component: UfoCursor,
    code: { react: `// UFO cursor`, vanilla: `// Pending` },
  },
  {
    id: "butterfly",
    name: "Butterfly",
    description: "Gentle wing-flapping morpho",
    tags: ["animated", "nature"],
    component: ButterflyCursor,
    code: { react: `// Butterfly cursor`, vanilla: `// Pending` },
  },
  {
    id: "saber",
    name: "Saber",
    description: "Glowing energy blade that follows your aim",
    tags: ["animated", "fun", "glow"],
    component: SaberCursor,
    code: { react: `// Saber cursor`, vanilla: `// Pending` },
  },
  {
    id: "vinyl",
    name: "Vinyl",
    description: "Spinning record with glossy grooves",
    tags: ["animated", "music", "retro"],
    component: VinylCursor,
    code: { react: `// Vinyl cursor`, vanilla: `// Pending` },
  },
  {
    id: "lantern",
    name: "Lantern",
    description: "Floating paper lantern with warm glow",
    tags: ["animated", "calm", "warm"],
    component: LanternCursor,
    code: { react: `// Lantern cursor`, vanilla: `// Pending` },
  },
  {
    id: "potion",
    name: "Potion",
    description: "Bubbling arcane elixir flask",
    tags: ["animated", "magical", "fun"],
    component: PotionCursor,
    code: { react: `// Potion cursor`, vanilla: `// Pending` },
  },
  {
    id: "feather",
    name: "Feather",
    description: "Weightless quill drifting on air",
    tags: ["animated", "calm", "elegant"],
    component: FeatherCursor,
    code: { react: `// Feather cursor`, vanilla: `// Pending` },
  },

  // === CREATIVE CATEGORY ===
  {
    id: "text",
    name: "Text",
    description: "Click text cursor",
    tags: ["creative", "typography"],
    component: TextCursor,
    code: { react: `// Text cursor`, vanilla: `// Pending` },
  },
  {
    id: "pixel",
    name: "Pixel",
    description: "Retro pixel art style",
    tags: ["creative", "retro"],
    component: PixelCursor,
    code: { react: `// Pixel cursor`, vanilla: `// Pending` },
  },
  {
    id: "rainbow",
    name: "Rainbow",
    description: "Spinning rainbow colors",
    tags: ["creative", "colorful"],
    component: RainbowCursor,
    code: { react: `// Rainbow cursor`, vanilla: `// Pending` },
  },
  {
    id: "glass",
    name: "Glass",
    description: "Glassmorphic blur effect",
    tags: ["creative", "modern"],
    component: GlassCursor,
    code: { react: `// Glass cursor`, vanilla: `// Pending` },
  },
  {
    id: "magnet",
    name: "Magnet",
    description: "Magnetic poles cursor",
    tags: ["creative", "science"],
    component: MagnetCursor,
    code: { react: `// Magnet cursor`, vanilla: `// Pending` },
  },
  {
    id: "target",
    name: "Target",
    description: "Bullseye target rings",
    tags: ["creative", "precision"],
    component: TargetCursor,
    code: { react: `// Target cursor`, vanilla: `// Pending` },
  },
  {
    id: "eye",
    name: "Eye",
    description: "Watching eye cursor",
    tags: ["creative", "unique"],
    component: EyeCursor,
    code: { react: `// Eye cursor`, vanilla: `// Pending` },
  },
  {
    id: "wand",
    name: "Wand",
    description: "Magic wand sparkles",
    tags: ["creative", "magical"],
    component: WandCursor,
    code: { react: `// Wand cursor`, vanilla: `// Pending` },
  },
  {
    id: "chromatic",
    name: "Chromatic",
    description: "RGB split ghosts with spring lag",
    tags: ["creative", "colorful"],
    component: ChromaticCursor,
    code: { react: `// Chromatic cursor`, vanilla: `// Pending` },
  },
  {
    id: "laser",
    name: "Laser",
    description: "Presentation-grade red laser pointer",
    tags: ["creative", "precision"],
    component: LaserCursor,
    code: { react: `// Laser cursor`, vanilla: `// Pending` },
  },
  {
    id: "terminal",
    name: "Terminal",
    description: "Blinking block caret for dev tools",
    tags: ["creative", "dev", "typography"],
    component: TerminalCursor,
    code: { react: `// Terminal cursor`, vanilla: `// Pending` },
  },
  {
    id: "goo",
    name: "Goo",
    description: "Elastic blob that stretches with velocity",
    tags: ["creative", "playful", "fluid"],
    component: GooCursor,
    code: { react: `// Goo cursor`, vanilla: `// Pending` },
  },
  {
    id: "aperture",
    name: "Aperture",
    description: "Mechanical camera iris blades",
    tags: ["creative", "media"],
    component: ApertureCursor,
    code: { react: `// Aperture cursor`, vanilla: `// Pending` },
  },
  {
    id: "matrix",
    name: "Matrix",
    description: "Falling glyphs from the machine world",
    tags: ["creative", "cyberpunk", "dev"],
    component: MatrixCursor,
    code: { react: `// Matrix cursor`, vanilla: `// Pending` },
  },
  {
    id: "prism",
    name: "Prism",
    description: "Light split into a rainbow fan",
    tags: ["creative", "colorful"],
    component: PrismCursor,
    code: { react: `// Prism cursor`, vanilla: `// Pending` },
  },
  {
    id: "ink",
    name: "Ink",
    description: "Calligraphy brush with tapered strokes",
    tags: ["creative", "art", "minimal"],
    component: InkCursor,
    code: { react: `// Ink cursor`, vanilla: `// Pending` },
  },

  // === SCIENCE CATEGORY ===
  {
    id: "planet",
    name: "Planet",
    description: "Saturn-like ringed planet",
    tags: ["science", "space"],
    component: PlanetCursor,
    code: { react: `// Planet cursor`, vanilla: `// Pending` },
  },
  {
    id: "atom",
    name: "Atom",
    description: "Orbiting electrons",
    tags: ["science", "physics"],
    component: AtomCursor,
    code: { react: `// Atom cursor`, vanilla: `// Pending` },
  },
  {
    id: "dna",
    name: "DNA",
    description: "Spinning double helix with glowing base pairs",
    tags: ["science", "biology"],
    component: DnaCursor,
    code: { react: `// DNA cursor`, vanilla: `// Pending` },
  },

  // === EMOJI FUN CATEGORY ===
  {
    id: "gamepad",
    name: "Gamepad",
    description: "Interactive controller",
    tags: ["animated", "gaming"],
    component: GamepadCursor,
    code: { react: `// Gamepad cursor`, vanilla: `// Pending` },
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "Steaming to-go cup with sleeve",
    tags: ["animated", "food"],
    component: CoffeeCursor,
    code: { react: `// Coffee cursor`, vanilla: `// Pending` },
  },

  {
    id: "music",
    name: "Music",
    description: "Floating musical notes",
    tags: ["animated", "music"],
    component: MusicCursor,
    code: { react: `// Music cursor`, vanilla: `// Pending` },
  },
  {
    id: "crown",
    name: "Crown",
    description: "Royal golden crown",
    tags: ["animated", "royal"],
    component: CrownCursor,
    featured: true,
    code: { react: `// Crown cursor`, vanilla: `// Pending` },
  },
  {
    id: "gem",
    name: "Gem",
    description: "Sparkling diamond",
    tags: ["animated", "luxury"],
    component: GemCursor,
    code: { react: `// Gem cursor`, vanilla: `// Pending` },
  },
  {
    id: "skull",
    name: "Skull",
    description: "Obsidian skull with ember gaze",
    tags: ["animated", "dark"],
    component: SkullCursor,
    code: { react: `// Skull cursor`, vanilla: `// Pending` },
  },
  {
    id: "cat",
    name: "Cat",
    description: "Cute blinking cat",
    tags: ["animated", "animals"],
    component: CatCursor,
    code: { react: `// Cat cursor`, vanilla: `// Pending` },
  },

  {
    id: "dog",
    name: "Dog",
    description: "Wagging tongue dog",
    tags: ["animated", "animals"],
    component: DogCursor,
    code: { react: `// Dog cursor`, vanilla: `// Pending` },
  },

  // === FOOD CATEGORY ===
  {
    id: "pizza",
    name: "Pizza",
    description: "Steaming hot pizza slice",
    tags: ["animated", "food"],
    component: PizzaCursor,
    code: { react: `// Pizza cursor`, vanilla: `// Pending` },
  },

  // === NATURE CATEGORY ===
  {
    id: "tree",
    name: "Tree",
    description: "Swaying nature pine",
    tags: ["animated", "nature"],
    component: TreeCursor,
    code: { react: `// Tree cursor`, vanilla: `// Pending` },
  },

  // === OBJECTS CATEGORY ===
  {
    id: "firework",
    name: "Firework",
    description: "Exploding celebration",
    tags: ["animated", "celebration"],
    component: FireworkCursor,
    code: { react: `// Firework cursor`, vanilla: `// Pending` },
  },
  {
    id: "robot",
    name: "Robot",
    description: "Futuristic bot face",
    tags: ["animated", "tech"],
    component: RobotCursor,
    featured: true,
    code: { react: `// Robot cursor`, vanilla: `// Pending` },
  },
  {
    id: "browser",
    name: "Globe",
    description: "Blue marble with orbiting satellite",
    tags: ["animated", "tech"],
    component: BrowserCursor,
    code: { react: `// Browser cursor`, vanilla: `// Pending` },
  },
  {
    id: "key",
    name: "Key",
    description: "Ornate brass skeleton key",
    tags: ["animated", "security"],
    component: KeyCursor,
    code: { react: `// Key cursor`, vanilla: `// Pending` },
  },
  {
    id: "camera",
    name: "Camera",
    description: "Professional lens focus",
    tags: ["animated", "media"],
    component: CameraCursor,
    code: { react: `// Camera cursor`, vanilla: `// Pending` },
  },
  {
    id: "idea",
    name: "Idea",
    description:
      "Glowing glass bulb with a flickering filament that bursts with light on hover",
    tags: ["animated", "creative"],
    component: IdeaCursor,
    code: { react: `// Idea cursor`, vanilla: `// Pending` },
  },
  {
    id: "lock",
    name: "Lock",
    description: "Secure animated padlock",
    tags: ["animated", "security"],
    component: LockCursor,
    code: { react: `// Lock cursor`, vanilla: `// Pending` },
  },
  {
    id: "zap",
    name: "Zap",
    description:
      "Glossy electric bolt with crackling sparks that charges up on hover",
    tags: ["animated", "energy"],
    component: ZapCursor,
    code: { react: `// Zap cursor`, vanilla: `// Pending` },
  },
  {
    id: "flame",
    name: "Flame",
    description: "Layered living fire with rising embers",
    tags: ["animated", "fire"],
    component: FlameCursor,
    featured: true,
    code: { react: `// Flame cursor`, vanilla: `// Pending` },
  },

  // === WRITTEN-SPEC COLLECTION ===
  {
    id: "jellyfish",
    name: "Jellyfish",
    description:
      "Glowing bell that pulses through the dark trailing soft tentacles",
    tags: ["animated", "nature", "water"],
    component: JellyfishCursor,
    featured: true,
    code: {
      react: `// Jellyfish cursor`,
      vanilla: `// Generated via /api/cursor-code?id=jellyfish`,
    },
  },
  {
    id: "koi",
    name: "Koi",
    description: "Kohaku koi gliding through pond ripples with a flicking tail",
    tags: ["animated", "nature", "water"],
    component: KoiCursor,
    featured: true,
    code: {
      react: `// Koi cursor`,
      vanilla: `// Generated via /api/cursor-code?id=koi`,
    },
  },
  {
    id: "snail",
    name: "Snail",
    description:
      "Glossy spiral shell with curious eye stalks that perk up on hover",
    tags: ["animated", "nature", "calm"],
    component: SnailCursor,
    featured: true,
    code: {
      react: `// Snail cursor`,
      vanilla: `// Generated via /api/cursor-code?id=snail`,
    },
  },
  {
    id: "dragonfly",
    name: "Dragonfly",
    description: "Iridescent wings beating around a jewel-toned body",
    tags: ["animated", "nature"],
    component: DragonflyCursor,
    code: {
      react: `// Dragonfly cursor`,
      vanilla: `// Generated via /api/cursor-code?id=dragonfly`,
    },
  },
  {
    id: "dandelion",
    name: "Dandelion",
    description: "Seed clock swaying in golden light as seeds drift away",
    tags: ["animated", "nature", "calm"],
    component: DandelionCursor,
    code: {
      react: `// Dandelion cursor`,
      vanilla: `// Generated via /api/cursor-code?id=dandelion`,
    },
  },
  {
    id: "moon-phase",
    name: "Moon Phase",
    description: "Cratered silver moon cycling through its phases",
    tags: ["animated", "space", "calm"],
    component: MoonPhaseCursor,
    code: {
      react: `// Moon Phase cursor`,
      vanilla: `// Generated via /api/cursor-code?id=moon-phase`,
    },
  },
  {
    id: "cassette",
    name: "Cassette",
    description: "Synthwave mixtape with spinning reels and floating notes",
    tags: ["animated", "retro", "mechanical"],
    component: CassetteCursor,
    featured: true,
    code: {
      react: `// Cassette cursor`,
      vanilla: `// Generated via /api/cursor-code?id=cassette`,
    },
  },
  {
    id: "domino",
    name: "Domino",
    description: "Ivory tiles knocking into each other, harder on hover",
    tags: ["animated", "playful", "mechanical"],
    component: DominoCursor,
    code: {
      react: `// Domino cursor`,
      vanilla: `// Generated via /api/cursor-code?id=domino`,
    },
  },
  {
    id: "newtons-cradle",
    name: "Newton's Cradle",
    description: "Chrome balls trading a swing across a polished frame",
    tags: ["animated", "physics", "mechanical"],
    component: NewtonsCradleCursor,
    featured: true,
    code: {
      react: `// Newton's Cradle cursor`,
      vanilla: `// Generated via /api/cursor-code?id=newtons-cradle`,
    },
  },
  {
    id: "pinball",
    name: "Pinball",
    description:
      "Chrome ball bouncing between flicking flippers and a lit bumper",
    tags: ["animated", "playful", "retro"],
    component: PinballCursor,
    code: {
      react: `// Pinball cursor`,
      vanilla: `// Generated via /api/cursor-code?id=pinball`,
    },
  },
  {
    id: "yoyo",
    name: "Yoyo",
    description: "Spinning yoyo that drops and climbs its string",
    tags: ["animated", "playful"],
    component: YoyoCursor,
    code: {
      react: `// Yoyo cursor`,
      vanilla: `// Generated via /api/cursor-code?id=yoyo`,
    },
  },
  {
    id: "typewriter",
    name: "Typewriter",
    description: "Mint typewriter tapping keys as the carriage slides",
    tags: ["animated", "retro", "mechanical"],
    component: TypewriterCursor,
    code: {
      react: `// Typewriter cursor`,
      vanilla: `// Generated via /api/cursor-code?id=typewriter`,
    },
  },
  {
    id: "dial",
    name: "Dial",
    description: "Cherry rotary dial that winds up and springs back",
    tags: ["animated", "retro", "mechanical"],
    component: DialCursor,
    featured: true,
    code: {
      react: `// Dial cursor`,
      vanilla: `// Generated via /api/cursor-code?id=dial`,
    },
  },
  {
    id: "gear-train",
    name: "Gear Train",
    description: "Brass and copper gears meshing tooth for tooth",
    tags: ["animated", "mechanical"],
    component: GearTrainCursor,
    featured: true,
    code: {
      react: `// Gear Train cursor`,
      vanilla: `// Generated via /api/cursor-code?id=gear-train`,
    },
  },
  {
    id: "caliper",
    name: "Caliper",
    description: "Steel calipers clamping down on a glossy bead",
    tags: ["animated", "precision", "mechanical"],
    component: CaliperCursor,
    code: {
      react: `// Caliper cursor`,
      vanilla: `// Generated via /api/cursor-code?id=caliper`,
    },
  },
  {
    id: "drafting-compass",
    name: "Drafting Compass",
    description: "Brass-hinged compass sweeping a glowing arc",
    tags: ["animated", "precision", "drafting", "creative"],
    component: DraftingCompassCursor,
    code: {
      react: `// Drafting Compass cursor`,
      vanilla: `// Generated via /api/cursor-code?id=drafting-compass`,
    },
  },
  {
    id: "oscilloscope",
    name: "Oscilloscope",
    description: "Phosphor-green waveform scrolling across a CRT",
    tags: ["animated", "tech"],
    component: OscilloscopeCursor,
    code: {
      react: `// Oscilloscope cursor`,
      vanilla: `// Generated via /api/cursor-code?id=oscilloscope`,
    },
  },
  {
    id: "packet",
    name: "Packet",
    description: "Data cube hopping a fiber link between two glowing ports",
    tags: ["animated", "tech"],
    component: PacketCursor,
    code: {
      react: `// Packet cursor`,
      vanilla: `// Generated via /api/cursor-code?id=packet`,
    },
  },
  {
    id: "seismograph",
    name: "Seismograph",
    description: "Pen arm tracing tremors on a turning paper drum",
    tags: ["animated", "tech"],
    component: SeismographCursor,
    code: {
      react: `// Seismograph cursor`,
      vanilla: `// Generated via /api/cursor-code?id=seismograph`,
    },
  },
  {
    id: "kaleidoscope",
    name: "Kaleidoscope",
    description: "Jewel-toned mandala turning in counter-rotating rings",
    tags: ["animated", "geometry", "abstract"],
    component: KaleidoscopeCursor,
    featured: true,
    code: {
      react: `// Kaleidoscope cursor`,
      vanilla: `// Generated via /api/cursor-code?id=kaleidoscope`,
    },
  },
  {
    id: "zen",
    name: "Zen",
    description: "Balanced river-stone cairn swaying over still water",
    tags: ["animated", "calm", "minimal"],
    component: ZenCursor,
    code: {
      react: `// Zen cursor`,
      vanilla: `// Generated via /api/cursor-code?id=zen`,
    },
  },
  {
    id: "labyrinth",
    name: "Labyrinth",
    description: "A spark finding its way through a golden maze to the gem",
    tags: ["animated", "geometry", "calm"],
    component: LabyrinthCursor,
    code: {
      react: `// Labyrinth cursor`,
      vanilla: `// Generated via /api/cursor-code?id=labyrinth`,
    },
  },
  {
    id: "slinky",
    name: "Slinky",
    description: "Rainbow coil stretching and springing back",
    tags: ["animated", "playful", "mechanical"],
    component: SlinkyCursor,
    code: {
      react: `// Slinky cursor`,
      vanilla: `// Generated via /api/cursor-code?id=slinky`,
    },
  },
  {
    id: "gyroscope",
    name: "Gyroscope",
    description: "Spinning rotor precessing inside a golden gimbal",
    tags: ["animated", "geometry", "mechanical"],
    component: GyroscopeCursor,
    code: {
      react: `// Gyroscope cursor`,
      vanilla: `// Generated via /api/cursor-code?id=gyroscope`,
    },
  },
  {
    id: "arcade-coin",
    name: "Arcade Coin",
    description: "Spinning gold coin that drops into a glowing slot on hover",
    tags: ["animated", "retro", "playful"],
    component: ArcadeCoinCursor,
    featured: true,
    code: {
      react: `// Arcade Coin cursor`,
      vanilla: `// Generated via /api/cursor-code?id=arcade-coin`,
    },
  },
  {
    id: "hot-air-balloon",
    name: "Hot Air Balloon",
    description:
      "Striped balloon drifting past a cloud, burner roaring on hover",
    tags: ["animated", "playful", "travel"],
    component: HotAirBalloonCursor,
    featured: true,
    code: { react: `// Hot Air Balloon cursor`, vanilla: `// Pending` },
  },
  {
    id: "lighthouse",
    name: "Lighthouse",
    description: "Candy-striped tower sweeping its beam over a rolling sea",
    tags: ["animated", "nature", "calm"],
    component: LighthouseCursor,
    featured: true,
    code: { react: `// Lighthouse cursor`, vanilla: `// Pending` },
  },
  {
    id: "hourglass",
    name: "Hourglass",
    description:
      "Sand running through glass, flipping itself when the top runs dry",
    tags: ["animated", "retro", "mechanical"],
    component: HourglassCursor,
    code: { react: `// Hourglass cursor`, vanilla: `// Pending` },
  },
  {
    id: "snow-globe",
    name: "Snow Globe",
    description: "Tiny pine in a snowfall that gets a good shake on hover",
    tags: ["animated", "playful", "winter"],
    component: SnowGlobeCursor,
    featured: true,
    code: { react: `// Snow Globe cursor`, vanilla: `// Pending` },
  },
  {
    id: "compass",
    name: "Compass",
    description:
      "Brass compass needle settling on north, spinning when you hover",
    tags: ["animated", "travel", "precision"],
    component: CompassCursor,
    code: { react: `// Compass cursor`, vanilla: `// Pending` },
  },
  {
    id: "metronome",
    name: "Metronome",
    description: "Mahogany metronome keeping time, faster on hover",
    tags: ["animated", "music", "mechanical"],
    component: MetronomeCursor,
    code: { react: `// Metronome cursor`, vanilla: `// Pending` },
  },
  {
    id: "cactus",
    name: "Cactus",
    description: "Potted cactus with a flower that blooms on hover",
    tags: ["animated", "nature", "playful"],
    component: CactusCursor,
    code: { react: `// Cactus cursor`, vanilla: `// Pending` },
  },
  {
    id: "octopus",
    name: "Octopus",
    description: "Blinking octopus curling six tentacles, wilder on hover",
    tags: ["animated", "nature", "water"],
    component: OctopusCursor,
    featured: true,
    code: { react: `// Octopus cursor`, vanilla: `// Pending` },
  },
  {
    id: "penguin",
    name: "Penguin",
    description: "Scarf-wearing penguin waddling, flapping hard on hover",
    tags: ["animated", "playful", "winter"],
    component: PenguinCursor,
    featured: true,
    code: { react: `// Penguin cursor`, vanilla: `// Pending` },
  },
  {
    id: "bee",
    name: "Bee",
    description: "Fuzzy bumblebee buzzing a figure eight",
    tags: ["animated", "nature", "playful"],
    component: BeeCursor,
    featured: true,
    code: { react: `// Bee cursor`, vanilla: `// Pending` },
  },
  {
    id: "ladybug",
    name: "Ladybug",
    description: "Spotted ladybug that opens its shell on hover",
    tags: ["animated", "nature"],
    component: LadybugCursor,
    code: { react: `// Ladybug cursor`, vanilla: `// Pending` },
  },
  {
    id: "origami-crane",
    name: "Origami Crane",
    description: "Folded paper crane flapping, wings all the way down on hover",
    tags: ["animated", "calm", "creative"],
    component: OrigamiCraneCursor,
    code: { react: `// Origami Crane cursor`, vanilla: `// Pending` },
  },
  {
    id: "lava-lamp",
    name: "Lava Lamp",
    description: "Wax blobs rising and sinking in a chrome lava lamp",
    tags: ["animated", "retro", "dark-mode"],
    component: LavaLampCursor,
    code: { react: `// Lava Lamp cursor`, vanilla: `// Pending` },
  },
  {
    id: "disco-ball",
    name: "Disco Ball",
    description: "Mirror ball turning, throwing colored light around it",
    tags: ["animated", "retro", "dark-mode"],
    component: DiscoBallCursor,
    featured: true,
    code: { react: `// Disco Ball cursor`, vanilla: `// Pending` },
  },
  {
    id: "rubber-duck",
    name: "Rubber Duck",
    description: "Bath duck bobbing on the water, squeaks on hover",
    tags: ["animated", "playful", "water"],
    component: RubberDuckCursor,
    featured: true,
    code: { react: `// Rubber Duck cursor`, vanilla: `// Pending` },
  },
  {
    id: "owl",
    name: "Owl",
    description: "Blinking owl on a branch, wide-eyed on hover",
    tags: ["animated", "nature", "calm"],
    component: OwlCursor,
    featured: true,
    code: { react: `// Owl cursor`, vanilla: `// Pending` },
  },
  {
    id: "donut",
    name: "Donut",
    description: "Pink glazed donut with sprinkles, turning slowly",
    tags: ["animated", "food", "playful"],
    component: DonutCursor,
    featured: true,
    code: { react: `// Donut cursor`, vanilla: `// Pending` },
  },
  {
    id: "boba",
    name: "Boba",
    description:
      "Milk tea with bouncing pearls, one shoots up the straw on hover",
    tags: ["animated", "food", "playful"],
    component: BobaCursor,
    featured: true,
    code: { react: `// Boba cursor`, vanilla: `// Pending` },
  },
  {
    id: "astronaut",
    name: "Astronaut",
    description: "Little astronaut floating among the stars, waving on hover",
    tags: ["animated", "space", "playful"],
    component: AstronautCursor,
    featured: true,
    code: { react: `// Astronaut cursor`, vanilla: `// Pending` },
  },
  {
    id: "soap-bubble",
    name: "Soap Bubble",
    description: "Wobbling soap bubble with a swirling rainbow film",
    tags: ["animated", "calm", "gradient"],
    component: SoapBubbleCursor,
    code: { react: `// Soap Bubble cursor`, vanilla: `// Pending` },
  },
  {
    id: "crystal-ball",
    name: "Crystal Ball",
    description: "Swirling mist in a crystal ball, a star appears on hover",
    tags: ["animated", "magical", "dark-mode"],
    component: CrystalBallCursor,
    featured: true,
    code: { react: `// Crystal Ball cursor`, vanilla: `// Pending` },
  },
  {
    id: "magnifier",
    name: "Magnifier",
    description: "Brass magnifying glass that zooms in on hover",
    tags: ["animated", "precision", "creative"],
    component: MagnifierCursor,
    code: { react: `// Magnifier cursor`, vanilla: `// Pending` },
  },
  {
    id: "pufferfish",
    name: "Pufferfish",
    description: "Spiky little pufferfish that puffs right up on hover",
    tags: ["animated", "water", "playful"],
    component: PufferfishCursor,
    featured: true,
    code: { react: `// Pufferfish cursor`, vanilla: `// Pending` },
  },
  {
    id: "pinwheel",
    name: "Pinwheel",
    description: "Four-color paper pinwheel spinning in the breeze",
    tags: ["animated", "playful", "calm"],
    component: PinwheelCursor,
    code: { react: `// Pinwheel cursor`, vanilla: `// Pending` },
  },
  {
    id: "alarm-clock",
    name: "Alarm Clock",
    description: "Twin-bell alarm clock ticking, ringing on hover",
    tags: ["animated", "retro", "mechanical"],
    component: AlarmClockCursor,
    featured: true,
    code: { react: `// Alarm Clock cursor`, vanilla: `// Pending` },
  },
];

// The landing page selection, in display order. Each of these also has
// `featured: true` above so older code that filters on the flag still agrees.
export const FEATURED_IDS = [
  "hot-air-balloon",
  "jellyfish",
  "disco-ball",
  "penguin",
  "kaleidoscope",
  "astronaut",
  "snow-globe",
  "koi",
  "boba",
  "newtons-cradle",
  "octopus",
  "cassette",
  "crystal-ball",
  "rubber-duck",
  "dial",
  "owl",
  "lighthouse",
  "gear-train",
  "bee",
  "donut",
  "snail",
  "pufferfish",
  "arcade-coin",
  "alarm-clock",
  "robot",
  "flame",
  "ghost",
  "crown",
  "dot-ring",
  "halo",
  "liquid-mercury",
  "comet",
];

export const FEATURED_CURSORS: CursorDefinition[] = FEATURED_IDS.map(
  (id) => CURSORS.find((cursor) => cursor.id === id)!
);
