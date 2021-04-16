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
    let calculation = 0;
    console.log(min);
    for (var i = 0; i < array.length; i++) {
        min[i] = Math.min.apply(null, array[i]);
        calculation+= min[i];
    }
    return calculation;
}