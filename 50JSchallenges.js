// 1. Print numbers from 1 to 10
for(let i=1; i<11; i++){
    console.log(i)
};

// 2. Print the odd numbers less than 100
for(let i=1; i<100; i+=2){
    console.log(i)
}

// 3. Print the multiplication table with 7
for(let i=1; i<13; i++){
    console.log(7 +"x"+ i +"="+ 7*i)
}

// 4. Calculate the sum of numbers from 1 to 10
let sum = 0;
for(var i=1; i<11; i++){
    sum += i;
}
console.log(sum);

// 5. Calculate 10!
var fac = 1
for(var i=10; i>1; i-=1){
    fac *= i
}
console.log(fac)

// 6. Calculate the sum of odd numbers greater than 10 and less or equal than 30
let sum = 0
for(var i=10; i<31; i++){
    if(i%2 != 0){
        sum += i
    }
}
console.log(sum)

// 7. Create a function that will convert from Celsius to Fahrenheit C=F-32/1.8

function temp_converter(celsius_value){
    let F = celsius_value + 32/1.8
    console.log(celsius_value+"C"+ " = "+ F+"F")
}
temp_converter(56)

temp_converter = (celsius_value) => {
    let F = celsius_value + 32/1.8
    console.log(celsius_value+"C"+ " = "+ F+"F")
}
temp_converter(56)

// 8. Calculate the sum of numbers in an array of numbers.
let sum = 0
array_calculator = (numbers) =>{
    numbers.forEach(element => {
        sum += element
    });
    console.log(sum)
}

array_calculator([2,3,-1,5,7,9,10,15,95])

// 9. Calculate the average of the numbers in an array
array_avg = (numbers) => {
    let sum = 0
    numbers.forEach(element => {
        sum += element
    });
    avg = sum/numbers.length
    console.log("Average = " + avg)
}

array_avg([1,3,9,15,90])

// 10. Create a function that receives an array of numbers and returns an
// array containing only the positive numbers.

positive_array = (numbers) => {
    new_array = new Array();
    numbers.forEach(element => {
        if(element > 0){
            new_array.push(element)
        }
    });
    console.log(new_array)
}

positive_array([1,-2,3,-4,5,-6])

// 10. Create a function that receives an array of numbers and returns
// an array containing only the positive numbers.

function isPositive(value) {
    return value > 0;
}

var filtered = [1,-2,3,-4,5,-6].filter(isPositive)
console.log(filtered)

// 11. Find the maximum number in an array of numbers
function maxfinder(numbers){
    let max = numbers[0]
    for(i=0; i<numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i]
        }
    }
    console.log(max)
}

maxfinder([1,2,3,4,5])

// 11. Print first 10 Fibonacci numbers without using recursion.
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

// 12. Create a function that will return a Boolean specifying if a number is prime
bool_finder = (number) => {
    if(number%2 == 0){
        console.log('True')
    }
    else{
        console.log('False')
    }
}

bool_finder(3)

// 13. Calculate the sum of digits of a positive integer number
function sum_digits(number){
    sum = 0;
    let num_to_str = number.toString();
    for(var char of num_to_str){
        sum += parseInt(char)
    }
    console.log(sum)
}
sum_digits(1234567)

// 14. Print the first 100 prime numbers ***************
prime_func = (number) =>{
    for(i=2; i<=number; i++){
        let isPrime = false;
        for(x=2; x<i; x++){
            if(i%x !== 0){
                isPrime = true;
                continue
            }
        }
        if(isPrime == false){
            console.log(i)
        }
    }
}
prime_func(10)

// 15. Rotate an array to the left 1 position****************

shifter = (array) => {
    let new_array = new Array();
    new_array.length = array.length;
    for(el of array){
        new_array[(array.indexOf(el)) - 1] = el
    }
    console.log(array);
    console.log(new_array);
}

shifter(['a','b','c','d','e'])

// 16. Reverse a string
reverser = (string) => {
    let rev_string = '';
        for(var i=string.length-1; i>=0; i -=1){
        rev_string += string[i]
        }
        console.log(rev_string)
}

reverser('hello')

reverser = (string) => {
    let str_Arr = string.split("")
    let rev_str_Arr = str_Arr.reverse()
    let rev_str = rev_str_Arr.join("")
    console.log(rev_str)
}

reverser('hello')

// 17. Factorialize a number
function factorialize(number){
    let factorial = 1;
    for(var num=number; num>=1; num--){
            factorial *= num;
    }
    console.log(factorial)
}

factorialize(3)

// 18. Parlindrome checker
parlindrome = (word) => {
    rev_word = word.split("").reverse().join("")
        if(rev_word == word){
            console.log('true')
        }
        else{
            console.log('false')
        }
    }

name = '  . th 3 ! * m ^ o , t h %& @ y    '
parlindrome("mums")

// 19. Create a function that will merge two arrays and return the result as a new array.
merger = (arr1, arr2) => {
    new_arr = []
    for(var el of arr1){
        new_arr.push(el)
    }
    for(let el of arr2){
        new_arr.push(el)
    }
    console.log(new_arr)
}

merger([1,2,3,4],[5,6,7,8])


// 20. Create a function that will receive two arrays of numbers
// as arguments and return an array composed of all the numbers
// that are either in the first array or second array but not in both.

