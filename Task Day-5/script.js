                                                    // Normal Function Problems

                                                    console.log("Normal Functions")
// Print odd numbers in an array - IIFE anonymous function
var arr = [51,64,197,185,200,250,275,3000,3568];
function oddNumber(arr){
    let odd =[]
    for(val of arr){
        if(val %2 !=0)
        odd.push(val);
    }
    return (odd)
}
console.log(oddNumber(arr));

// Convert all the strings to title caps in a string array 

let names=["hari","adhi","aarthi","raghav"];
function capString(str){
    var res = []
    for(string of str){
        var firstLetter = string[0].toUpperCase();
        res.push(firstLetter+string.toLowerCase().slice(1))
       
    } return res
} console.log(capString(names));

// Sum of all numbers in an array
var arr = [51,64,197,185,200,250,275,3000,3568];
function sumArray(arr){
    let sum =[]
    for(val of arr){
        sum = (+sum) + (+val);
    }
    return sum
}

console.log(sumArray(arr));



// Return all prime numbers in an array
function isPrime(n) {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 }

const newArray = [1,2,3,5,10];
const primeNum = newArray.filter(isPrime)
console.log(primeNum);


// Remove duplicates from an array 
var arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr) {
return [...new Set(arr)];
}

console.log(removeDuplicates(arr));



// Return all palindromes in an array

let words = [ "abc", "car", "ada", "racecar", "cool" ];

function checkPalindrom(str) { 
    return str == str.split('').reverse().join('');
}

var result = words.filter(word => checkPalindrom(word));
console.log(result);


// Rotate an array by K times

var nums = [2,3,4,5,6];
var k = 3;

function rotateArray(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  };
console.log(rotateArray(nums , k));


                                                    // Arrow Function Problems
 console.log("Arrow Functions")
// Print odd numbers in an array - arrow function
var arr = [51,64,197,185,200,250,275,3000,3568]; 
var oddArr = []                                                  
arr.forEach((num) => num % 2 !== 0 && oddArr.push(num));
console.log(oddArr);

// Convert all the strings to title caps in a string array 
var string=["hari","adhi","aarthi","raghav"];
var result = [];
string.forEach((str)=>  result.push(str[0].toUpperCase()+str.toLowerCase().slice(1)));
console.log(result);

// Sum of all numbers in an array
var arr = [51,64,197,185,200,250,275,3000,3568];
var sum = arr.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
console.log(sum);

// Return all Prime Numbers in an Array
const isPrimeNum = (n) => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 }

const numArray = [1,2,3,5,10];
const allPrimeNum = newArray.filter(isPrimeNum)
console.log(allPrimeNum);


// Return all Palindromes in an Array
let pal = [ "abc", "car", "ada", "racecar", "cool" ];
let finalRes = [];
pal.forEach((string) => string == string.split("").reverse().join("") && finalRes.push(string));
console.log(finalRes); 