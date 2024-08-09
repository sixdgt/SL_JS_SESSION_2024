// 1. Create a function that takes a number as input and returns if the number is prime or not

function isPrime(num){
    if(num >= 2){
        var count = 0;
        for(var i = 1; i <= num; i++){
            if(num % i === 0){
                count++;
            }
        }
        if(count === 2){
            console.log(num + " is a prime");
        } else {
            console.log(num + " is not a prime");
        }
    } else {
        console.log("Please enter a number greater than or equal to " + num);
    }
}


for (var i = 0; i < 100; i++){
    isPrime(i);
}

// 2. greater numbers between two numbers
// 3. power of self number
