const multer = require('multer');

module.exports = {
    enviarArquivo(request, response) {
    const upload = multer({
        dest: 'upload_files/'
    }).single('attachment');
    
    upload(request, response, (err) => {
        if (err) {
            console.log(err);
            response.status(422).send();
        } else {
            let file = request.file;
            console.log(file);
            response.send();
        }
    }) 
  }
}

