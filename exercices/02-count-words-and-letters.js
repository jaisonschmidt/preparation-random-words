const input = process.argv.slice(2).join(" "); // Captura os argumentos e junta em uma string

if (!input) {
    console.log("Por favor, insira uma frase entre aspas.");
    process.exit(1);
}

let letras = 0;
let numeros = 0;

// Loop para percorrer cada caractere da string
for (let char of input) {
    if (char.match(/[a-zA-Z]/)) { // Verifica se é uma letra
        letras++;
    } else if (char.match(/[0-9]/)) { // Verifica se é um número
        numeros++;
    }
}

// Exibe os resultados
console.log(`Letras: ${letras}`);
console.log(`Números: ${numeros}`);