function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  
  // Verifica se o número informado é 0 ou 1,
  // que são os primeiros dois números da sequência de Fibonacci

  if (numero === a || numero === b) {
    return `${numero} pertence à sequência de Fibonacci.`;
  }
  
  // Calcula os próximos números da sequência de Fibonacci 
   // até encontrar um número maior que o número informado
  while (b <= numero) {
    const c = a + b;
    a = b;
    b = c;
    
    // Verifica se o número informado é igual a um dos números da sequência
    if (b === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
  }
  
  // Caso o número informado não pertença à sequência de Fibonacci
  return `${numero} não pertence à sequência de Fibonacci.`;
}

// Número para verificar se pertence à sequência de Fibonacci
const numeroInformado = 21;

// Chama a função para verificar o número e imprime o resultado

console.log(verificaFibonacci(numeroInformado));


 // No exemplo fornecido, a saída será: "21 pertence à sequência de Fibonacci.".