const aVeryBigSum =ar  => {
    let n = ar.length;
    let sum = 0;
    let condition = Math.pow(10, 10);
    console.log("condition :"+condition);
  
    if (1 <= n && n <= 10){

        for (let i = 0; i < n; i++) {
            if (0 <= ar[i] && ar[i] <= condition) {
                sum = sum + ar[i];
            }
            else {
                console.log("ERROR : number greater than ten raised to ten");
                sum =0;
            }
        }
        return sum;
    }
    else {
        console.log("ERROR : input 1<=n<=10");
    }

    return sum;
}


console.log("PRUEBA 1" ,aVeryBigSum( [10000000000,100000000001]));
console.log("PRUEBA 2" ,aVeryBigSum([1000000000,10000,1000002, 100000]));
console.log("PRUEBA 3" ,aVeryBigSum([10,100,1000,10000,100000,1000000,10000000,10,100,1000,10000]));

//2
//hola

console.log(" saludo 1 : hola como estas?");
let nombres = ["katy", "paty", "pato"];
// katy =0
//paty =1
//pato = 2

function saludar(nombres){
   for(let i=0; i< nombres.length ;i++){
       console.log("hola " +nombres[i] + "como estas ?");
   }
    
 
}


console.log(saludar(nombres)); 