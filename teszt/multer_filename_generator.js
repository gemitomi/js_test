import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename : function (req, file, cb) {
    const rnd = Math.round(Math.random() * 1E9);
    const ext = path.ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${file.fieldname}-${Date.now()}-${rnd}${ext}`);
    // például: alma-20240202-8789473793.jpg
  }
})

const upload = multer({ storage })