class Hex {
    constructor(num) { this.number = num; }
    static parse(str) { return +parseInt(str, 16); }
    set number(num) {
        if (num < 0 || isNaN(+num)) {
            return false;
        }
        this._number = num;
    }
    get number() { return this._number; }
    toString() { return `0x${this.number.toString(16).toUpperCase()}`; }
    toJSON() { return this.toString(); }
    valueOf() { return this.number; }
    plus(num) {
        const sum = new Hex(this.number + num);
        return sum;
    }
    minus(num) {
        const difference = new Hex(this.number - num);
        return difference;
    }
}

const FF = new Hex(255);
console.log(`${FF.number} + 1 = ${FF + 1}`);
console.log(`${FF.number}.toString() = ${FF.toString()}`);
console.log(`${FF.number}.toJSON() = ${FF.toJSON()}`);
console.log(`${FF.number}.valueOf() = ${FF.valueOf()}`);
console.log(`${FF.number}.minus(1).toString() = ${FF.minus(1).toString()}`);
console.log(`${FF.number}.minus(FF).valueOf() = ${FF.minus(FF).valueOf()}`);
console.log(`${new Hex(10).number}.plus(5).toString() = ${new Hex(10).plus(5).toString()}`);
console.log(`Hex.parse("FF") = ${Hex.parse("FF")}`);
console.log(`Hex.parse("0xFF") = ${Hex.parse("0xFF")}`);