function factorialize(num) {
  var result = 1;
  while(num > 0) {
    result = result * num;
    num--;
  
  }
  return result;
}

factorialize(5);
