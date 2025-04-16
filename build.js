import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Run the Vite build
console.log('Building the React app...');
execSync('npm run build', { stdio: 'inherit' });

// Get the names of the generated JS and CSS files
const distAssetsDir = path.join(process.cwd(), 'dist', 'assets');
const assets = fs.readdirSync(distAssetsDir);

// Find the JS and CSS files
const jsFile = assets.find(file => file.endsWith('.js'));
const cssFile = assets.find(file => file.endsWith('.css'));

if (!jsFile || !cssFile) {
  console.error('Could not find JS or CSS files in the dist/assets directory');
  process.exit(1);
}

console.log(`Found JS file: ${jsFile}`);
console.log(`Found CSS file: ${cssFile}`);

// Ensure the profile/assets directory exists
const profileAssetsDir = path.join(process.cwd(), 'profile', 'assets');
if (!fs.existsSync(profileAssetsDir)) {
  fs.mkdirSync(profileAssetsDir, { recursive: true });
}

// Copy the JS and CSS files to the profile/assets directory
fs.copyFileSync(
  path.join(distAssetsDir, jsFile),
  path.join(profileAssetsDir, jsFile)
);
fs.copyFileSync(
  path.join(distAssetsDir, cssFile),
  path.join(profileAssetsDir, cssFile)
);

// Copy other static assets
fs.copyFileSync(
  path.join(process.cwd(), 'dist', 'vite.svg'),
  path.join(process.cwd(), 'profile', 'vite.svg')
);

// Copy the resume
if (fs.existsSync(path.join(process.cwd(), 'dist', 'Beadell_Resume_2024.pdf'))) {
  fs.copyFileSync(
    path.join(process.cwd(), 'dist', 'Beadell_Resume_2024.pdf'),
    path.join(process.cwd(), 'profile', 'Beadell_Resume_2024.pdf')
  );
}

// Read the app.html file
const appHtmlPath = path.join(process.cwd(), 'profile', 'app.html');
let appHtml = fs.readFileSync(appHtmlPath, 'utf8');

// Update the JS and CSS references
appHtml = appHtml.replace(
  /<script type="module" crossorigin src="\.\/assets\/index-[^"]+\.js"><\/script>/,
  `<script type="module" crossorigin src="./assets/${jsFile}"></script>`
);
appHtml = appHtml.replace(
  /<link rel="stylesheet" href="\.\/assets\/index-[^"]+\.css">/,
  `<link rel="stylesheet" href="./assets/${cssFile}">`
);

// Write the updated app.html file
fs.writeFileSync(appHtmlPath, appHtml);

console.log('Updated app.html with new asset references');
console.log('Build completed successfully!'); 