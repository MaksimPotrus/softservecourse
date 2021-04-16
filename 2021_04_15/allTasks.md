## All task on 2021.04.14
#
## Task 1
```js
const m = +prompt("Enter rows:", '');
const n = +prompt("Enter columns:", '');
var array = matrixArray(m, n);
var isAgree = confirm("The array was filled with random elements, do you want to enter it manually?");
if (isAgree) {
    array = manuallyArrayInput(array);
}
console.log(array);
console.log(minFinder(array));

function matrixArray(rows, columns) {
    var array = new Array();
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (var j = 0; j < columns; j++) {
            arr[i][j] = Math.floor(Math.random(3) * arr.length);
        }
    }
    return array;
}

function manuallyArrayInput(array) {
    let returnedArray = array.map(function (currentValue) {
        for (var j = 0; j < currentValue.length; j++) {
            currentValue[j] = +prompt("Enter element of array:", '');
        }
        return currentValue;
    });
    return returnedArray;
}

function minFinder(array) {
    let min = []; 
    let calc = 0;
    console.log(min);
    for (var i = 0; i < array.length; i++) {
        min[i] = Math.min.apply(null, array[i]);
        calc+= min[i];
    }
    return calc;
}
```
## Task 2
```js
var array = [];
var count = +prompt("Amount of elements:", "");
for (var i=0; i<count; i++){
    array[i]=parseInt(prompt("Please enter an integer:", ""));
}
alert(twoMaxElements(array));

function twoMaxElements(array){
    var firstMax = -Infinity;
    var secondMax = -Infinity;

    for (var i=0; i < array.length; i++) {
        if (array[i] > firstMax) {
            firstMax = array[i];
        }
    }
    for (var i=0; i < array.length; i++) {
        if (array[i] > secondMax && array[i] < firstMax) {
            secondMax = array[i];
        }
    } 
    return [firstMax,secondMax];
}
```
## Task 3
```js
let count = prompt("Enter string:", "");
console.log(count);
console.log(shortest(count).length);

function shortest(string){
  return string.split(" ").sort(function(a,b){
    return a.length + b.length;
  }).pop()
 }
 ```