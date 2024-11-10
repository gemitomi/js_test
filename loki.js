import loki from 'lokijs';

const db = new loki('library.db');
const bookModel = db.addCollection("books");
bookModel.insert([
  { title: 'Alma', author: 'Eper' },
  { title: 'Barack', author: 'öKorte' },
  { title: 'Citrom', author: 'Korte' }
]);

db.saveDatabase(err => {
  if (err) {
    console.error('Hiba az adatbázis mentésekor:', err);
  } else {
    console.log('Adatok sikeresen mentve!');
  }
});

console.log(bookModel.find({ author: 'Korte' }));
