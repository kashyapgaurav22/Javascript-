let name="Gaurav"
const repoCount = 50

console.log(`My name is ${name} and my repoCount is ${repoCount}`); //string interpolation 

const gamename = new String('gaurav')

console.log(gamename)
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.charAt(2))
console.log(gamename.indexOf('a'))

const newstring = gamename.substring(0,3) // substring doesn't obey negative index value
console.log(newstring)

const anotherstring = gamename.slice(-5,5)  // we can put negative index only in slicing
console.log(anotherstring)

console.log(gamename.slice(2,5))