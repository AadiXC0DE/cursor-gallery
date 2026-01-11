import { ComponentType } from "react"

// Existing cursors
import DefaultCursor from "./default"
import DotRingCursor from "./dot-ring"
import GlowCursor from "./glow"
import GlitchCursor from "./glitch"
import GradientBlobCursor from "./gradient-blob"

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
import EmojiCursor from "./emoji"
import TextCursor from "./text"
import PixelCursor from "./pixel"
import RainbowCursor from "./rainbow"
import GlassCursor from "./glass"
import MagnetCursor from "./magnet"
import TargetCursor from "./target"
import EyeCursor from "./eye"
import HandCursor from "./hand"
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
import PaintbrushCursor from "./paintbrush"
import CoffeeCursor from "./coffee"
import MusicCursor from "./music"
import CrownCursor from "./crown"
import GemCursor from "./gem"
import SkullCursor from "./skull"
import UnicornCursor from "./unicorn"
import CatCursor from "./cat"
import DogCursor from "./dog"
import PizzaCursor from "./pizza"
import FireworkCursor from "./firework"
import ButterflyCursor from "./butterfly"
import CrystalCursor from "./crystal"
import ThunderCursor from "./thunder"
import PeaceCursor from "./peace"
import AlienCursor from "./alien"
import BombCursor from "./bomb"
import DragonCursor from "./dragon"
import SwordCursor from "./sword"
import MagicCursor from "./magic"
import RoseCursor from "./rose"
import BeeCursor from "./bee"
import IceCursor from "./ice"
import BalloonCursor from "./balloon"
import DropletCursor from "./droplet"
import ShieldCursor from "./shield"
import DinoCursor from "./dino"
import AvocadoCursor from "./avocado"
import CookieCursor from "./cookie"
import TacoCursor from "./taco"
import DonutCursor from "./donut"
import RobotCursor from "./robot"
import OctopusCursor from "./octopus"
import BrowserCursor from "./browser"
import KeyCursor from "./key"
import CameraCursor from "./camera"
import IdeaCursor from "./idea"
import LockCursor from "./lock"
import ZapCursor from "./zap"
import FlameCursor from "./flame"
import WaveCursor from "./wave"
import SoccerCursor from "./soccer"
import KissCursor from "./kiss"
import CloverCursor from "./clover"
import TreeCursor from "./tree"
import FishCursor from "./fish"
import BirdCursor from "./bird"
import CherryCursor from "./cherry"
import ToolCursor from "./tool"
import NinjaCursor from "./ninja"
import AnchorCursor from "./anchor"

export interface CursorDefinition {
  id: string
  name: string
  description: string
  tags: string[]
  component: ComponentType<{ x: number; y: number }>
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
  { id: "emoji", name: "Emoji Pointer", description: "Pointing finger emoji", tags: ["creative", "emoji"], component: EmojiCursor, code: { react: `// Emoji cursor`, vanilla: `// Pending` } },
  { id: "text", name: "Text", description: "Click text cursor", tags: ["creative", "typography"], component: TextCursor, code: { react: `// Text cursor`, vanilla: `// Pending` } },
  { id: "pixel", name: "Pixel", description: "Retro pixel art style", tags: ["creative", "retro"], component: PixelCursor, code: { react: `// Pixel cursor`, vanilla: `// Pending` } },
  { id: "rainbow", name: "Rainbow", description: "Spinning rainbow colors", tags: ["creative", "colorful"], component: RainbowCursor, code: { react: `// Rainbow cursor`, vanilla: `// Pending` } },
  { id: "glass", name: "Glass", description: "Glassmorphic blur effect", tags: ["creative", "modern"], component: GlassCursor, code: { react: `// Glass cursor`, vanilla: `// Pending` } },
  { id: "magnet", name: "Magnet", description: "Magnetic poles cursor", tags: ["creative", "science"], component: MagnetCursor, code: { react: `// Magnet cursor`, vanilla: `// Pending` } },
  { id: "target", name: "Target", description: "Bullseye target rings", tags: ["creative", "precision"], component: TargetCursor, code: { react: `// Target cursor`, vanilla: `// Pending` } },
  { id: "eye", name: "Eye", description: "Watching eye cursor", tags: ["creative", "unique"], component: EyeCursor, code: { react: `// Eye cursor`, vanilla: `// Pending` } },
  { id: "hand", name: "Hand", description: "Open hand emoji", tags: ["creative", "emoji"], component: HandCursor, code: { react: `// Hand cursor`, vanilla: `// Pending` } },
  { id: "wand", name: "Wand", description: "Magic wand sparkles", tags: ["creative", "magical"], component: WandCursor, code: { react: `// Wand cursor`, vanilla: `// Pending` } },

