//****************Ejemplo 6****************
/*var habitaciones: number [][] = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
];*/
var habitaciones: number [][] = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ];
var total: number = 0;

function costoTotal(): number
{
    for(let i:number = 0; i < habitaciones[0].length; i++) 
    {
        for (let j: number = 0; j < habitaciones.length; j++) 
        {
            if (habitaciones[j][i] == 0) 
            {
                break;
            }
            else 
            {
              total += habitaciones[j][i];
            }
        }
    }
    return total;
}

console.log(costoTotal());