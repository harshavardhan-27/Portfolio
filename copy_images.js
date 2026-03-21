const fs = require('fs');
const path = require('path');
const srcDir = 'C:\\Users\\Siddhu\\.gemini\\antigravity\\brain\\1a53b083-d8ad-458f-b1a6-d157fa557417';
const destDir = 'C:\\Users\\Siddhu\\.antigravity\\portfolio\\public\\destinations';

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.startsWith('tourist_') && f.endsWith('.png'));

files.forEach(f => {
  const newName = f.replace(/_\d{13}\.png$/, '.png');
  fs.copyFileSync(path.join(srcDir, f), path.join(destDir, newName));
  console.log(`Copied ${f} to ${newName}`);
});
