//****************Ejemplo 3****************
var cad1 : string = "this is a sample string";
var cad2 : string = "a";
var cad3 : string = "bangnab";

function palindrome(str: string) 
{
    const strReversed = str.split("").reverse().join("")
    return strReversed === str ? "true" : "false"
}

console.log(palindrome(cad1));
console.log(palindrome(cad2));
console.log(palindrome(cad3));