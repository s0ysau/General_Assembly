/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result: ', foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
	- Hint use the push method
*/

// Complete Exercise 2 below...

foods.push('pizza', 'cheeseburger');

console.log('Exercise 2 Result: ',  foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
	- How do you add things to the front of an array, push wont work so what do you do?
*/

// Complete Exercise 3 below...

foods.unshift('taco');

console.log('Exercise 3 Result: ', foods);

/*
Exercise 4:
  - Access the string 'pizza' with bracket notation (based upon its known position) in the foods array and assign to a variable named favFood.
	- You should end up with a variable called favorite food that is equal to 'pizza'
*/

// Complete Exercise 4 below...

favFood = foods[1];

console.log('Exercise 4 Result: ', favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
	- How do we add stuff to the middle of the array at a specific spot cant use push, cant use unshift
*/

// Complete Exercise 5 below...

let index = 2 ;
foods.splice(index, 0, 'tofu');

console.log('Exercise 5 Result: ', foods);

/*
Exercise 6:
  - Remove the string 'pizza' in the foods array and replace it with the separate strings 'sushi' & 'cupcake'.
	- Hmm tricky, think about what the end result should be.... yes Arthur talked about this in class. What is the intended result, pizza will be gone and instead, now sushi & cupcake will be in their instead
*/

// Complete Exercise 6 below...


foods.splice(1, 1, "sushu", "cupcake");

console.log('Exercise 6 Result: ', foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
	- You should have a food array and a yummy array now.
*/

// Complete Exercise 7 below...


const yummy = foods.slice(1,3);

console.log('Exercise 7 Result: ', yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
	- Easiest question yet don't overthink it trust me.
*/

// Complete Exercise 8 below...


let soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 Result: ', soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
	- Easier than it sounds.... google it
*/

// Complete Exercise 9 below...

let allFoods = foods.join(" -> ");

console.log('Exercise 9 Result: ', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...

let hasSoup;
if (foods === "soup"){
    hasSoup = true
} else {
    hasSoup = false
}

console.log('Exercise 10 Result: ', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...

const odds = [];
nums.forEach(iterate);

function iterate (items){
    if (items % 2 !== 0) {
    odds.push(items);
}
}

console.log('Exercise 11 Result: ', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...

const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach(by3);
nums.forEach(by5);
nums.forEach(by3And5);

function by3 (items){
    if (items % 3 === 0){
    fizz.push(items);
}
}

function by5 (items){
    if (items % 5 === 0){
    buzz.push(items);
}
}

function by3And5 (items){
    if (items % 3 === 0 && items % 5 === 0){
    fizzbuzz.push(items);
}
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Complete Exercise 13 below...

let numList = numArrays[3];

console.log('Exercise 13 Result: ', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...

let num = numArrays[2][1]

console.log('Exercise 14 Result: ', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...


let total = 0;
let sum = 0;

numArrays.forEach((number)=>{
    number.forEach((value)=>{ 
        sum += value;
    })
    total = sum;
})

console.log('Exercise 15 Result: ', total)