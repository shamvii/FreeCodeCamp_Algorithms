function largestOfFour(arr) {
  var array = [];
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > count){
        count = arr[i][j];
      }
      }
    array.push(count);
      count = 0;
  }
  return array;
}
