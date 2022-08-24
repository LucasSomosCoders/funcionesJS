// funcion que compruebe si una persona es mayor de edad

function mayorEdad(edad) {
  if (edad >= 18) {
    console.log("Es mayor");
  } else {
    console.log("Es menor");
  }
}

mayorEdad(25);
mayorEdad(15);

// edad y salaio llegando a fin de mes
function llega(edad, salario) {
  if (edad >= 18 && salario >= 10000 || salario > 50000) {
    console.log("Llega a fin de mes");
  } else {
    console.log("Lo siento mucho...");
  }
}

llega(18, 11000); // todo mayor
llega(18, 1000); // salario menor
llega(15, 100000); // salario mayor, edad menor

function siOno(dato) {
  if (dato){
    console.log('Es verdadero');
  }else{
    console.log('Es falso');
  }
}

siOno(5);
siOno(0);
siOno(true);
siOno(false);
siOno(-5);
siOno('hola');
siOno(null);

// 14. Escribe una función llamada checkSeason, toma un parámetro de mes y devuelve la
// estación: Otoño, Invierno, Primavera o Verano.
