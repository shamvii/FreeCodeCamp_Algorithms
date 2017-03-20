function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num > 0) {
    var result='';
  for(var i = 0; i < num; i++)
    {
      result += str;
    }
    return result;
  } else
    {
  return "";
}
}
