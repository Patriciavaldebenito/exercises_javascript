let stringEnter = process.argv[2];
let arrayString=[];

const esPalindrome = (value) => {
    let newString = '';
    for(let i = value.length; i >= 0; i-- ){
        newString = newString + value.charAt(i);     
    }
    if(newString === value){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

esPalindrome(stringEnter);


// Terminal =>  node palindrome.js xax
// Terminal =>   node palindrome.js abc