  // === SCIENCE CATEGORY ===
  { id: "planet", name: "Planet", description: "Saturn-like ringed planet", tags: ["science", "space"], component: PlanetCursor, code: { react: `// Planet cursor`, vanilla: `// Pending` } },
  { id: "atom", name: "Atom", description: "Orbiting electrons", tags: ["science", "physics"], component: AtomCursor, code: { react: `// Atom cursor`, vanilla: `// Pending` } },
  { id: "dna", name: "DNA", description: "Rotating helix strand", tags: ["science", "biology"], component: DnaCursor, code: { react: `// DNA cursor`, vanilla: `// Pending` } },

  // === EMOJI FUN CATEGORY ===
  { id: "gamepad", name: "Gamepad", description: "Gaming controller", tags: ["emoji", "gaming"], component: GamepadCursor, code: { react: `// Gamepad cursor`, vanilla: `// Pending` } },
  { id: "paintbrush", name: "Paintbrush", description: "Artist's brush", tags: ["emoji", "art"], component: PaintbrushCursor, code: { react: `// Paintbrush cursor`, vanilla: `// Pending` } },
  { id: "coffee", name: "Coffee", description: "Hot coffee cup", tags: ["emoji", "food"], component: CoffeeCursor, code: { react: `// Coffee cursor`, vanilla: `// Pending` } },
  { id: "music", name: "Music", description: "Dancing music note", tags: ["emoji", "music"], component: MusicCursor, code: { react: `// Music cursor`, vanilla: `// Pending` } },
  { id: "crown", name: "Crown", description: "Royal crown", tags: ["emoji", "royal"], component: CrownCursor, code: { react: `// Crown cursor`, vanilla: `// Pending` } },
  { id: "gem", name: "Gem", description: "Spinning gemstone", tags: ["emoji", "luxury"], component: GemCursor, code: { react: `// Gem cursor`, vanilla: `// Pending` } },
  { id: "skull", name: "Skull", description: "Spooky skull", tags: ["emoji", "dark"], component: SkullCursor, code: { react: `// Skull cursor`, vanilla: `// Pending` } },
  { id: "unicorn", name: "Unicorn", description: "Magical unicorn", tags: ["emoji", "magical"], component: UnicornCursor, code: { react: `// Unicorn cursor`, vanilla: `// Pending` } },
  { id: "cat", name: "Cat", description: "Cute cat face", tags: ["emoji", "animals"], component: CatCursor, code: { react: `// Cat cursor`, vanilla: `// Pending` } },
  { id: "dog", name: "Dog", description: "Friendly dog face", tags: ["emoji", "animals"], component: DogCursor, code: { react: `// Dog cursor`, vanilla: `// Pending` } },

