/************************************
Varibalbes and data types
***************************************
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 30;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "teacher";
console.log(job);

// var $years = 3


/******************************************** Varibales mutation and tyrpe coercion
*******************************************/
/*
var firstName = "John";
var age = 28;
// type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;



console.log(firstName + "is a " + age + " year old "+ job +". Is He married "+ isMarried);
// Varibale mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + "is a " + age + " year old "+ job +". Is He married "+ isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + '' + lastName);
*/

/***************************************************** Basic Operators
**********************************************/
// math operators
/*
var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = now - 28;
yeahMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// logiacl operators 
/*
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
var x;
console.log(typeof x);
*/
/*8888888888888888888888888888888888888888888888888888888888888888888888888
OPerator precedence
*///////////////////////////////////////////////////////////////////////////

/*
var now = 2018;
var yearBilal = 1991;
var Fullage = 18;

var isFullage = now - yearBilal >= Fullage;
console.log(isFullage);

var ageAmy = now - yearBilal;
var ageIman = 30;
var average =  (ageAmy + ageIman) /2

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x);

// more operators
// x = x * 2
x *= 2



// challenge area

var studentScore = 27;
var maxScore = 100;

result = (studentScore / maxScore) * 100;
console.log(result);
*/
/*
let petName = "Hal";
petName = "Spot";

console.log(petName)

// temperature conversion from *f to *C and to Kelvin

let fahrenheit = 60;

let celsius = (fahrenheit - 32) * (5/9);
console.log(celsius);

let kelvin = celsius + 273.15;
console.log(kelvin);

// booleans
// ==== strictly equal
// !== not equal
// < >, <= >=
let temp = 120
let isFreezing = temp < 32

if (isFreezing){
	console.log("it is freezing outside");
	}

if (temp >= 110){
	console.log('it is way too hot outside');
	}
//challenge
let age = 8

if(age <= 7){
	console.log('child discount');
}
	
if(age >= 65){
	console.log('senoir dsicount')
}

//challenge area
/*
let age = 5;
let isChild = age <= 7;
let isSenoir = age >= 65;
console.log(isChild);
console.log(isSenoir);
*/

// if statments
/*
let isAccountLocked = false
let userRole = 'admin'



if(isAccountLocked){
	console.log('is account locked')
}else if(userRole === 'admin'){
	console.log('welcome admin')
}else{
	console.log('welcome')
}


// challenge 

let degree = 130

if(degree >= 120){
	console.log('its too hot');
}else if(degree <= 31){
	console.log('no its too cold');
}else{
	console.log('its nice outside');
}

*/
// logical (&& = And) (|| = Or)Operator
/*
let tempy = 55

if(tempy = 60 && tempy <= 90){
	console.log('it is nice out');
}else if (tempy <= 0 || tempy >= 120 ){
	console.log('do not go outside')
}else{
	console.log('eh, do want you want')
}

// challenge is customer vegan

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan  && isGuestTwoVegan ){
	console.log('offer vegan options');
}else if ( isGuestOneVegan ||  isGuestTwoVegan){
	console.log('offer both options');
}else{
	console.log('offer anything');
}



// lexical scope (static scope)
// global scope - defined outside of all code block
//local scope - defined inside a code block

// in a scope you can access varibales defined in that scope, or in any parent/ancestor

//Global scope (varOne)
	// Local scope (varTwo)
		//local scope (varFour)
//local scope ( varThree)
/*
let varOne = 'varOne';

if(true){
	console.log(varOne)
	let varTwo = 'varTwo';
	console.log(varTwo);
	
	if(true){
	   let varFour = 'varFour'
	   }
}

if(true){
	let varThree = 'varThree';
}

console.log(varTwo);
*/
// avoid leaked gloabal variable
//Global scope (name)
	//local (name)
		//local
	//local

/*
let name = " lemi"

if(true){
	let name = "samira";
	if(true){
		name = 'bilal'
		console.log(name);
	}
}

if(true){
	console.log(name);
}

*/

