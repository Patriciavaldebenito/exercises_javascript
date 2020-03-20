const value = 7;
function staircase(n) {
  let string__hast_more_space = "";
  let space = "";
  let string_hash = "#";
  if (n - Math.floor(n) === 0) {
    if (n > 0 && n <= 100) {
      for (let i = n; i > 0; i--) {
        for (let j = 1; j < i; j++) {
          space = space + " ";
        }
        string__hast_more_space = string__hast_more_space + string_hash;
        console.log(space + string__hast_more_space);
        space = "";
      }
    } else {
      console.log(
        "El número ingresado debe ser mayor a 0 y menor o igual a 100, tu número es :" +
          n
      );
    }
  } else {
    console.log("El número ingresado no es, número entero");
  }
}

staircase(value);
