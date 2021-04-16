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
    alert(2 * H * (L + W) / 16);
}