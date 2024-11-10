//import { mkdir } from 'fs';
//import { promises as fsPromises } from 'fs';

//import fs from 'fs';
//import path from 'path';

//const dirPath = path.join('C:', 'PythonSuli', 'js_test', 'tmpdir');

import fs from 'fs/promises';
import path from 'path';

const dirPath = path.join('C:', 'PythonSuli', 'js_test', 'tmpdir');

async function createDirectory() {
  try {
    // Ellenőrizzük, hogy a könyvtár létezik-e
    const exists = await fs.access(dirPath).then(() => true).catch(() => false);

    if (!exists) {
      await fs.mkdir(dirPath, { recursive: true });
      console.log('Könyvtár sikeresen létrehozva.');
    } else {
      console.log('A könyvtár már létezik.');
    }
  } catch (err) {
    console.error('Hiba a könyvtár létrehozásakor:', err);
  }
}

createDirectory();




/*if (!fs.existsSync(dirPath)) {
  try {
    fs.mkdirSync(dirPath);
    console.log('Könyvtár sikeresen létrehozva.');
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log('A könyvtár már létezik.');
    } else {
      console.error('Hiba a könyvtár létrehozásakor:', err);
    }
  }
} else {
  console.log('A könyvtár már létezik.');
}*/

/*mkdir('./tmpdir', (err) => {
  console.log(err);
});

await fsPromises.mkdir('./tmpdir');*/