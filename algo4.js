var array = [];
function findLongestWord(str) {
 array = str.split(" ");
   var count = 0;
  for (i=0; i<array.length; i++){
    if(array[i].length > count){
      count = array[i].length;
    }
  }
  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
