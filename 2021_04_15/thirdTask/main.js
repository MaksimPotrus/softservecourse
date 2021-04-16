let count = prompt("Enter string:", "");
console.log(shortest(count).length);

function shortest(string){
  return string.split(" ").sort(function(a,b){
    return a.length + b.length;
  }).pop()
 }