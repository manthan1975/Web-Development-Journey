function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt nice!")
    console.log("Hey " + name + " your course is good too!")
}

function sum(a, b, c = 2) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c;
}

results1 = sum(3,5)
results2 = sum(7,7)
results3 = sum(3,15)

console.log("The Sum of these numbers is:", results1)
console.log("The Sum of these numbers is:", results2)
console.log("The Sum of these numbers is:", results3)

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}

func1(34);
func1(66);
func1(84);