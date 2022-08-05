// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThreethat = function (x, y, z){
    if (x >= y && x >= z){
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
}

console.log(maxOfThreethat(10,2,15))
  
//3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowelthat(x){
    if (x === "a" || x === "e" || x === "i" || x ===  "o" || x === "u"){
        return true;
    } else {
        return false;
    }
}

console.log(isCharAVowelthat('q'))
console.log(isCharAVowelthat('e'))

//4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
let x = 0;
const sumArray = (arr) => {
    for (let i = 0; i < arr.length; i++){
        x += arr[i];
    }
    return x;
}

console.log(sumArray([2,4,5]));

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
let y = 1;
function multiplyArray(arr) {
    for (let i = 0; i < arr.length; i++){
        y *= arr[i];
    }
    return y;
}
console.log(multiplyArray([2,4,5]));

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

numArgs = (num) => {
    let number = 0 
    for (let i = 0; i < arguments.length; i++){
        number += number(arguments[i]);
    }
    return number;
}

console.log(numArgs('hi', 'bye', 'another one', 'two times'))

//7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
//HINT: array.reverse() ... Turn string to array, reverse then back into a string.

function reverseString (string) {
    let input = string;
    let convertToArray = input.split('');
    let reverseArray = convertToArray.reverse();
    let backToString = reverseArray.toString();

    //https://thispointer.com/remove-comma-from-string-in-javascript/
    let stringWithoutCommas = backToString.replace(/,/g,'');
    console.log(stringWithoutCommas);
}

reverseString('California'); 

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
//source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-125.php#:~:text=function%20longest_str_in_array(arra)%20%7B%20let,%7D%20return%20ans%3B%20%7D%20console.

longestStringInArray = (arr) => {
    let maxLength = arr[0].length;              //set first element as baseline length
    let initialLongestString = arr[0];          //set first element as the longest string
    for (let i = 1; i < arr.length; i++){
        let a = arr[i].length;                  //goes thru array and set variable for the longest string for if statement
        if (a > maxLength){                     //determine if the variable 'a' is greater than maxlength
            initialLongestString = arr[i];      //set the variable if a > maxlength
            maxLength = a;                      
        }
    }
    return initialLongestString;
}

console.log(longestStringInArray (['hello', 'to', 'all', 'the', 'worlds']));

//9 .Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. 
//For example, stringsLongerThan (['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]. 

function stringsLongerThan (arr, num) {
    let longStrings = [];
    let properLength = arr[0];
    for (let i = 0; i < arr.length; i++){
        let properLength = arr[i].length;
        if (num <= properLength){
            properLength = arr[i];
            longStrings.push(properLength);
        }
    }
    return longStrings
}

console.log(stringsLongerThan(['hello', 'world', 'its', 'a', 'great', 'day'], 4));
