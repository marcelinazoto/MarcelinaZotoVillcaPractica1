//****************Ejemplo 1****************
var cad1: string = 'this is a sample string';
var cad2: string = 'a';
var cad3: string = 'bang';

function cadenaIvertida(texto: string) 
{
  return texto.split('').reverse().join('');
}
console.log(cadenaIvertida(cad1));
console.log(cadenaIvertida(cad2));
console.log(cadenaIvertida(cad3));