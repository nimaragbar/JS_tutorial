let names = ['Nima', 'Mary'];

// in for lop we see this structure for travers through a list
for ( let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// But in while lop
let i = 0;
while (i < names.length){
    console.log(names[i]);
    i ++;
}

// do while lop
let j = 0;
do {
    console.log(names[j]);
    j ++;
} while (j < names.length);
/*
There is a big differences between do lop and simple while lop
in do lop, code will be run without checking the while statement until it
arrive to while statement, this is a big differences!!
 */