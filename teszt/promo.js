import { promises as fsPromise } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Az aktuális fájl elérési útvonalának meghatározása
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helyes útvonal a conf.json fájlhoz
const filePath = join(__dirname, 'conf.json');

fsPromise.readFile(filePath, 'utf-8')
    .then(JSON.parse)
    .then(function (obj) {
        console.log(JSON.stringify(obj, null, 4));
    })
    .catch(function (reason) {
        console.error(['Problem', reason]);
    });
