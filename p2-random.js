/*
    CIT 281 Project 2
    Name: Jared Skilowitz
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
let lengthOfOutputString = getRandomInteger(5, 26);

// This function references the array called alphabet and
// uses the getRandomInteger function to select a letter 
// based on it's correlating index value. 
function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log("Random letter:", getRandomLetter());

// This function sets the required minimum length of a
// string to 10 and it's maximun to 20. Then it references
// those values and the array called alphabet to generate 
// a random string based on these parameters. 
function getRandomString(minLength, maxLength) {
    minLength = 10;
    maxLength = 20;
    let result = "";
    for (let i = 0; i > minLength -1, i < maxLength + 1; i++) {
        result += alphabet[Math.floor(Math.random() * ((maxLength - minLength) + minLength))];
    }
    return result;
}

console.log("Random String:", getRandomString());

// This is an implicit arrow string that takes a randomly 
// generated string and sorts it alphabetically in ascending order. 
const getSortedString = (string) => [...string].sort().join('');

console.log("Sorted String:", getSortedString(getRandomString(10, 20)));

// I stopped using this to test the functions because I
// could no longer tell which output matched which function.
// The tests are now done with console.log's after each function.  
// The only reson I did not delete it is because the instuctions 
// wanted to see that I had updated it so I kept it but commented out. 
/*for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
    result += getRandomString();
}

console.log(result);*/
