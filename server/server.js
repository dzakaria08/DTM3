const express = require('./config/express.js')
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

var multer = require('multer')
var cors = require('cors');
var fs = require('fs-extra')

app.use(cors())

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    let path = './Users/Kyle/Desktop/DTM3/client/src/assets/OpenProj' 
    fs.mkdirsSync(path)
    cb(null, path)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

}).then;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
