//let prueba1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
// let prueba1 = [0, 2, 3, 2, 1000000002, , 100000000100];
let prueba1 = [10, 20,30, 40, 1000];

function miniMaxSum(arr) {
  let arrLength = arr.length;
   if(arrLength === 5){
    let limiteMejor = 1000000000;
    let sum = 0;
    let condition = false;
    let arrSum =[];
    const  calcule__sum__datos = (x) => {
     
  
      for(let i=0; i<arr.length;i++){
        let calcule_Number = x-arr[i];
        arrSum.push(calcule_Number)
      }
     return arrSum
    }
  
    const condition__date = () => {
      for (let i = 0; i <= arr.length; i++) {
        let dato = arr[i];
  
        if (dato < 1 || dato > limiteMejor) {
          let arr__Conditions_Error = [];
          arr__Conditions_Error.push(dato);
          if (arr__Conditions_Error.length > 0) {
            condition = true;
            for (let j = 0; j < arr__Conditions_Error.length; j++) {
              let dateInvalide = arr__Conditions_Error[j];
              console.log(
                `ERROR: el dato ${dateInvalide} en la posicion ${j} es menor a 0 o mayor a ${limiteMejor}`
              );
            }
          } else {
            condition = false;
          }
        }
      }
      return condition;
    };
  
    let condition_result = condition__date();
  
    if (!condition_result) {
  
        for (let j = 0; j <= arr.length; j++) {
          let dato = arr[j];
          if (dato >= 1 && dato < limiteMejor) {
            sum = sum + dato;
          }
        }
     
  
  
      let arrSum_=  calcule__sum__datos(sum);    
  
      arrSum_.sort(function(a, b){return a - b});
  
      
      let cant__dates= arrSum_.length;
   
      let min_date = arrSum_[0];
      let max_date = arrSum_[cant__dates-1];
      console.log(min_date, max_date);
  
    }
  
   }
   else {
     console.log(`Los números ingresados son ${arrLength} y los datos ingresados deben ser 5`);
   }

}

miniMaxSum(prueba1);
