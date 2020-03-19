let prueba1 = [1, -2, -7, 9, 1, -8, -5];



//   resultListStadist:
/* [  cant__positiveInteger,
      cant__negativeInteger,
      cant__numberZero        ]
*/
function plusMinus(arr) {
    let condition__includedecimal = false;
    let condition__largeArr = false;
    let condition = false;

    var cant__positiveInteger = 0;
    var cant__numberZero = 0;
    var cant__negativeInteger = 0;


    var result__ListStadist = [];
    var array__numberDecimal = [];
    let arrLength = arr.length;

    const thereAreDecimal = () => {
        let condition__decimal = false;
        for (let i = 0; i < arrLength; i++) {
            let number = arr[i];
            if (number - Math.floor(number) !== 0) {
                array__numberDecimal.push(number);

            }
        }
        if (array__numberDecimal.length > 0) {
            condition__decimal = true;
        } else if (array__numberDecimal = 0) {
            condition__decimal = false;
        }
        return condition__decimal;
    }

    const haveLarge = () => {
        if (arrLength > 0 && arrLength <= 100) {
            return true;
        }
        else {
            console.log(" tu lista de numeros, debe tener un largo minimo de 1 y maximo de 100, tu largo es :" + arrLength);
        }
    }

    condition__includedecimal = thereAreDecimal();
    condition__largeArr = haveLarge();

    const conditions = () => {

        if (condition__largeArr === true && condition__includedecimal === false) {
            condition = true;
        }
        else {
            condition = false;
        }
        return condition;
    }

    condition = conditions();

    if (!condition) {
        console.log("tu lista de numeros, contiene numeros decimales, revisa los datos")
    }
    else {
        for (let i = 0; i < arrLength; i++) {

            if (-100 <= arr[i] && arr[i] < 0) {
                cant__negativeInteger = cant__negativeInteger + 1;
               

            }
            else if (arr[i] === 0) {
                cant__numberZero = cant__numberZero + 1;
           

            }
            else if (arr[i] > 0 && 100 >= arr[i]) {
                cant__positiveInteger = cant__positiveInteger + 1;
               

            }
            result__ListStadist[1] = cant__negativeInteger;
            result__ListStadist[2] = cant__numberZero;
            result__ListStadist[0] = cant__positiveInteger;
        }

        result__ListStadist[0] = (result__ListStadist[0] / arrLength).toFixed(6);
        result__ListStadist[1] = (result__ListStadist[1] / arrLength).toFixed(6);
        
        console.log(result__ListStadist[0]);
        console.log(result__ListStadist[1]);


        let cantZerp = result__ListStadist[2];
       
        let cero =0;
        
        if( cantZerp > cero){ 
            result__ListStadist[2] = (result__ListStadist[2] / arrLength).toFixed(6);
            console.log(result__ListStadist[2]);
         }
       
        if( cantZerp ===  cero  ){ 
            console.log("0.000000");
         }



    }


}

plusMinus(prueba1);