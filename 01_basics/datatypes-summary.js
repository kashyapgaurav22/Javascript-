//primitive

// 7 types : string , number , boolean , null , BigInt , undefined , symbol 

//reference(Non-primitive)

//arrays , objects , functions

const bignumber=467543863
const temp=null

const nikita = ["pookie", "cutie","honey"];
let myobj= {
    name:"gaurav",
    age:19,
}

const MyFunction = function(){
    console.log("hello world");
}

console.log(typeof bignumber) // to know the type of our variable
console.log(typeof temp) // type of null is object 

//curly bracket ke andar ki chije objects hoti hai 

//stack => primitive , heap => non-primitive

let ab ="hello"
let gf=ab
gf="pookie"
console.log(ab)
console.log(gf)

let firstone={
    email: "kashyap.gaurv0407@gmil.com",
    number: 9199479587
}

let secondone=firstone

secondone.email="nikitaverma22@gmail.com"
secondone.number="8144678980"

console.log(firstone.email)
console.log(firstone.number)


