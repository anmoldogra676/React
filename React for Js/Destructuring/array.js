// let arr =["Anmol" , "Dogra", "21", "Indian"];
// let name = arr[0];;
// let LastName = arr[1]; 

// Destrucuring is alternatve of this upper syntax
// let [name, LastName,,Nation]=arr;
// console.log(name);
// console.log(LastName)
// console.log(Nation)


// We can also give default value--> 
// let [name ="Steve", LastName ="Rogers",,,]= arr
// console.log(name);
// console.log(LastName)

// Same for objects
// default value can be given

let person ={ name:"Anmol", LastName:"Dogra", age:"21"}
// console.log(person.name)
// console.log(person.LastName)
let{name, LastName="faf",age:umer} =person; // this key must match with person key 
console.log(name);
console.log(umer)
// = value dete hain aur : se alias ( ek aur naam jisse hm identify kr payen)
