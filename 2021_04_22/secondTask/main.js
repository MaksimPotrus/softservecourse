class Dictionary {
  #definition;
  constructor() {
    this.#definition = {};
  }
  newEntry(key, value) {
    (key && value) ? this.#definition[key] = value : console.log('Invalid input');
  }
  look(key) {
    return this.#definition[key] || `Can't find an entry for a ${key}`;
  }
}
let d = new Dictionary();
d.newEntry("Apple", "Fruit growing on trees");
console.log(d.look("Apple"));
console.log(d.look("Banana"));