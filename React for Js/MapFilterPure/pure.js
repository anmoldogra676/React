//Functional programming-> Uses pure fxn, hof
// agr aapka koi fxn woh aapke bahr k variable ki value change nhi kr skta ya access nhi kr skta
// if it needs a variable then it will takes a argument and makes a copy and change that copy
// for a given Input it should always give same Output
// Hof--> higher order fxn which either take or return function 

let a=10;
let arr =[1,2,3,4]
function purefxn(a){
    a++;
    return a;
}

console.log( purefxn(a) );
console.log(a);