// Template String

const name = "Đức"
console.log(`Name: ${name}`)


// Review
const fullName = "Lê Văn Đức"
const birthYear = 2004;
const isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear

if(age > 18) {
    console.log(`My name is ${fullName} and I don't need to go to school`)
} else {
    console.log(`My name is ${fullName} and I still go to school`)
}