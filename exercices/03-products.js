const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const arquivoCSV = path.join(__dirname, 'produtos.csv');

let produtos = [];
let totalProdutos = 0;
let valorTotalEstoque = 0;

// Ler o arquivo CSV
fs.createReadStream(arquivoCSV)
  .pipe(csv())
  .on('data', (row) => {
    let nome = row.nome;
    let categoria = row.categoria;
    let preco = parseFloat(row.preco);
    let quantidade = parseInt(row.quantidade);

    totalProdutos += quantidade;
    valorTotalEstoque += preco * quantidade;

    produtos.push({ nome, categoria, preco, quantidade });
  })
  .on('end', () => {
    console.log(`Total de produtos no estoque: ${totalProdutos}`);
    console.log(`Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
  });
