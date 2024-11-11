import { appendFile } from "fs";

appendFile.use((err, req, res,next) => {
  console.error(err.stack);
  /*return next(new Error("alma"));*/
  res.status(500).send('Something broke!');
});