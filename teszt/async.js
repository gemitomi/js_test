import { promises as fsPromise } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helyes útvonal a conf.json fájlhoz
const filePath = join(__dirname, 'conf.json');

try {
    console.log(JSON.stringify(JSON.parse(await fsPromise.readFile(filePath)), null, 4));
} catch(err) {
    console.error(['Error horror', err]);
}