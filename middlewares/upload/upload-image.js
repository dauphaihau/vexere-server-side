const multer = require("multer");
const mkdirp = require('mkdirp');

const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`);
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `./public/images/${type}`);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname)
        }
    });
    const upload = multer(
        {
            storage: storage,
            fileFilter: (req, file, cb) => {
                const extensionImageList = ['.png', '.jpg'];
                const extension = file.originalname.slice(-4);
                const check = extensionImageList.includes(extension);
                if (check) {
                    cb(null, true);
                } else {
                    cb(new Error('File extension not allowed!'));
                }
            }
        }
    );
    return upload.single(type);
}

module.exports = {
    uploadImage
};
