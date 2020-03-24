let prueba1 = [1, 2, 3, 4, 5, 6, 7, 9, -10, -1];
// let prueba1 = [3, 2, 10, 3];


function birthdayCakeCandles(ar) {
  let n = ar.length;
  let condition_large = false
  let condition_value_date = false

  const condition = () => {
    if(n>=1 && n<=100000){
      condition_large = true;
    }

    for(let i=0; i<n ; i++){
      let date = ar[i];
      if(date>=1 && date<10000000){
        condition_value_date = true
      }
    }

    if(condition_large && condition_value_date)
    {return true}
  }

   if(condition){
    let maxN = Math.max(...ar);
    return ar.filter(number => {
        return number == maxN;
    }).length;
   }

}

let total =birthdayCakeCandles(prueba1);
console.log(total)




// function birthdayCakeCandles(ar) {
//   let maxN = Math.max(...ar);
//   console.log(`number max in the array : ${maxN}`)
//   let new__ar = ar.filter(number => {  return number == maxN;  });
//   console.log("new_ar :" ,new__ar)
//   console.log("ar :" ,ar)
//   let large__ar = new__ar.length;
//   console.log("large del array :"+large__ar)
//   return large__ar;
// }