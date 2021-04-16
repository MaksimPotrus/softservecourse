var isAgree = confirm("This program calculates the amount in rubles that employees will be able to earn in the case of the highest quality filling of containers with sand. Do you want to continue?");
if (isAgree) {
    let A1 = +prompt("Enter A1:", '');
    let A2 = +prompt("Enter A2:", '');
    let A3 = +prompt("Enter A3:", '');
    let flag = "A";
    maxInSand = inputAreas(A1, A2, A3, flag);
    let B1 = +prompt("Enter B1:", '');
    let B2 = +prompt("Enter B2:", '');
    let B3 = +prompt("Enter B3:", '');
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
                    arrayData[item] = +prompt(flag + "1 must be less than 100, enter again:", '');
                    item = 0;
                    break;
                case 1:
                    arrayData[item] = +prompt(flag + "2 must be less than 100, enter again:", '');
                    item = 1;
                    break;
                case 2:
                    arrayData[item] = +prompt(flag + "3 must be less than 100, enter again:", '');
                    item = 2;
                    break;
            }
        };
    }
    return Math.max.apply(null, arrayData);
}