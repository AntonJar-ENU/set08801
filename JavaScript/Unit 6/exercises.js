function angleType(degree){
	
	var output;
	
	if (degree < 90) {
		output='Acute';
	} else if (degree == 90) {
		output = 'Right Angle';
	} else if (degree < 180) {
		output = 'Obtuse';
	} else if (degree == 180) {
		output = 'Straight Line';
	} else {
		output = 'Invalid Angle';
	}
	
	console.log(output);
}
