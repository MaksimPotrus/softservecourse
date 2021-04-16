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