import express from 'express';
import { json, urlencoded } from 'body-parser';
import { initDatabase } from './service/db';
import addRoutes from './route';
const app = express()

// parse application/json
app.use(json());

// parse application/x-www-form-urlencoded
app.use(urlencoded());

app.set('view engine', 'ejs');

initDatabase((err, {db, bookModel}) => {
    if (err) {
        return console.err(err);
    }

    addRoutes(app, db, bookModel);
    app.listen(6001, function () {
        console.log('Running on :6001');
    });
});