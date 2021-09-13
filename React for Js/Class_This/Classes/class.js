// class work inside strict mode
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(this);
        console.log(`His Name is ${this.name} and age is 
        ${this.age}`);
    }
    setDetails(newName, newAge) {
        this.name = newName;
        this.age = newAge
    }
}
let binod = new Person("Binod", 23);
binod.getDetails(); // this m  binod object hoga--> method call 
// binod.setDetails("Ravi",24);
// binod.getDetails();
// window
// button added
let btn1 = document.querySelector(".btn-1")
let btn2 = document.querySelector(".btn-2")
// event listener ->  this woh hoga jaise niche wale m btn1 hai this 
btn1.addEventListener("click", function(){  // this m btn1 hoga 
        binod.getDetails()

});
btn2.addEventListener("click", binod.getDetails);
// window
// setTimeout(binod.getDetails, 1000);--> is case m jaata window object 
// undefined


//let fn = binod.getDetails;
// fn(); --> yahan pe jayega undefined kyunki fxn call hai aur classes work in strict mode so 
// yahan jayega undefined instead of windows