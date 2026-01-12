import { ComponentType } from "react"

// Existing cursors
import DefaultCursor from "./default"
import DotRingCursor from "./dot-ring"
import GlowCursor from "./glow"
import GlitchCursor from "./glitch"
import GradientBlobCursor from "./gradient-blob"
import LiquidMercuryCursor from "./liquid-mercury"
import ParticleSwarmCursor from "./particle-swarm"
import CyberScannerCursor from "./cyber-scanner"


// Minimal cursors
import CircleCursor from "./circle"
import ArrowCursor from "./arrow"
import PlusCursor from "./plus"
import CrosshairCursor from "./crosshair"
import DiamondCursor from "./diamond"
import SquareCursor from "./square"
import TriangleCursor from "./triangle"
import LineCursor from "./line"

// Effect cursors
import TrailCursor from "./trail"
import SparkleCursor from "./sparkle"
import FireCursor from "./fire"
import RippleCursor from "./ripple"
import PulseCursor from "./pulse"
import NeonCursor from "./neon"
import ElectricCursor from "./electric"
import SmokeCursor from "./smoke"

// Shape cursors
import HeartCursor from "./heart"
import StarCursor from "./star"
import HexagonCursor from "./hexagon"
import MoonCursor from "./moon"
import SunCursor from "./sun"
import CloudCursor from "./cloud"
import LeafCursor from "./leaf"
import FlowerCursor from "./flower"
import SnowflakeCursor from "./snowflake"

// Animated cursors
import SpinnerCursor from "./spinner"
import BounceCursor from "./bounce"
import WobbleCursor from "./wobble"
import RotateCursor from "./rotate"
import BreatheCursor from "./breathe"
import OrbitCursor from "./orbit"
import FloatCursor from "./float"

// Creative cursors
import TextCursor from "./text"
import PixelCursor from "./pixel"
import RainbowCursor from "./rainbow"
import GlassCursor from "./glass"
import MagnetCursor from "./magnet"
import TargetCursor from "./target"
import EyeCursor from "./eye"
import WandCursor from "./wand"


// Character cursors
import LightningCursor from "./lightning"
import RocketCursor from "./rocket"
import GhostCursor from "./ghost"
import PlanetCursor from "./planet"
import AtomCursor from "./atom"
import DnaCursor from "./dna"

// Emoji cursors
import GamepadCursor from "./gamepad"
import CoffeeCursor from "./coffee"

import MusicCursor from "./music"
import CrownCursor from "./crown"
import GemCursor from "./gem"
import SkullCursor from "./skull"
import CatCursor from "./cat"

import DogCursor from "./dog"
import PizzaCursor from "./pizza"
import FireworkCursor from "./firework"
import RobotCursor from "./robot"
import BrowserCursor from "./browser"
import KeyCursor from "./key"
import CameraCursor from "./camera"
import IdeaCursor from "./idea"
import LockCursor from "./lock"
import ZapCursor from "./zap"
import FlameCursor from "./flame"
import TreeCursor from "./tree"


export interface CursorDefinition {
  id: string
  name: string
  description: string
  tags: string[]
  component: ComponentType<{ x: number; y: number; isStatic?: boolean }>
  featured?: boolean
  code: {
    react: string
    vanilla: string
    hook?: string
  }
}

