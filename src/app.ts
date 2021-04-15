//****************Ejemplo 1****************
var num1: number = 2;
var num2: number = 21;
var num3: number = 83;
function primo(n: number): boolean
{
    for(let i : number = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}
console.log(primo(num1));
console.log(primo(num2));
console.log(primo(num3));