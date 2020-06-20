const multer = require('multer');
const fs = require('fs');
const readline = require('readline')
const { once } = require('events'); 

module.exports = {
  manipulaArquivo(request, response) {

    //Ṕarametrizando o recebimento do arquivo
    const upload = multer({
        dest: 'upload_files/',
        fileFilter: (request, file, cb) => {
            if(file.mimetype != "text/plain" && !file.mimetype.includes('log')) {
                return cb(new Error("Formato de arquivo inválido"))
            }
            cb(null, true)
        }
    }).single('attachment');
    
    //Recebendo arquivo, atribuindo função de processamento e enviando para Download
    upload(request, response, async (err) => {
        if (err) {
            console.log(err);
            response.status(422).send();
        } else {
            let file = request.file;
            const path = await processFile(file)
            if (path) {
                response.download(path, file.originalname);
            } else {
                response.status(500).send()
            }
        }
    })
    
    //Processamento do arquivo
    async function processFile(file) {
        const outPath = `output_files/${file.filename}`;
        const writeStream = fs.createWriteStream(outPath, {
            flags: 'a'
        });

        writeStream.on("error", (err) => {
            console.log(err);
            throw err;
        });

        const readInterface = readline.createInterface({
            input: fs.createReadStream(file.path)
        });
        
        readInterface.on('line', (line) => {
            writeStream.write(`${line.toUpperCase()}\n`)
        });

        readInterface.on('close', () => {
            writeStream.end();
        });

        await once(readInterface, 'close');

        return outPath;
    }
  },

  manipulaString(request, response) {
    const log = request.body;
    return response.json(log)
  }
}

