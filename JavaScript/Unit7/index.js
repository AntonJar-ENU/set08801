function init() {
	document.title = "Hello Napier Example"
	
	//Create button element
	var button = document.createElement("button");
	button.innerHTML = "Hello";
	button.id="hello_btn";
	
	// add button to body
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button);
	
	// add text to page when clicked
	document.getElementById('hello_btn').onclick = function() {
		var text_node = document.createTextNode(' Napier!');
		document.body.appendChild(text_node);
	};
};

window.onload = init;