
// //Assignment-1

// //Empty array fruits
// let fruits =[];

// //Adding items to fruits
// fruits[0] = 'apple';
// fruits[1] = 'banana';
// fruits[2] = 'orange';
// //console.log(fruits);

// //deleting the first fruit
// fruits.splice(0,1);
// //console.log(fruits);


// //adding grape at the end
// fruits.push('grape');
// //console.log(fruits);


// // updating the fruits array
// fruits[1] = 'pear';
// //console.log(fruits);


// //Assignment-2

// //Empty object person
// let person = {};
// //console.log(person)

// //Adding the properties 
// person.name = 'John';
// person.age = 30;
// person.city = 'New York';
// //console.log(person);

// //removing the age
// delete person.age;
// //console.log(person);

// //Adding the new value
// person.job = 'Enginner';
// //console.log(person);

// //Updating city
// person.city = 'San Francisco';
// //console.log(person);



// //Assignment-3

// //Empty array cars
// let cars = [];

// // Addign values to cars
// cars = [
//     {make:'Toyota',model:'Camry',year:2018},
//     {make:'Toyota',model:'Camry',year:2018},
//     {make:'Toyota',model:'Camry',year:2018}
// ];
// console.log(cars);

// // Removing the 1st object
// cars.splice(0,1);
// console.log(cars);

// // Adding a new object
// cars.push({make:'Honda',model:'Civic',year:2020});
// console.log(cars);

// // Updating the model
// cars[1].model = 'Accord';
// console.log(cars);



// Day - 2

// Assignment - 1

// let number = prompt("Enter the number:");
// if(number == 0){
//     console.log(`${number} is zero`);
// }
// else if(number>0){
//     console.log(`${number} is posotive`);
// }
// else{
//     console.log(`${number} is negative`);
// }


// Assignment - 2

// let n=prompt("Enter the positive integer: ")

// function factorial(n){
//     let fact=1;
//     for(i=1;i<=n;i++){
//         fact *= i;
//     }
//     return fact
// }

// let result = factorial(n);
// console.log(result) 


//Assignment - 3

// isBig = ((a,b) =>{
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// })

// let result = isBig(10,40);
// console.log(result)


// Assignment - 4

// palindrome = ((string) =>{
//     let len = string.length;
//     for(let i = 0; i<len/2; i++){
//         if(string[i] !== string[len - 1 - i]){
//             return 'It is not a palindrome'
//         }
//     }
//     return 'It is palindrome';
// })

// let result = palindrome('naman');
// console.log(result);

// Assingment - 5

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     if (number <= 3) {
//         return true;
//     }
//     if (number % 2 === 0 || number % 3 === 0) {
//         return false;
//     }
//     for (let i = 5; i * i <= number; i += 6) {
//         if (number % i === 0 || number % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimesUpTo(limit) {
//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// const positiveInteger = 30;
// printPrimesUpTo(positiveInteger);


// Assignment - 6

// let operator = prompt('Enter operator ( either +, -, * or / ): ');
// let number1 =prompt('Enter first number: ');
// let number2 =prompt('Enter second number: ');

// let result;
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// console.log(`${number1} ${operator} ${number2} = ${result}`);


// Assignment - 7

// let input = prompt("Enter the string: ");
//  countVowels = ((input)=>{
//     let vowels = 'aeiouAEIOU'
//     let count = 0;
//     for(let char of input){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
//  })

//  let result = countVowels(input);
//  console.log(result);


// Assignment - 8

// let num = prompt("Enter the positive integer:");
// isPerfectNum = ((num)=>{
//     if(num <=0){
//         return false
//     }
//     let sum = 0;
//     for(i=1;i<=num/2;i++){
//         if(num%i == 0){
//             sum+=i;
//         }
//     }
//     return sum == num;
// })

// let result = isPerfectNum(num);
// console.log(result)


// Assignment - 9

// let num = prompt('Enter the number: ');
// fibonacci = ((num)=>{
//     let n1 = 0, n2 = 1, temp;
//     for(let i = 1; i<=num; i++){
//         console.log(n1);
//         temp = n1 + n2;
//         n1 = n2;
//         n2 = temp;
//     }
// })

// let result = fibonacci(num);
// console.log(result)

// Assignment - 10

let num = prompt('Enter the number : ');
MultiplicationTable = ((num)=>{
    if(num<=0){
        console.log('Enter the valid number');
        return;
    }
    console.log(`Multiplication table for ${num}:`);
    for(let i = 1; i<=10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
})

console.log(MultiplicationTable(num));