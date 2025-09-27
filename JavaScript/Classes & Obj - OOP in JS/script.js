// let obj = {
//     a: 1,
//     b: "Marky"
// }
// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

//  HINT: Prototype kisi bhi ak object k andr kuch or properties add krne ka trika hota hai

class Animal{
    constructor(name) {
        // (this) is a way for us to create properties in a obj or vo obj which is being created
        this.name = name
        console.log("Object is created...")
    }
    
    eats(){
        console.log("Kha raha hu")
    }
    jumps(){
        console.log("Kud raha hu")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name) 
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("Kha raha hu roar")
    }
}
let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Shera")
console.log(l)