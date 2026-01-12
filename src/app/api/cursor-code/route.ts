// API route to fetch cursor source code
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const cursorId = searchParams.get('id')
  
  if (!cursorId) {
    return NextResponse.json({ error: 'Cursor ID required' }, { status: 400 })
  }
  
  try {
    const filePath = path.join(process.cwd(), 'src', 'registry', 'cursors', `${cursorId}.tsx`)
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Cursor file not found' }, { status: 404 })
    }
    
    const reactCode = fs.readFileSync(filePath, 'utf-8')
    
    // Generate vanilla JS template
    const vanillaCode = generateVanillaJS(cursorId)
    
    return NextResponse.json({ react: reactCode, vanilla: vanillaCode })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read cursor code' }, { status: 500 })
  }
}

function generateVanillaJS(cursorId: string): string {
  return `// Vanilla JavaScript implementation for ${cursorId} cursor
// This cursor uses Framer Motion which requires React
// For a vanilla JS implementation, you would need to:
// 1. Track mouse position using mousemove event listener
// 2. Create and animate DOM elements manually  
// 3. Use CSS animations or Web Animations API for smooth transitions

// Basic structure:
class CustomCursor {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.init();
  }
  
  init() {
    document.addEventListener('mousemove', (e) => {
      this.x = e.clientX;
      this.y = e.clientY;
      this.update();
    });
  }
  
  update() {
    // Implement cursor positioning and animation logic here
    // based on the React implementation above
  }
}

// Initialize
const cursor = new CustomCursor();

// Note: This is a basic template. 
// Adapt the React/Framer Motion animations to vanilla JS/CSS.`
}
