// iteracion, bucle, loop, repeticion y alguna otra

// for sencillo
for (let iter = 1; iter <= 5; iter++) {
  console.log("iteracion Nro: " + iter);
}

// while sencillo
let suma = 1;
while (suma <= 5) {
  console.log("loop while: " + suma);
  suma++;
}

let texto = "";
// while (texto != 'aaa') {
//   console.log('text while: ' + texto);
//   texto += 'a';
// }

while (texto.length < 6) {
  console.log("text while: " + texto);
  texto += "a";
}

let i = 6;
do {
  console.log(i);
  i += 1;
} while (i < 5);
