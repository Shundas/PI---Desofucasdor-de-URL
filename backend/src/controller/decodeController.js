const multer = require('multer');
const fs = require('fs');
const readline = require('readline');
const { once } = require('events');
const hashMap = require('./hashMap');
const { validationResult } = require('express-validator');

module.exports = {
  manipulaArquivo(request, response) {
    //Ṕarametrizando o recebimento do arquivo
    const upload = multer({
      dest: 'upload_files/',
      fileFilter: (request, file, cb) => {
        if (file.mimetype != 'text/plain' && !file.mimetype.includes('log')) {
          return cb(new Error('Formato de arquivo inválido'));
        }
        cb(null, true);
      },
    }).single('attachment');

    //Erros
    const erros = validationResult(request);

    //Recebendo arquivo, atribuindo função de processamento e enviando para Download
    upload(request, response, async (err) => {
      if (err) {
        console.log(err);
        return response.status(422).send();
      } else {
        let file = request.file;

        console.log(file)

        const saida = {
          erros: erros.array(),
        };

        if(!file) {
          return response.json(saida);
        }

        const path = await processFile(file);
        if (path) {
          return response.download(path, file.originalname);
        } else {
          return response.status(500).send()
        }
      }
    });

    //Processamento do arquivo
    async function processFile(file) {
      const outPath = `output_files/${file.filename}`;
      const writeStream = fs.createWriteStream(outPath, {
        flags: 'a',
      });

      writeStream.on('error', (err) => {
        console.log(err);
        throw err;
      });

      const readInterface = readline.createInterface({
        input: fs.createReadStream(file.path),
      });

      readInterface.on('line', (line) => {
        //Expressões Regulares, para realizar o desofuscamento
        var regexHexaChar = /0x[0-7][0-9A-Fa-f]/g;

        var regexChar = /char\([0-9]{2,3}\)/g;

        var regexAmpersan = /&\w{2,};/g;

        var regexPercent = /%[0-7][0-9A-Fa-f]/g;

        //Desofuscando, utilizando a função replace - substituição
        line = line.replace(regexPercent, function (n) {
          return hashMap.htmlEntitiesPer[n];
        });
        line = line.replace(regexChar, function (n) {
          return hashMap.htmlEntitiesChar[n];
        });
        line = line.replace(regexAmpersan, function (n) {
          return hashMap.htmlEntitiesAmp[n];
        });
        line = line.replace(regexHexaChar, function (n) {
          return hashMap.hexaChar[n];
        });

        writeStream.write(`${line}\n`);
      });

      readInterface.on('close', () => {
        writeStream.end();
      });

      await once(writeStream, 'finish');

      return outPath;
    }
  },

  manipulaString(request, response) {
    //Expressões Regulares, para realizar o desofuscamento

    var regexHexaChar = /0x[0-7][0-9A-Fa-f]/g;

    var regexChar = /char\([0-9]{2,3}\)/g;

    var regexAmpersan = /&\w{2,};/g;

    var regexPercent = /%[0-7][0-9A-Fa-f]/g;


    // var regexHexaChar = /0x[2-7][0-9A-Fa-f]/g;

    // var regexChar = /char\([3-9][0-9]\)|char\(1[0-2][0-6]\)/g;

    // var regexAmpersan = /&\w{2,};/g;

    // var regexPercent = /%[0-7][0-9A-Fa-f]/g;

    //Recebendo informação do cliente e realizando uma desestruturação
    let { log } = request.body;

    const erros = validationResult(request);

    //Desofuscando, utilizando a função replace - substituição
    log = log.replace(regexPercent, function (n) {
      return hashMap.htmlEntitiesPer[n];
    });
    log = log.replace(regexChar, function (n) {
      return hashMap.htmlEntitiesChar[n];
    });
    log = log.replace(regexAmpersan, function (n) {
      return hashMap.htmlEntitiesAmp[n];
    });
    log = log.replace(regexHexaChar, function (n) {
      let t1 = log.split('');
      console.log(t1.split(/,/, 2));
      return hashMap.hexaChar[n];
    });

    //Criando objeto de saída que recebe o log desofuscado
    const saida = {
      logDecode: log,
      erros: erros.array(),
    };

    //Retornando para o cliente a saída do log desofuscada em objeto JSON
    return response.json(saida);
  },
};