// Funtion - input(argument), code, output ( return Value)

/*
let greetUser = function(){
	console.log('welcome user')
}

greetUser()
greetUser()

let square = function(num){
	let result = num * num
	return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// challenge area

let  convert_F_to_C = function(fahrenheit){
	let celsius = (fahrenheit - 32) * (5/9)
	return celsius
}

let tempOne = convert_F_to_C(32)
let tempTwo = convert_F_to_C(68)

console.log(tempOne)
console.log(tempTwo)


// undefined a varibale not assigned

let x 
if (x === undefined){
	console.log('please provide a name')
}else{
	console.log(x)
}
*/
// undefined for a funstion arguments
// undefined as function return default value

/*
let squares = function (num){
	console.log(num)
}

let result = squares()
console.log(result)

// null as assigned value
let number = 27
number = null
console.log(number)
*/


// multple arguments
/*
let add = function(a, b, c){
	return a + b + c
}

let result = add(10, 1, 7)
console.log(result)

// default arguments

let getScoreText = function (name = 'anonymous', score = 0){
	return `name: ${name} - score: ${score}`
	//return "name: " + name + " score " + score
	
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// challenge 

let tipPercent = function (total, tip = 0.2){
	return total * tip
}

let theTipis = tipPercent(40, .25)
console.log(theTipis)


// functions scope
// global scope ( convert_F_to_C , tempOne, TempTwo)
	// local scope( fahrenheit, celsius)
		// local scope ( isFreezing)

let  convert_F_to_C = function(fahrenheit){
	let celsius = (fahrenheit - 32) * (5/9)
	if ( celsius <= 0){
		let isFreezing = true
	}
	return celsius
}

let tempOne = convert_F_to_C(32)
let tempTwo = convert_F_to_C(68)

console.log(tempOne)
console.log(tempTwo)

// template string (``) ${varibale}
let Myage = 18
let name = 'lemi'
console.log(`hey , my name is ${name}! i am ${Myage} years old`)
*/

// challenge
/*
let getTip = function (total, tip = 0.2){
	let percent = tip * 100
	let tipPercent = total * tip
	return `a ${percent}% tip on ${total} would be ${tipPercent}`
}

let theTipis =getTip(60, .25)
console.log(theTipis)
*/

// challenge grade calaculator function
/*
let getGrades = function(studentMarks, totalMarks ){
	let mark = (studentMarks / totalMarks) * 100
	let lettergrade = ''
	
	if (mark >=90 ){
		lettergrade = 'A'
	
	} else if(mark >= 80){
		 lettergrade = 'B'
	} else if(mark >= 70 ){
			 lettergrade = 'C'
	} else if (mark >= 60){
			  lettergrade = 'D'
	} else{
		lettergrade = 'F'
	}
	return `You got a ${lettergrade} because your score was ${mark}`
}
let thegrades = getGrades(55, 100)
console.log(thegrades)
*/



