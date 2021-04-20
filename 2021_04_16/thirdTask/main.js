let audiencesQuanity = +prompt("Enter audiences quanity:", "");
let necessaryСhairs = +prompt("Enter necessary chairs quanity:", "");
console.log(inputData(audiencesQuanity, necessaryСhairs));

function inputData(audiencesQuanity, necessaryСhairs) {
  let temporaryArray = [];
  let guestsQuanity, chairsQuanity;
  for (let index = 0, indexForOutput = 1; index < audiencesQuanity; index++, indexForOutput++) {
    while (true) {
      guestsQuanity = +prompt("Enter guests quanity in " + indexForOutput + " room :", "");
      chairsQuanity = +prompt("Enter chairs quanity in " + indexForOutput + " room :", "");
      temporaryArray[index] = chairsQuanity - guestsQuanity;
      if (guestsQuanity <= chairsQuanity) {
        break;
      }
    };
  }
  console.log(temporaryArray);
  let counterArray = [];
  for (let index = 0; index < audiencesQuanity; index++) {
    counterArray[index] = 0;
    while (necessaryСhairs > 0 && temporaryArray[index] > 0) {
      temporaryArray[index]--;
      necessaryСhairs--;
      counterArray[index]+=counterArray[index];
    };
  }
  console.log(temporaryArray);
  return counterArray;
}

function getFreeChairsInRoom(temporaryArray, necessaryСhairs, audiencesQuanity) {
  
}