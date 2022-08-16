for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log('FizzBuzz');
	}
    else if ( number % 3 == 0) {
        console.log("Fizz");	
	}
    else if ( number % 5 == 0) {
        console.log("Buzz");
	}
    else {
    	console.log(number);
	} 
}

function fizzBuzz2(n) {
    for (let i = 1; i <= n; i++) {
      let str = "";
  
      if (i % 3 === 0) str += "fizz"
      if (i % 5 === 0) str += "buzz"
      if (str === "") str = i;
    
      console.log(str);
    }
  }