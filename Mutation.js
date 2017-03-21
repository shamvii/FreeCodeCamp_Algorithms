function mutation(arr) {
element1 = arr[0].toLowerCase().split(''); 
  element2 = arr[1].toLowerCase().split(''); 
  element1 = element1.join(''); 
  element2 = element2.join(''); 

    for(i=0 ;i < element2.length; i++){

        while(element1.indexOf(element2[i]) != -1) 
      {  
        i++;
      }
        if(i < (element2.length))
        {
          return false; 
        } 
        else{
          return true;
      }

    } 

}

mutation(["hello", "hey"]);
