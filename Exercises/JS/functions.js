function isEven(x) {
	if (x%2== 0){
		return true;
	}
	return false;
}

function factorial (x) {
	var result = 1;
	for(var i = x ;i ; i--){
		result *=i
	}
	return result;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}