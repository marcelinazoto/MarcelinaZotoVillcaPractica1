//****************Ejemplo 5****************
//var estatues : number[] = [6, 2, 3, 8];
//var estatues : number[] = [5, 4, 6];
var estatuas : number[] = [0, 3];

var menor:number = 0;
var mayor:number = 0;
function minimo():number {
    for(let i : number = 0; i < estatuas.length; i++) 
    {
        if(i == 0) 
        {
            mayor = estatuas[i];
            menor = estatuas[i];
        }
        else 
        {
            if(estatuas[i] > mayor) 
            {
                mayor = estatuas[i];
            }
            if(estatuas[i] < menor) 
            {
                menor = estatuas[i];
            }
        }    
    }
    return MASstatuas();
}
function MASstatuas() :number{
  let falt:number = 0;
  let result:number = 0;
  for(let i:number = menor ; i <= mayor ; i++){
      for(let j:number = 0; j < estatuas.length ; j++) {
          if(i != estatuas[j]) {
              falt++;
          }
          if(falt === estatuas.length){
              result++;
          }
      }
      falt = 0;
  }
  return result;
} 
console.log(minimo());