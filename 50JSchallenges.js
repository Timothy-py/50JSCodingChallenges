// // Pring numbers from 1 to 10
// for(let i=1; i<11; i++){
//     console.log(i)
// };

// // Print the odd numbers less than 100
// for(let i=1; i<100; i+=2){
//     console.log(i)
// }

// // Print the multiplication table with 7
// for(let i=1; i<13; i++){
//     console.log(7 +"x"+ i +"="+ 7*i)
// }

// // Calculate the sum of numbers from 1 to 10
// let sum = 0;
// for(var i=1; i<11; i++){
//     sum += i;
// }
// console.log(sum);

// Calculate 10!
// var fac = 1
// for(var i=10; i>1; i-=1){
//     fac *= i
// }
// console.log(fac)

// Calculate the sum of odd numbers greater than 10 and less or equal than 30
// let sum = 0
// for(var i=10; i<31; i++){
//     if(i%2 != 0){
//         sum += i
//     }
// }
// console.log(sum)

// Create a function that will convert from Celsius to Fahrenheit C=F-32/1.8

// function temp_converter(celsius_value){
//     let F = celsius_value + 32/1.8
//     console.log(celsius_value+"C"+ " = "+ F+"F")
// }
// temp_converter(56)

// temp_converter = (celsius_value) => {
//     let F = celsius_value + 32/1.8
//     console.log(celsius_value+"C"+ " = "+ F+"F")
// }
// temp_converter(56)

// Calculate the sum of numbers in an array of numbers.
// let sum = 0
// array_calculator = (numbers) =>{
//     numbers.forEach(element => {
//         sum += element
//     });
//     console.log(sum)
// }

// array_calculator([2,3,-1,5,7,9,10,15,95])

// Calculate the average of the numbers in an array
// array_avg = (numbers) => {
//     let sum = 0
//     numbers.forEach(element => {
//         sum += element
//     });
//     avg = sum/numbers.length
//     console.log("Average = " + avg)
// }

// array_avg([1,3,9,15,90])

// Create a function that receives an array of numbers and returns an
// array containing only the positive numbers.

// positive_array = (numbers) => {
//     new_array = new Array();
//     numbers.forEach(element => {
//         if(element > 0){
//             new_array.push(element)
//         }
//     });
//     console.log(new_array)
// }

// positive_array([1,-2,3,-4,5,-6])

// Create a function that receives an array of numbers and returns
// an array containing only the positive numbers.

// function isPositive(value) {
//     return value > 0;
// }

// var filtered = [1,-2,3,-4,5,-6].filter(isPositive)
// console.log(filtered)

// Find the maximum number in an array of numbers
// function maxfinder(numbers){
//     let max = numbers[0]
//     for(i=0; i<numbers.length; i++){
//         if(numbers[i]>max){
//             max = numbers[i]
//         }
//     }
//     console.log(max)
// }

// maxfinder([1,2,3,4,5])

// Print first 10 Fibonacci numbers without using recursion.
function fib(number){
    let f0 = 0;
    let f1 = 1;
    console.log(f0)
    console.log(f1)
    for(i=2; i<number; i++){
        fi = f0 + f1;
        console.log(fi)
        f0 = f1;
        f1 = fi;
    }
}
fib(10)