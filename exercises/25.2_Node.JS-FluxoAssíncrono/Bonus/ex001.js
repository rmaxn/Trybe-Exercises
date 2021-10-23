const readline = require('readline-sync');
const fs = require('fs').promises;

function selectFile() {
  const file = readline.question('Indique o nome do arquivo que deseja abrir:');
  return `${file}.txt`;
}

const nomeDoArquivo = selectFile()

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((data) => console.log(`Conteúdo do arquivo: ${data}`))

  .catch((err) => {
    console.error(`Arquivo inexistente: ${err.path}`);
    process.exit(1);
  });

// Para chamar a função usar npm run readfile;