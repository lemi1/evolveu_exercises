 
console.log('hello world from javaScript file');
function myFunction(){
	console.log('I am in my function');
	//alert('alert alert');
}
var x = 0
function add(){
	
	x = x + 1
	document.getElementById('mydiv').innerHTML = document.getElementById('mydiv').innerHTML + " <br> this java ,"  + x
	//document.getElementById('mydiv').innerHTML += " <br> this java ,"  + x;
	
}
var moveCircle = 50
function disapear(){
	//document.getElementById('mydiv').innerHTML = " "
	
	//moveCircle += 50
	//document.getElementById('yellow').setAttribute('cx', moveCircle)

}

function getNumber(){
	var num_1  = document.getElementById('first_num').value
	var num_2 = document.getElementById('second_num').value
	return [parseInt(num_1), parseInt(num_2)]
}
function add(){
	var  numArray = getNumber()
	document.getElementById('answer').innerHTML = (numArray[0]) + (numArray[1]);
	
}
function subtract(){
	var  numArray = getNumber()
	document.getElementById('answer').innerHTML = numArray[0] - numArray[1];
}

function divide(){
	var  numArray = getNumber()
	document.getElementById('answer').innerHTML = numArray[0] / numArray[1];
}

function exponent(){
	var  numArray = getNumber()
	document.getElementById('answer').innerHTML = Math.pow(numArray[0], numArray[1]);
}
function multiply(){
	var  numArray = getNumber()
	document.getElementById('answer').innerHTML = numArray[0] * numArray[1];
}