/**
 * Utility to generate actual cursor implementation code from cursor files
 * This allows users to copy real, working code instead of placeholders
 */

import fs from 'fs'
import path from 'path'

export function getCursorSourceCode(cursorId: string): { react: string; vanilla: string } {
  try {
    // Map cursor ID to the actual file name  
    const fileName = cursorId
    const filePath = path.join(process.cwd(), 'src', 'registry', 'cursors', `${fileName}.tsx`)
    
    // Read the actual React component code
    const reactCode = fs.existsSync(filePath) 
      ? fs.readFileSync(filePath, 'utf-8')
      : '// Source code not available'
    
    // Generate vanilla JS equivalent (simplified version)
    const vanillaCode = generateVanillaJS(cursorId)
    
    return {
      react: reactCode,
      vanilla: vanillaCode
    }
  } catch (error) {
    return {
      react: '// Error reading source code',
      vanilla: '// Error generating vanilla code'
    }
  }
}

function generateVanillaJS(cursorId: string): string {
  return `// Vanilla JavaScript implementation for ${cursorId} cursor
// This cursor uses Framer Motion which requires React
// For a vanilla JS implementation, you would need to:
// 1. Track mouse position using mousemove event
// 2. Create and animate DOM elements manually
// 3. Use CSS animations or Web Animations API

// Basic setup:
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  updateCursor();
});

function updateCursor() {
  // Custom cursor logic here
  // Position your cursor element at (cursorX, cursorY)
}

// Note: This is a simplified example.
// For full implementation, refer to the React code and adapt the animations.`
}
