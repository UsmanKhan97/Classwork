//function maxOfTwoNumbers(firstNum, secondNum){
  
//    if (firstNum => secondNum) {
//      console.log(firstNum + " is larger than " + secondNum);
//   } else {
//        console.log(firstNum + " is less than " + secondNum);
//    }
 //   return;
  
//}

//maxOfTwoNumbers(400,500);

// program to find the largest among three numbers

// take input from the user
//const num1 = parseFloat(prompt("Enter first number: "));
//const num2 = parseFloat(prompt("Enter second number: "));
//const num3 = parseFloat(prompt("Enter third number: "));
//let largest;

// check the condition
//if(num1 >= num2 && num1 >= num3) {
//    largest = num1;
//}
//else if (num2 >= num1 && num2 >= num3) {
//    largest = num2;
//}
//else {
//    largest = num3;
//}

// display the result
//console.log("The largest number is " + largest);

//exercise 4
 function sumArray(array) {
    const AddArray = [5, 6, -6, 5, 0];
    let sum = 0;
  
    for (let i = 0; i < AddArray.length; i += 1) {
      sum += AddArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([5, 6, -6, 5, 0]));

//exercise 5
//function multiply (array) {
//    let sum=1;
//    for (let i=0; i<array.length; i++) {
//        sum = sum * array[i];
//    } 
//    return sum;
//}
//console.log(multiply([10,2,3]));

