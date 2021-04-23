const FIRST = [25, 25, 50];
const SECOND = [25, 100];
const THIRD = [25, 25, 50, 50, 100];
const FOURTH = [25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100];

console.log(`${FIRST} - ${thirdTask(FIRST)}`);
console.log(`${SECOND} - ${thirdTask(SECOND)}`);
console.log(`${THIRD} - ${thirdTask(THIRD)}`);
console.log(`${FOURTH} - ${thirdTask(FOURTH)}`);

function thirdTask(element) {
    let [banknote25, banknote50] = [0, 0];
    const isSold = element.every(item => {
      switch (item) {
        case 25:{
          banknote25++;
          break;
        }
        case 50:
          {
          banknote25--;
          banknote50++;
          break;
          }
        case 100:{
          banknote25--;
          (banknote50 > 0) ? banknote50-- : banknote25 -= 2;
        }
      }
      return (banknote25 < 0 || banknote50 < 0) ? false : true;
    })
    return isSold ? 'YES' : 'NO';
  }