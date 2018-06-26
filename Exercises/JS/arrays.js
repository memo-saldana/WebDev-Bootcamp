function printReverse(arr) {
	for(var i = (arr.length - 1); i>=0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var init = arr[0];
	var uniform =true;
	arr.forEach( function (val,i) {


		if(init !== val) {
			
			uniform = false;
		}
	})

	return uniform;
}


function sumArray(arr) {
	var result =0;

	arr.forEach( function(val) {
		result += val;
	})

	return result;
}


function max(arr) {
	var max=arr[0];

	arr.forEach( function(val) {
		if(max<val) {
			max = val;
		}
	})
	return max;

}