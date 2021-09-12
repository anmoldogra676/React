/*
                          MAP 
*/
// map -> array k uper hof
// map--> pure ( do not change in actual array) + hof (take fxn as input)
// map call square fxn on every  elem of the array and make a new array that has 
// valued that returned by the square( callback ) function
let arr =[1,2,3,4,5]
function square(num){
    return num*num;
}
function cuber(num){
    return num*num*num;
}

let allElem =arr.map(square);// hr element k liye fxn chalyega
console.log("Map Elements : " + allElem)

/*
                          FILTER 

Filter ko ek test (condtition) pass krte ho mtlb woh element pass ya fail hai 
return kr dega un elements ko jinke liye true aaya hai
// filter -> loops on the whole array  an call it's test filterOdd on every
// element and filter out the elem on the basis of true or false


*/
function filterOdd(num){
    return num%2==1
}

let allFilterEle =arr.filter(filterOdd)
console.log("Filter Elements :" + allFilterEle)

