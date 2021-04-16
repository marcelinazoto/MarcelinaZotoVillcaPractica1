//****************Ejemplo 8****************
var c = 9;
var j = 2;
var numerosPrimos = [];
for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(n: number): Boolean
{
    for(let i : number = 2; i < n; i++)
    {
        if(n % i === 0)
        {
            return false;
        }
    }
    return true;
}