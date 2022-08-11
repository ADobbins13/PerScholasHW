
// Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers.

for (let i = 0; i < 10; i ++)
    if( i % 2 == 0){
        console.log(i)
    }

    
// Write an if/else statement for the following requirements:

// If student gets 80 or higher: console log You did a good job
// If students get 70 or above: console log Keep trying
// If students get 60 or above: console log ehhhh
// If students get 55 or above: console log Not to good
// Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

let grade = 54

if (grade >= 80){
    console.log("You did a good job")
}else if (grade >= 70) {
    console.log("Keep trying")
}else if (grade >= 60) {
    console.log("ehhhh")
}else if (grade >= 55) {
    console.log("Not too good") 
}else {
    console.log("Bad grade but you'll get em next time")
}

// Write a for loop for the given output: 10, 30, 50, 70, 90 20, 40, 60, 80, 100

for (let i = 10; i <= 100; i += 20) {
    console.log(i)
}
for (let i = 20; i <= 100; i += 20) {
    console.log(i)
}

// This could be acheived a few ways, be creative.
// ------------------------------------------------
// Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buzz". If can be multiplied by 3&5 console log 'FizzBuzz'

for (let i = 1; i <= 100; i ++ ) {
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }else if (i % 3 === 0) {
        console.log("Fizz")
    }else if (i % 5 === 0) {
        console.log("Buzz")
    }        
}