// Objects/////////////////////////////////////////////////////////////////
/*
let myBook = {
	title: '1984', 
	author: 'George Orwell',
	pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = `Animal Farm`

console.log(`${myBook.title} by ${myBook.author}`)

// challenge

let myBrother = {
	name:'Bilal',
	age: 12,
	location: 'Calgary'
}
console.log(`${myBrother.name} is ${myBrother.age} and lives in ${myBrother.location}`)

myBrother.age = myBrother.age + 1

console.log(`${myBrother.name} is ${myBrother.age} and lives in ${myBrother.location}`)
*/
/*
let myBook = {
	title: '1984', 
	author: 'George Orwell',
	pageCount: 326
}


let otherBook = {
	title: 'Harry Potter', 
	author: 'JK Rowling',
	pageCount: 550
}
let getSummary = function(book){
	return {
		summary:`${book.title} by ${book.author}`,
		pageCountSummary:`${book.title} is ${book.pageCount} pages long`
	}
	
}

let bookSummary = getSummary(myBook);

let otherBookSummary = getSummary(otherBook);


console.log(bookSummary.pageCountSummary)

// challenge

let convertFahrenheit = function(fahrenheit){
	return{
		fahrenheit: fahrenheit,
		celsius: (fahrenheit - 32) * (5/9),
		kelvin: (fahrenheit - 32) * (5/9) + 273.15
	}
}

let result = convertFahrenheit(74);
console.log(result);

let myAccount = {
	name:'lemi',
	expenses: 0,
	income: 0
}
//let otherAccount = myAccount
//otherAccount.income = 1000
//otherAccount = {}



let addIncome = function (account, income){
	account.income = account.income + income
	
}



let resetAccount = function (account){
	account.expenses =  0
	account.income = 0
	
}


let addExpense = function (account, expense){
	account.expenses = account.expenses + expense
	
}


let getAcountSummary = function (account) {
	let balance = account.income - account.expenses
	return `Account for ${account.name} has a of ${balance} and an income of 
	${account.income} and ${account.expenses} in expenses `
	
}

addIncome(myAccount, 4000)
addExpense(myAccount,500)
addExpense(myAccount, 300)
console.log(getAcountSummary(myAccount))
resetAccount(myAccount)
console.log(getAcountSummary(myAccount))

*/

// Objests-methods/////////////////////////////////////////////////////////////
/*
let restaurant = {
	name:`Edo`,
	guestCapacity:75,
	guestCount: 0,
	checkAvailbilty:function(partySize){
		//console.log(this.guestCapacity)
		var seatsLeft = this.guestCapacity - this.guestCount;
		return partySize <= seatsLeft;
	},
	seatParty:function(partySize){
		this.guestCount = this.guestCount + partySize;
	},

	removeParty: function (partySize) {
		this.guestCount = this.guestCount - partySize;
	}

}
 
restaurant.seatParty(72);
console.log(restaurant.checkAvailbilty(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailbilty(4));
*/

// ////////////////// string-methods/////////////////////////////////

let name = ' Lemi Mohamed ';

// length property
console.log(name.length);

// convert uppercase
console.log(name.toUpperCase());

// covert lowercase
console.log(name.toLowerCase());

// Includes method
let password = 'abc123098';
console.log(password.includes('password'));

// Trim method to get of extra space
console.log(name.trim());

// challange//

// isValidPasword
// length is more than 8 and does not contain the word password

let isValidPasword = function(password){
	
	return password.length > 8 && !password.includes('password') ;
	
}

console.log(isValidPasword('asdfp'));
console.log(isValidPasword('aabs123!@#$%^&*'));
console.log(isValidPasword('asdfghjklpassword'));


/////// number methods //////////////////////////////////

let num = 103.941;
// toFixed method  round your number to decimal YOU WANT
console.log(num.toFixed(1));

// Math method
console.log(Math.round(num));

console.log(Math.round(num));
console.log(Math.floor(num));// round down
console.log(Math.ceil(num));// round up

let min = 10;
let max = 20;
let randomNUm = Math.floor(Math.random() * (max - min + 1)) + min;
 //10 -20
console.log(randomNUm);


// challenge///////////
// 1 - 5 true if correct - false is not correct
let makeGuess = function(num){
	let minNum = 1;
	let maxNum = 5;
	let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	return num === randomNum
};

console.log(makeGuess(2));

// const cannot be reassinged
const isRaining = true;
//isRaining = false;
console.log(isRaining);

const person = {
	age:27
}
person.age = 28 // valid just changing one of the object's properties
//person = {} invalid trying to reassign person object
console.log(person)

//// var variable /////////////////////////////////////////////////

// let and const you cant re-define an varibale or you will get an error, 
//but with var you can reassign a variable and not get an error
// var is function scope
// let and const are block scope
let boy = 'bilal';
boy = 'josh';

let boy = 'ben'
console.log(boy);

var boy = 'bilal';
boy = 'josh';

var boy = 'ben'
console.log(boy);

if(10 === 10){
	let boy = 'ben'
}

console.log(boy)



