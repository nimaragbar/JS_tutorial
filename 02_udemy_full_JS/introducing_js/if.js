let a = 5;
let b = 6;

if (a < b){
  console.log("a is greater than b")
} else if (a > b){
    console.log("b is greater than a")
} else {
    console.log("a is equal to b")
}

let check= function (number) {
    if (number % 2 === 0 ){
        console.log(number + " is even!")
    } else {
        console.log(number + ' is odd.')
    }
};

check(2);
check(5);
