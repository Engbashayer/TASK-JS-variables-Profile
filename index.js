/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = " Bashayer a almutairi";
let yearOfBirth = "1991";
let hoppy = " art ";
let  funFact = " line fobia ";
const image = "https://cdn.vectorstock.com/i/preview-1x/68/97/programmer-computer-expert-rgb-color-icon-vector-37206897.jpg" ;





/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =
let YOUR_AGE = 2023 - yearOfBirth ;
const fullNameString = ` My name is ${fullName}`;
const yearOfBirthString = ` i am ${YOUR_AGE}`;
const hoppyString = `my hoppy is ${hoppy}`;

//console.log(fullNameString, yearOfBirthString, hoppyString);



/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars++;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars--;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars= stars + 2;
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars= stars -2;
  
}

