// displays message
function helloFunction() {
	alert('Hello Napier');
}

// adds message to a p Element
function addMessage() {
	document.getElementById("outputDemo").innerHTML = "HELLO WORLD";
}

// adds text to a div Element
function addDivMessage() {
	document.getElementById("output").innerHTML += "<p>HELLO WORLD in a div</p>";
}

// Change color to blue and text
function changeColor() {
	document.getElementById("redPara").style.color = "blue";
	document.getElementById("redPara").innerHTML ="I am BLUE";
}

// public 
var current="red";
// Changes colour each time clicked
function colorChanger() {
	
	var redText = "I am RED";
	var blueText = "I am BLUE";
	var currentText ="";
	
	if (current ==="red") {
		current="blue";
		currentText = blueText;
	} else {
		current = "red";
		currentText=redText;
	}
	
	document.getElementById("redPara").style.color = current;
	document.getElementById("redPara").innerHTML = currentText;
	
}