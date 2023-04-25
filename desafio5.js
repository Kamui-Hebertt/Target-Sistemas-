function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

// Exemplo de uso da função
const inputString = "Hello, world!";
const outputString = inverterString(inputString);
console.log("String original: ", inputString);
console.log("String invertida: ", outputString);