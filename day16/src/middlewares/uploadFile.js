const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/uploads")
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        const fileExtension = path.extname(file.originalname)
        cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension)
    }
})

const upload = multer({ storage })

module.exports = upload