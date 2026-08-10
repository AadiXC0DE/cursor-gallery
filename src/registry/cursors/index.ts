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

export interface CursorDefinition {
  id: string;
  name: string;
  description: string;
  tags: string[];
  component: ComponentType<{ x: number; y: number; isStatic?: boolean }>;
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
    featured: true,
    code: { react: `// Default cursor`, vanilla: `// Pending` },
  },
  {
    id: "circle",
    name: "Circle",
    description: "Clean circular outline",
    tags: ["minimal", "geometry"],
    component: CircleCursor,
    featured: true,
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
    tags: ["minimal", "premium"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    description: "Digital interference effect",
    tags: ["effect", "cyberpunk"],
    component: GlitchCursor,
    featured: true,
    code: { react: `// Glitch cursor`, vanilla: `// Pending` },
  },
  {
    id: "liquid-mercury",
    name: "Liquid Mercury",
    description: "Fluid metallic motion",
    tags: ["effect", "premium", "metallic"],
    component: LiquidMercuryCursor,
    featured: true,
    code: { react: `// Liquid Mercury cursor`, vanilla: `// Pending` },
  },
  {
    id: "particle-swarm",
    name: "Particle Swarm",
    description: "Dynamic orbiting particles",
    tags: ["effect", "particles", "premium"],
    component: ParticleSwarmCursor,
    featured: true,
    code: { react: `// Particle Swarm cursor`, vanilla: `// Pending` },
  },
  {
    id: "cyber-scanner",
    name: "Cyber Scanner",
    description: "Futuristic tech interface",
    tags: ["effect", "cyberpunk", "premium"],
    component: CyberScannerCursor,
    featured: true,
    code: { react: `// Cyber Scanner cursor`, vanilla: `// Pending` },
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Flowing northern-lights gradient wash",
    tags: ["effect", "premium", "gradient", "dark-mode"],
    component: AuroraCursor,
    featured: true,
    code: { react: `// Aurora cursor`, vanilla: `// Pending` },
  },
  {
    id: "comet",
    name: "Comet",
    description: "Velocity-driven tail that follows your motion",
    tags: ["effect", "motion", "premium"],
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
    featured: true,
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
    tags: ["effect", "space", "premium"],
    component: GalaxyCursor,
    featured: true,
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
    tags: ["effect", "energy", "premium"],
    component: PlasmaCursor,
    code: { react: `// Plasma cursor`, vanilla: `// Pending` },
  },
  {
    id: "sakura",
    name: "Sakura",
    description: "Drifting cherry-blossom petals",
    tags: ["effect", "nature", "particles"],
    component: SakuraCursor,
    featured: true,
    code: { react: `// Sakura cursor`, vanilla: `// Pending` },
  },

  // === SHAPE CATEGORY ===
  {
    id: "gradient-blob",
    name: "Gradient Blob",
    description: "Fluid organic shape",
    tags: ["shape", "gradient", "abstract"],
    component: GradientBlobCursor,
    featured: true,
    code: { react: `// Gradient Blob cursor`, vanilla: `// Pending` },
  },

  {
    id: "heart",
    name: "Heart",
    description: "Beating heart shape",
    tags: ["shape", "love"],
    component: HeartCursor,
    featured: true,
    code: { react: `// Heart cursor`, vanilla: `// Pending` },
  },
  {
    id: "star",
    name: "Star",
    description: "Rotating golden star",
    tags: ["shape", "rotating"],
    component: StarCursor,
    featured: true,
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
    description: "Gentle swaying crescent",
    tags: ["shape", "space"],
    component: MoonCursor,
    featured: true,
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
    description: "Floating fluffy cloud",
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
    featured: true,
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
    featured: true,
    code: { react: `// Rocket cursor`, vanilla: `// Pending` },
  },
  {
    id: "ghost",
    name: "Ghost",
    description: "Floating spooky ghost",
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
    featured: true,
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
    tags: ["creative", "premium", "colorful"],
    component: ChromaticCursor,
    featured: true,
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
    tags: ["creative", "premium", "colorful"],
    component: PrismCursor,
    featured: true,
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
    featured: true,
    code: { react: `// Atom cursor`, vanilla: `// Pending` },
  },
  {
    id: "dna",
    name: "DNA",
    description: "Rotating helix strand",
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
    featured: true,
    code: { react: `// Music cursor`, vanilla: `// Pending` },
  },
  {
    id: "crown",
    name: "Crown",
    description: "Royal golden crown",
    tags: ["animated", "royal"],
    component: CrownCursor,
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
    code: { react: `// Robot cursor`, vanilla: `// Pending` },
  },
  {
    id: "browser",
    name: "Globe",
    description: "Spinning web globe",
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
    description: "Glowing inspiration",
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
    description: "Electric energy bolt",
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
    code: { react: `// Flame cursor`, vanilla: `// Pending` },
  },
];
