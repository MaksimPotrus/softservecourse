var isAgree = confirm("This program checks the ticket's luck. Do you want to continue?");
if(isAgree){
let ticket = prompt("Enter your ticket:", '');
let array = ([].map.call(ticket, function(x) {
  return x;
}));
let sumLeft = 0;
let sumRight = 0;
    for(let itemI = 0; itemI <= 5; itemI++){
      if(itemI <= 2)
        sumLeft+=Number(array[itemI]);
      else
        sumRight+=Number(array[itemI]);
}
if(sumLeft == sumRight)
  alert("YES");
else
  alert("NO");
}