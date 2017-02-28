function palindrome(str) {
  
  str =  str.replace(/[^A-Z^a-z^0-9]/g, ''); 
  str = str.toLowerCase();
  var newStr = str.split('').reverse().join('');
  if(str == newStr){
    return true;
  } else {
    return false;
  }
}



palindrome("eye");
palindrome("_eye");
palindrome("not a palindrome");
palindrome("nope");
palindrome("almostomla");
palindrome("0_0 (: /-\ :) 0-0");
