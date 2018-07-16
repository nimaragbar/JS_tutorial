let x = 15;

switch (x){
    case 1:
        console.log('The number is one!');
        break;
    case 2:
        console.log('The number is two');
        break;
    case 3:
        console.log('The number is three');
        break;
    default:
        console.log('The number is ' + x);
        break;
}

// note that JS switches function don't stop if case == x
// so we must break it when it get to case !!!!

// default run at the end of switch if all case will be wrong