export const CURSORS: CursorDefinition[] = [
  // === MINIMAL CATEGORY ===
  { id: "default", name: "Default", description: "Elegant gradient dot cursor", tags: ["minimal", "basic"], component: DefaultCursor, featured: true, code: { react: `// Default cursor`, vanilla: `// Pending` } },
  { id: "circle", name: "Circle", description: "Clean circular outline", tags: ["minimal", "geometry"], component: CircleCursor, featured: true, code: { react: `// Circle cursor`, vanilla: `// Pending` } },
  { id: "arrow", name: "Arrow", description: "Classic pointer with gradient", tags: ["minimal", "pointer"], component: ArrowCursor, code: { react: `// Arrow cursor`, vanilla: `// Pending` } },
  { id: "plus", name: "Plus", description: "Precision crosshair plus", tags: ["minimal", "geometry"], component: PlusCursor, code: { react: `// Plus cursor`, vanilla: `// Pending` } },
  { id: "crosshair", name: "Crosshair", description: "Target precision cursor", tags: ["minimal", "precision"], component: CrosshairCursor, code: { react: `// Crosshair cursor`, vanilla: `// Pending` } },
  { id: "diamond", name: "Diamond", description: "Rotated square shape", tags: ["minimal", "geometry"], component: DiamondCursor, code: { react: `// Diamond cursor`, vanilla: `// Pending` } },
  { id: "square", name: "Square", description: "Simple box outline", tags: ["minimal", "geometry"], component: SquareCursor, code: { react: `// Square cursor`, vanilla: `// Pending` } },
  { id: "triangle", name: "Triangle", description: "Gradient pointer triangle", tags: ["minimal", "geometry"], component: TriangleCursor, code: { react: `// Triangle cursor`, vanilla: `// Pending` } },
  { id: "line", name: "Line", description: "Slim gradient line", tags: ["minimal", "basic"], component: LineCursor, code: { react: `// Line cursor`, vanilla: `// Pending` } },
  { id: "dot-ring", name: "Dot & Ring", description: "Dot with trailing ring", tags: ["minimal", "geometry"], component: DotRingCursor, featured: true, code: { react: `// DotRing cursor`, vanilla: `// Pending` } },

  // === EFFECT CATEGORY ===
  { id: "glow", name: "Soft Glow", description: "Radiant illumination effect", tags: ["effect", "light", "dark-mode"], component: GlowCursor, featured: true, code: { react: `// Glow cursor`, vanilla: `// Pending` } },
  { id: "trail", name: "Trail", description: "Fading dot trail effect", tags: ["effect", "trail", "motion"], component: TrailCursor, code: { react: `// Trail cursor`, vanilla: `// Pending` } },
  { id: "sparkle", name: "Sparkle", description: "Glittering star particles", tags: ["effect", "particles", "magical"], component: SparkleCursor, featured: true, code: { react: `// Sparkle cursor`, vanilla: `// Pending` } },
  { id: "fire", name: "Fire", description: "Animated flame particles", tags: ["effect", "particles", "hot"], component: FireCursor, code: { react: `// Fire cursor`, vanilla: `// Pending` } },
  { id: "ripple", name: "Ripple", description: "Expanding water rings", tags: ["effect", "water", "motion"], component: RippleCursor, featured: true, code: { react: `// Ripple cursor`, vanilla: `// Pending` } },
  { id: "pulse", name: "Pulse", description: "Pulsating ring animation", tags: ["effect", "motion"], component: PulseCursor, code: { react: `// Pulse cursor`, vanilla: `// Pending` } },
  { id: "neon", name: "Neon", description: "Flickering neon glow", tags: ["effect", "glow", "cyberpunk"], component: NeonCursor, featured: true, code: { react: `// Neon cursor`, vanilla: `// Pending` } },
  { id: "electric", name: "Electric", description: "Lightning bolt animation", tags: ["effect", "energy"], component: ElectricCursor, code: { react: `// Electric cursor`, vanilla: `// Pending` } },
  { id: "smoke", name: "Smoke", description: "Rising vapor effect", tags: ["effect", "particles"], component: SmokeCursor, code: { react: `// Smoke cursor`, vanilla: `// Pending` } },
  { id: "glitch", name: "Cyber Glitch", description: "Digital interference effect", tags: ["effect", "cyberpunk"], component: GlitchCursor, featured: true, code: { react: `// Glitch cursor`, vanilla: `// Pending` } },
  { id: "liquid-mercury", name: "Liquid Mercury", description: "Fluid metallic motion", tags: ["effect", "premium", "metallic"], component: LiquidMercuryCursor, featured: true, code: { react: `// Liquid Mercury cursor`, vanilla: `// Pending` } },
  { id: "particle-swarm", name: "Particle Swarm", description: "Dynamic orbiting particles", tags: ["effect", "particles", "premium"], component: ParticleSwarmCursor, featured: true, code: { react: `// Particle Swarm cursor`, vanilla: `// Pending` } },
  { id: "cyber-scanner", name: "Cyber Scanner", description: "Futuristic tech interface", tags: ["effect", "cyberpunk", "premium"], component: CyberScannerCursor, featured: true, code: { react: `// Cyber Scanner cursor`, vanilla: `// Pending` } },


  // === SHAPE CATEGORY ===
  { id: "gradient-blob", name: "Gradient Blob", description: "Fluid organic shape", tags: ["shape", "gradient", "abstract"], component: GradientBlobCursor, featured: true, code: { react: `// Gradient Blob cursor`, vanilla: `// Pending` } },

  { id: "heart", name: "Heart", description: "Beating heart shape", tags: ["shape", "love"], component: HeartCursor, featured: true, code: { react: `// Heart cursor`, vanilla: `// Pending` } },
  { id: "star", name: "Star", description: "Rotating golden star", tags: ["shape", "rotating"], component: StarCursor, featured: true, code: { react: `// Star cursor`, vanilla: `// Pending` } },
  { id: "hexagon", name: "Hexagon", description: "Rotating hexagon", tags: ["shape", "geometry"], component: HexagonCursor, code: { react: `// Hexagon cursor`, vanilla: `// Pending` } },
  { id: "moon", name: "Moon", description: "Gentle swaying crescent", tags: ["shape", "space"], component: MoonCursor, featured: true, code: { react: `// Moon cursor`, vanilla: `// Pending` } },
  { id: "sun", name: "Sun", description: "Rotating sun rays", tags: ["shape", "nature"], component: SunCursor, code: { react: `// Sun cursor`, vanilla: `// Pending` } },
  { id: "cloud", name: "Cloud", description: "Floating fluffy cloud", tags: ["shape", "nature"], component: CloudCursor, code: { react: `// Cloud cursor`, vanilla: `// Pending` } },
  { id: "leaf", name: "Leaf", description: "Swaying green leaf", tags: ["shape", "nature"], component: LeafCursor, code: { react: `// Leaf cursor`, vanilla: `// Pending` } },
  { id: "flower", name: "Flower", description: "Spinning flower petals", tags: ["shape", "nature"], component: FlowerCursor, code: { react: `// Flower cursor`, vanilla: `// Pending` } },
  { id: "snowflake", name: "Snowflake", description: "Rotating ice crystal", tags: ["shape", "winter"], component: SnowflakeCursor, code: { react: `// Snowflake cursor`, vanilla: `// Pending` } },

  // === ANIMATED CATEGORY ===
  { id: "spinner", name: "Spinner", description: "Loading spinner animation", tags: ["animated", "loading"], component: SpinnerCursor, featured: true, code: { react: `// Spinner cursor`, vanilla: `// Pending` } },
  { id: "bounce", name: "Bounce", description: "Bouncing ball effect", tags: ["animated", "playful"], component: BounceCursor, code: { react: `// Bounce cursor`, vanilla: `// Pending` } },
  { id: "wobble", name: "Wobble", description: "Wobbly jelly effect", tags: ["animated", "playful"], component: WobbleCursor, code: { react: `// Wobble cursor`, vanilla: `// Pending` } },
  { id: "rotate", name: "Rotate", description: "Continuously spinning", tags: ["animated", "motion"], component: RotateCursor, code: { react: `// Rotate cursor`, vanilla: `// Pending` } },
  { id: "breathe", name: "Breathe", description: "Gentle breathing scale", tags: ["animated", "calm"], component: BreatheCursor, code: { react: `// Breathe cursor`, vanilla: `// Pending` } },
  { id: "orbit", name: "Orbit", description: "Orbiting satellite dots", tags: ["animated", "space"], component: OrbitCursor, code: { react: `// Orbit cursor`, vanilla: `// Pending` } },
  { id: "float", name: "Float", description: "Drifting motion effect", tags: ["animated", "calm"], component: FloatCursor, code: { react: `// Float cursor`, vanilla: `// Pending` } },
  { id: "lightning", name: "Lightning", description: "Flickering bolt", tags: ["animated", "energy"], component: LightningCursor, code: { react: `// Lightning cursor`, vanilla: `// Pending` } },
  { id: "rocket", name: "Rocket", description: "Space rocket pointer", tags: ["animated", "space"], component: RocketCursor, featured: true, code: { react: `// Rocket cursor`, vanilla: `// Pending` } },
  { id: "ghost", name: "Ghost", description: "Floating spooky ghost", tags: ["animated", "fun"], component: GhostCursor, featured: true, code: { react: `// Ghost cursor`, vanilla: `// Pending` } },


  // === CREATIVE CATEGORY ===
  { id: "text", name: "Text", description: "Click text cursor", tags: ["creative", "typography"], component: TextCursor, code: { react: `// Text cursor`, vanilla: `// Pending` } },
  { id: "pixel", name: "Pixel", description: "Retro pixel art style", tags: ["creative", "retro"], component: PixelCursor, code: { react: `// Pixel cursor`, vanilla: `// Pending` } },
  { id: "rainbow", name: "Rainbow", description: "Spinning rainbow colors", tags: ["creative", "colorful"], component: RainbowCursor, code: { react: `// Rainbow cursor`, vanilla: `// Pending` } },
  { id: "glass", name: "Glass", description: "Glassmorphic blur effect", tags: ["creative", "modern"], component: GlassCursor, code: { react: `// Glass cursor`, vanilla: `// Pending` } },
  { id: "magnet", name: "Magnet", description: "Magnetic poles cursor", tags: ["creative", "science"], component: MagnetCursor, code: { react: `// Magnet cursor`, vanilla: `// Pending` } },
  { id: "target", name: "Target", description: "Bullseye target rings", tags: ["creative", "precision"], component: TargetCursor, code: { react: `// Target cursor`, vanilla: `// Pending` } },
  { id: "eye", name: "Eye", description: "Watching eye cursor", tags: ["creative", "unique"], component: EyeCursor, code: { react: `// Eye cursor`, vanilla: `// Pending` } },
  { id: "wand", name: "Wand", description: "Magic wand sparkles", tags: ["creative", "magical"], component: WandCursor, code: { react: `// Wand cursor`, vanilla: `// Pending` } },


  // === SCIENCE CATEGORY ===
  { id: "planet", name: "Planet", description: "Saturn-like ringed planet", tags: ["science", "space"], component: PlanetCursor, code: { react: `// Planet cursor`, vanilla: `// Pending` } },
  { id: "atom", name: "Atom", description: "Orbiting electrons", tags: ["science", "physics"], component: AtomCursor, code: { react: `// Atom cursor`, vanilla: `// Pending` } },
  { id: "dna", name: "DNA", description: "Rotating helix strand", tags: ["science", "biology"], component: DnaCursor, code: { react: `// DNA cursor`, vanilla: `// Pending` } },

  // === EMOJI FUN CATEGORY ===
  { id: "gamepad", name: "Gamepad", description: "Interactive controller", tags: ["animated", "gaming"], component: GamepadCursor, code: { react: `// Gamepad cursor`, vanilla: `// Pending` } },
  { id: "coffee", name: "Coffee", description: "Steaming hot coffee", tags: ["animated", "food"], component: CoffeeCursor, code: { react: `// Coffee cursor`, vanilla: `// Pending` } },

  { id: "music", name: "Music", description: "Floating musical notes", tags: ["animated", "music"], component: MusicCursor, code: { react: `// Music cursor`, vanilla: `// Pending` } },
  { id: "crown", name: "Crown", description: "Royal golden crown", tags: ["animated", "royal"], component: CrownCursor, code: { react: `// Crown cursor`, vanilla: `// Pending` } },
  { id: "gem", name: "Gem", description: "Sparkling diamond", tags: ["animated", "luxury"], component: GemCursor, code: { react: `// Gem cursor`, vanilla: `// Pending` } },
  { id: "skull", name: "Skull", description: "Glowing eyes skull", tags: ["animated", "dark"], component: SkullCursor, code: { react: `// Skull cursor`, vanilla: `// Pending` } },
  { id: "cat", name: "Cat", description: "Cute blinking cat", tags: ["animated", "animals"], component: CatCursor, code: { react: `// Cat cursor`, vanilla: `// Pending` } },

  { id: "dog", name: "Dog", description: "Wagging tongue dog", tags: ["animated", "animals"], component: DogCursor, code: { react: `// Dog cursor`, vanilla: `// Pending` } },

  // === FOOD CATEGORY ===
  { id: "pizza", name: "Pizza", description: "Steaming hot pizza slice", tags: ["animated", "food"], component: PizzaCursor, code: { react: `// Pizza cursor`, vanilla: `// Pending` } },

  // === NATURE CATEGORY ===
  { id: "tree", name: "Tree", description: "Swaying nature pine", tags: ["animated", "nature"], component: TreeCursor, code: { react: `// Tree cursor`, vanilla: `// Pending` } },

  // === OBJECTS CATEGORY ===
  { id: "firework", name: "Firework", description: "Exploding celebration", tags: ["animated", "celebration"], component: FireworkCursor, code: { react: `// Firework cursor`, vanilla: `// Pending` } },
  { id: "robot", name: "Robot", description: "Futuristic bot face", tags: ["animated", "tech"], component: RobotCursor, code: { react: `// Robot cursor`, vanilla: `// Pending` } },
  { id: "browser", name: "Globe", description: "Spinning web globe", tags: ["animated", "tech"], component: BrowserCursor, code: { react: `// Browser cursor`, vanilla: `// Pending` } },
  { id: "key", name: "Key", description: "Shimmering golden key", tags: ["animated", "security"], component: KeyCursor, code: { react: `// Key cursor`, vanilla: `// Pending` } },
  { id: "camera", name: "Camera", description: "Professional lens focus", tags: ["animated", "media"], component: CameraCursor, code: { react: `// Camera cursor`, vanilla: `// Pending` } },
  { id: "idea", name: "Idea", description: "Glowing inspiration", tags: ["animated", "creative"], component: IdeaCursor, code: { react: `// Idea cursor`, vanilla: `// Pending` } },
  { id: "lock", name: "Lock", description: "Secure animated padlock", tags: ["animated", "security"], component: LockCursor, code: { react: `// Lock cursor`, vanilla: `// Pending` } },
  { id: "zap", name: "Zap", description: "Electric energy bolt", tags: ["animated", "energy"], component: ZapCursor, code: { react: `// Zap cursor`, vanilla: `// Pending` } },
  { id: "flame", name: "Flame", description: "Animated fire particles", tags: ["animated", "fire"], component: FlameCursor, code: { react: `// Flame cursor`, vanilla: `// Pending` } },

]
