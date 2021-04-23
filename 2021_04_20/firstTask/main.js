const CALCULATION_EXPRESSION = prompt("Enter expression :", "");
quipuCalculator(CALCULATION_EXPRESSION);
//@~@@*@@
function quipuCalculator(CALCULATION_EXPRESSION) {
    const ALL_POSSIBILITIES_EXPRESSION = ["+", "-", "/", "*"];
    let currentExpression;
    let expressionString;
    for (let firstIndex = 0; firstIndex < ALL_POSSIBILITIES_EXPRESSION.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < CALCULATION_EXPRESSION.length; secondIndex++) {
            if (CALCULATION_EXPRESSION[secondIndex] == ALL_POSSIBILITIES_EXPRESSION[firstIndex]) {
                currentExpression = CALCULATION_EXPRESSION[secondIndex];
            }
        }
        expressionString = CALCULATION_EXPRESSION.split(currentExpression);
    }
    const FIRST_EXPRESSION = expressionString[0];
    expressionString[0] = convertToCorrectItem(FIRST_EXPRESSION);
    const SECOND_EXPRESSION = expressionString[1];
    expressionString[1] = convertToCorrectItem(SECOND_EXPRESSION);
    convertBack(expressionString[0] * expressionString[1]);
}

function convertToCorrectItem(EXPRESSION) {
    let flag = false;
    for (let index = 0; index < EXPRESSION.length; index++)
        if (EXPRESSION[index] == '~')
            flag = true;
    if (flag) {
        let firstCounter = 0, secondCounter = 0;
        for (let index = 0; EXPRESSION[index] != '~'; index++) { firstCounter++ };
        for (let index = firstCounter; index < EXPRESSION.length - 1; index++) { secondCounter++ };
        EXPRESSION = firstCounter + "" + secondCounter;
    } else {
        let counter = 0;
        for (let index = 0; index < EXPRESSION.length; index++) { counter++; }
        EXPRESSION = counter + '';
    }
    return EXPRESSION;
}

function convertBack(EXPRESSION) {
    let answer = "";
    EXPRESSION = String(EXPRESSION).split("");
    for (let firstIndex = 0; firstIndex < EXPRESSION.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < Number(EXPRESSION[firstIndex]); secondIndex++)
            answer += "@";
        answer += "~";
    }
    console.log(answer.substring(0, answer.length - 1));
}