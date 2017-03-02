function titleCase(str) {
  str = str.toLowerCase();
  var result = "";
  var strarr = str.split(' ');
  for( var i = 0; i < strarr.length; i++){
    var fw = strarr[i].slice(0,1);
    result = result + fw.toUpperCase() + strarr[i].slice(1) + " ";
    
  }
  return result.slice(0, -1);
}

titleCase("I'm a little tea po