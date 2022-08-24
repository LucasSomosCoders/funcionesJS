// 11. El peso de una sustancia se calcula de la siguiente manera: peso = masa x
// gravedad. Escribe una función que calcule el peso.

function calcularPeso(masa, mensaje) {
  const gravedad = 9.8;
  console.log(mensaje);
  let peso = masa * gravedad;
  return peso;
}

let masaGlobal = 25;
let pesoResultado = calcularPeso(masaGlobal, null);
console.log(pesoResultado);

// masaGlobal = 38;
pesoResultado = calcularPeso(38, 'Como');
alert(pesoResultado);

// masaGlobal = 51;
pesoResultado = calcularPeso(79, 'Estas');
document.write(pesoResultado);

const calcularPeso2 = function(masa, mensaje) {
  const gravedad = 9.8;
  console.log(mensaje);
  let peso = masa * gravedad;
  return peso;
}

pesoResultado = calcularPeso2(79, 'funcion desde constante');
console.log(pesoResultado);