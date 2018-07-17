// first create a new promise
let p = new Promise((resolve, reject)=>{
    // resolve('Resolved promise data');
    // reject('Rejected promise data');
    setTimeout(() => resolve('Resolved promise data'));

});

p.then(response => console.log(response));
p.catch(error => console.log(error));
