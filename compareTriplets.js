function compareTriplets(a, b) {
 
    let userOne = 0; 
    let userTwo = 0;
    let  result = [0, 0];

    if (a.length == b.length) {
        let lengthGrl = a.length;  
            for (let i = 0; i < lengthGrl; i++) {
          
                if (a[i] > b[i]) {
                    userOne = userOne + 1;
                    result[0] = userOne;
                }

                else if(a[i] < b[i]){
                    userTwo = userTwo + 1;
                    result[1]=userTwo;
                }

                else if(a[i] = b[i]){
                    userTwo = userTwo + 0;
                    userOne = userOne + 0;
                    result[0] = userOne;
                    result[1]=userTwo;
                } 
        }
    }
  return result;
}

console.log(compareTriplets([1, 4, 3], [2, 1, 1])); //MODIFICAR VALORES 