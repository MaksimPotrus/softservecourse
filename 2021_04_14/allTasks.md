## All task on 2021.04.14
#
## Task 1
```js
var isAgree = confirm("This program calculates the minimum number of paint cans needed to \npaint walls in an office. Do you want to continue?");
if (isAgree) {
    let L = +prompt("Enter L:", '');
    let W = +prompt("Enter W:", '');
    let H = +prompt("Enter H:", '');
    let inputData = [L, W, H];
    for (let item = 0; item < inputData.length; item++) {
        while (inputData[item] >= 1000) {
            switch (item) {
                case 0:
                    inputData[item] = +prompt("L must be less than 1000, enter again:", '');
                    break;
                case 1:
                    inputData[item] = +prompt("W must be less than 1000, enter again:", '');
                    break;
                case 2:
                    inputData[item] = +prompt("H must be less than 1000, enter again:", '');
                    break;
            }
        }
    }
    /*функция для расчета боковой площади прямоугольного параллелепипеда равна S = 2*c*(a+b)*/
    alert(2 * Number(H) * (Number(L) + Number(W)) / 16);
}
```
## Task 2
```js
var isAgree = confirm("This program calculates the amount in rubles that employees will be able to earn in the case of the highest quality filling of containers with sand. Do you want to continue?");
if (isAgree) {
    let A1 = prompt("Enter A1:", '');
    let A2 = prompt("Enter A2:", '');
    let A3 = prompt("Enter A3:", '');
    let flag = "A";
    maxInSand = inputAreas(A1, A2, A3, flag);
    let B1 = prompt("Enter B1:", '');
    let B2 = prompt("Enter B2:", '');
    let B3 = prompt("Enter B3:", '');
    flag = "B";
    maxInCapacity = inputAreas(B1, B2, B3, flag);
    alert(maxInSand * maxInCapacity);
}

function inputAreas(firstItem, secondItem, thitdItem, flag) {
    let arrayData = [firstItem, secondItem, thitdItem];
    for (let item = 0; item < arrayData.length; item++) {
        while (arrayData[item] > 100) {
            switch (item) {
                case 0:
                    arrayData[item] = prompt(flag + "1 must be less than 100, enter again:", '');
                    item = 0;
                    break;
                case 1:
                    arrayData[item] = prompt(flag + "2 must be less than 100, enter again:", '');
                    item = 1;
                    break;
                case 2:
                    arrayData[item] = prompt(flag + "3 must be less than 100, enter again:", '');
                    item = 2;
                    break;
            }
        }
    }
    return Math.max.apply(null, arrayData);
}
```
## Task 3
```js
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
 ```