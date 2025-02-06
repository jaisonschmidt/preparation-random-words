// Capturar os argumentos passados no terminal
const frase = process.argv.slice(2).join(" "); // ou process.argv[2] mas isso só captura a primeira palavra

// Verifica se o usuário passou uma frase
if (!frase) {
    console.log("Por favor, insira uma frase como argumento.");
    process.exit(1); // Encerra o script com código de erro
}

// Exibir a frase no console
console.log("Frase capturada:", frase);