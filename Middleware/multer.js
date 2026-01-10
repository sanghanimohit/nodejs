const multre = require('multer');
const path = require('path');

const storage = multre.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Uploads/");
    },
    filename: function (req, file, cb) {
        cd(null,DataTransfer.now() + path.extname(file.originalname));
    }
});
const upload = multre({ 
    storage,
    fileFilter,
    limits:{filesize:2 * 1024 * 1024  }
 });

 module.exports = upload;

 