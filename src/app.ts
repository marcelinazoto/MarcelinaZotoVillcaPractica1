//****************Ejemplo 4****************
//var num : number[] = [3, 6, -2, -5, 7, 3];
//var num : number[] = [-1, -2];
var num : number[] = [1, 0, 1, 0, 1000];

var mayor : number = 0;
function producto(posicion:number): number 
{
  if(posicion >= num.length - 1)
      return mayor;
  else
  {
      if((num[posicion] * num[posicion + 1]) > mayor)
          mayor = num[posicion] * num[posicion + 1];
      return producto(posicion + 1); 
  }
}
console.log(producto(0));