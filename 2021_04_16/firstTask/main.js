let string = prompt("Enter string:", "");
string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
console.log(string);
let temporaryArray = [];
for (let upperIndex = 0; upperIndex < string.length; upperIndex++) {
    for (let lowerIndex = 1; lowerIndex <= 9; lowerIndex++) {
        if (string[upperIndex].includes(String(lowerIndex)) || /^[a-zA-Z0-9]+$/.test(string[upperIndex])) {
            temporaryArray.push(string[upperIndex]);
            break;
        }
    }
}
temporaryArray.sort((a, b) => a.match(/\d+/)[0] - b.match(/\d+/)[0]).join(' ');
console.log(temporaryArray);