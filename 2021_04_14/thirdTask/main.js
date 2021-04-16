var isAgree = confirm("This program checks the ticket's luck. Do you want to continue?");
if (isAgree) {
  let ticket = prompt("Enter your ticket:", '');
  let array = ([].map.call(ticket, function (x) { return x; }));
  let sumLeft = 0, sumRight = 0;
  for (let item = 0; item < array.length; item++) {
    if (item <= 2)
      sumLeft += Number(array[item]);
    else
      sumRight += Number(array[item]);
  }
  let answer = sumLeft == sumRight ? 'YES' : 'NO';
  console.log(answer);
}