  // === FOOD CATEGORY ===
  { id: "pizza", name: "Pizza", description: "Delicious pizza slice", tags: ["emoji", "food"], component: PizzaCursor, code: { react: `// Pizza cursor`, vanilla: `// Pending` } },
  { id: "taco", name: "Taco", description: "Tasty taco", tags: ["emoji", "food"], component: TacoCursor, code: { react: `// Taco cursor`, vanilla: `// Pending` } },
  { id: "donut", name: "Donut", description: "Spinning donut", tags: ["emoji", "food"], component: DonutCursor, code: { react: `// Donut cursor`, vanilla: `// Pending` } },
  { id: "avocado", name: "Avocado", description: "Fresh avocado", tags: ["emoji", "food"], component: AvocadoCursor, code: { react: `// Avocado cursor`, vanilla: `// Pending` } },
  { id: "cookie", name: "Cookie", description: "Chocolate chip cookie", tags: ["emoji", "food"], component: CookieCursor, code: { react: `// Cookie cursor`, vanilla: `// Pending` } },
  { id: "cherry", name: "Cherry", description: "Swinging cherries", tags: ["emoji", "food"], component: CherryCursor, code: { react: `// Cherry cursor`, vanilla: `// Pending` } },

  // === NATURE CATEGORY ===
  { id: "butterfly", name: "Butterfly", description: "Floating butterfly", tags: ["emoji", "nature"], component: ButterflyCursor, code: { react: `// Butterfly cursor`, vanilla: `// Pending` } },
  { id: "bee", name: "Bee", description: "Buzzing bee", tags: ["emoji", "nature"], component: BeeCursor, code: { react: `// Bee cursor`, vanilla: `// Pending` } },
  { id: "bird", name: "Bird", description: "Flying bird", tags: ["emoji", "nature"], component: BirdCursor, code: { react: `// Bird cursor`, vanilla: `// Pending` } },
  { id: "fish", name: "Fish", description: "Swimming fish", tags: ["emoji", "nature"], component: FishCursor, code: { react: `// Fish cursor`, vanilla: `// Pending` } },
  { id: "octopus", name: "Octopus", description: "Waving octopus", tags: ["emoji", "nature"], component: OctopusCursor, code: { react: `// Octopus cursor`, vanilla: `// Pending` } },
  { id: "dino", name: "Dinosaur", description: "T-Rex dinosaur", tags: ["emoji", "animals"], component: DinoCursor, code: { react: `// Dino cursor`, vanilla: `// Pending` } },
  { id: "dragon", name: "Dragon", description: "Mighty dragon", tags: ["emoji", "fantasy"], component: DragonCursor, code: { react: `// Dragon cursor`, vanilla: `// Pending` } },
  { id: "tree", name: "Tree", description: "Evergreen tree", tags: ["emoji", "nature"], component: TreeCursor, code: { react: `// Tree cursor`, vanilla: `// Pending` } },
  { id: "clover", name: "Clover", description: "Lucky four-leaf", tags: ["emoji", "nature"], component: CloverCursor, code: { react: `// Clover cursor`, vanilla: `// Pending` } },
  { id: "rose", name: "Rose", description: "Beautiful rose", tags: ["emoji", "nature"], component: RoseCursor, code: { react: `// Rose cursor`, vanilla: `// Pending` } },

