import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Az aktuális könyvtár meghatározása ES6 modulokban
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helyes útvonal a config.json fájlhoz
const filePath = join(__dirname, 'conf.json');

readFile(filePath, (error, text) => {
  if (error) {
    console.error('Error reading the file:', error);
  } else {
    try {
      const obj = JSON.parse(text);
      console.log(JSON.stringify(obj, null, 4));
    } catch (e) {
      console.error('Invalid JSON:', e);
    }
  }
});
