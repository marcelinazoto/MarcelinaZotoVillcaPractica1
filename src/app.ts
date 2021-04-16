//****************Ejemplo 7****************
let cad1:String="abca";
let cad2:String="xyzbac";
let vector=new Array();
let contador=0;
let posicion=-1;
for(let i=0;i<cad1.length;i++){
    for(let j=0;j<cad2.length;j++){
        if(cad1[i]==cad2[j]){
           if( existe(j)!=true){
            contador++;
            insertar(j);
            break;
           }
        }

        }

    }
    console.log(contador);

function existe(x: number){
    for(let i=0;i<vector.length;i++){
        if(vector[i]==x){
            return true;
        }
    }

}
function insertar(result: number){
    vector[vector.length]=result;
}