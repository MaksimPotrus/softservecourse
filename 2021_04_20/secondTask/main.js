const INSTANT_ITEM = +prompt();
console.log(findPartMaxProduct(INSTANT_ITEM));

function findPartMaxProduct(INSTANT_ITEM) {
    const DIVISION = allPossibleCombinations(INSTANT_ITEM);
    const [partsWithProduct, maxProduct] = getMaxProduct(DIVISION);
    const partMaxProd = partsWithProduct.filter(item => item[0] === maxProduct).map(item => item[1]).reverse();
    partMaxProd.push(maxProduct);
    return partMaxProd;
  }
  
  function allPossibleCombinations(INSTANT_ITEM, enough = INSTANT_ITEM) {
    let itemArray = [];
    for (let index = 1; index <= Math.min(INSTANT_ITEM, enough); index++) {
      let previousItem = allPossibleCombinations(INSTANT_ITEM - index, index);
      if (previousItem.length !== 0) {
        previousItem.forEach(element=> item.push(Array.from([index, element]).flat(INSTANT_ITEM)));
      } else {itemArray.push([index]);}
    }
    return itemArray;
  }
  
  function getMaxProduct(DIVISION) {
    let maxProduct = 0;
    partsWithProduct = DIVISION.map(element => {
      let curProduct = element.reduce((multi, cur) => multi * cur, 1);
      if (curProduct > maxProduct) {
        maxProduct = curProduct;
      }
      return Array.from([curProduct, element]);
    })
    return [partsWithProduct, maxProduct];
  }