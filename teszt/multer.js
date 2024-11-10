import multer from 'multer';
const upload = multer({ dest: 'uploads/'});

appendFile.post('/something', upload.single("alma"), (req,res,next) => {

});