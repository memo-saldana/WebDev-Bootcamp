var score1 = [90, 98, 89, 100, 100, 86, 94];
var score2 = [40, 65, 77, 82,80, 54, 73, 63, 95, 49];

average(score1);
average(score2);

function average(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  
  console.log(Math.round(result /= arr.length));
  

}