  // === OBJECTS CATEGORY ===
  { id: "firework", name: "Firework", description: "Exploding firework", tags: ["emoji", "celebration"], component: FireworkCursor, code: { react: `// Firework cursor`, vanilla: `// Pending` } },
  { id: "crystal", name: "Crystal Ball", description: "Magic crystal ball", tags: ["emoji", "magical"], component: CrystalCursor, code: { react: `// Crystal cursor`, vanilla: `// Pending` } },
  { id: "thunder", name: "Thunder", description: "Flashing thunder", tags: ["emoji", "weather"], component: ThunderCursor, code: { react: `// Thunder cursor`, vanilla: `// Pending` } },
  { id: "peace", name: "Peace", description: "Peace sign hand", tags: ["emoji", "gestures"], component: PeaceCursor, code: { react: `// Peace cursor`, vanilla: `// Pending` } },
  { id: "wave", name: "Wave", description: "Waving hand", tags: ["emoji", "gestures"], component: WaveCursor, code: { react: `// Wave cursor`, vanilla: `// Pending` } },
  { id: "kiss", name: "Kiss", description: "Kissing lips", tags: ["emoji", "love"], component: KissCursor, code: { react: `// Kiss cursor`, vanilla: `// Pending` } },
  { id: "alien", name: "Alien", description: "Extraterrestrial", tags: ["emoji", "space"], component: AlienCursor, code: { react: `// Alien cursor`, vanilla: `// Pending` } },
  { id: "bomb", name: "Bomb", description: "Ticking bomb", tags: ["emoji", "danger"], component: BombCursor, code: { react: `// Bomb cursor`, vanilla: `// Pending` } },
  { id: "sword", name: "Sword", description: "Crossed swords", tags: ["emoji", "fantasy"], component: SwordCursor, code: { react: `// Sword cursor`, vanilla: `// Pending` } },
  { id: "magic", name: "Magic Sparkle", description: "Magical sparkles", tags: ["emoji", "magical"], component: MagicCursor, code: { react: `// Magic cursor`, vanilla: `// Pending` } },
  { id: "ice", name: "Ice", description: "Cool ice cube", tags: ["emoji", "cold"], component: IceCursor, code: { react: `// Ice cursor`, vanilla: `// Pending` } },
  { id: "balloon", name: "Balloon", description: "Floating balloon", tags: ["emoji", "celebration"], component: BalloonCursor, code: { react: `// Balloon cursor`, vanilla: `// Pending` } },
  { id: "droplet", name: "Droplet", description: "Water droplet", tags: ["emoji", "water"], component: DropletCursor, code: { react: `// Droplet cursor`, vanilla: `// Pending` } },
  { id: "shield", name: "Shield", description: "Protective shield", tags: ["emoji", "protection"], component: ShieldCursor, code: { react: `// Shield cursor`, vanilla: `// Pending` } },
  { id: "robot", name: "Robot", description: "Friendly robot", tags: ["emoji", "tech"], component: RobotCursor, code: { react: `// Robot cursor`, vanilla: `// Pending` } },
  { id: "browser", name: "Globe", description: "World wide web", tags: ["emoji", "tech"], component: BrowserCursor, code: { react: `// Browser cursor`, vanilla: `// Pending` } },
  { id: "key", name: "Key", description: "Golden key", tags: ["emoji", "security"], component: KeyCursor, code: { react: `// Key cursor`, vanilla: `// Pending` } },
  { id: "camera", name: "Camera", description: "Photo camera", tags: ["emoji", "media"], component: CameraCursor, code: { react: `// Camera cursor`, vanilla: `// Pending` } },
  { id: "idea", name: "Idea", description: "Glowing lightbulb", tags: ["emoji", "creative"], component: IdeaCursor, code: { react: `// Idea cursor`, vanilla: `// Pending` } },
  { id: "lock", name: "Lock", description: "Secure padlock", tags: ["emoji", "security"], component: LockCursor, code: { react: `// Lock cursor`, vanilla: `// Pending` } },
  { id: "zap", name: "Zap", description: "Electric zap", tags: ["emoji", "energy"], component: ZapCursor, code: { react: `// Zap cursor`, vanilla: `// Pending` } },
  { id: "flame", name: "Flame", description: "Hot flame", tags: ["emoji", "fire"], component: FlameCursor, code: { react: `// Flame cursor`, vanilla: `// Pending` } },
  { id: "soccer", name: "Soccer", description: "Rolling soccer ball", tags: ["emoji", "sports"], component: SoccerCursor, code: { react: `// Soccer cursor`, vanilla: `// Pending` } },
  { id: "tool", name: "Tool", description: "Repair wrench", tags: ["emoji", "tools"], component: ToolCursor, code: { react: `// Tool cursor`, vanilla: `// Pending` } },
  { id: "ninja", name: "Ninja", description: "Stealthy ninja", tags: ["emoji", "warrior"], component: NinjaCursor, code: { react: `// Ninja cursor`, vanilla: `// Pending` } },
  { id: "anchor", name: "Anchor", description: "Ship anchor", tags: ["emoji", "nautical"], component: AnchorCursor, code: { react: `// Anchor cursor`, vanilla: `// Pending` } },
]
