let matrix = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1]
];

console.log(matrix);
switch (manuallyArrayInput(matrix)) {
  case -1:
    alert("The board is not yet finished", '');
    break;
  case 1:
    alert("X won", '');
    break;
  case 2:
    alert("O won", '');
    break;
}

function manuallyArrayInput(matrix) {
  for (let index = 0; index < 9; index++) {
    let row = +prompt("Enter row:", '');
    let column = +prompt("Enter column:", '');
    matrix[row][column] = +prompt("Enter element:", '');
    let isRow = row < 0 || row > 2;
    let isColumn = column < 0 || column > 2;
    let isItem = matrix[row][column] < 1 || matrix[row][column] > 2;
    if(isRow || isColumn || isItem) {
      manuallyArrayInput(matrix);
    }
    if (checkInWin(matrix) != -1) {
      return checkInWin(matrix);
    }
  }
}

function checkInWin(matrix) {
  let resultWin = 0;
  if (checkInLine(matrix) != undefined) {
    resultWin = checkInLine(matrix);
  } if (checkInColumn(matrix) != undefined) {
    resultWin = checkInColumn(matrix);
  } if (horizontallyUpLToDownR(matrix) != undefined) {
    resultWin = horizontallyUpLToDownR(matrix);
  } if (horizontallyUpLToDownR(matrix) != undefined) {
    resultWin = horizontallyUpRToDownL(matrix);
  }
  return resultWin;
}

function checkInLine(matrix) {
  for (var j = 0; j < 3; j++) {
    if (matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j]) {
      if (matrix[0][j] == 1 || matrix[0][j] == 2)
        return matrix[0][j];
    }
  }
}

function checkInColumn(matrix) {
  for (var j = 0; j < 3; j++) {
    if (matrix[j][0] == matrix[j][1] && matrix[j][1] == matrix[j][2]) {
      return matrix[j][0];
    }
  }
}

function horizontallyUpLToDownR(matrix) {
  if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
    return matrix[0][0];
  }
}

function horizontallyUpRToDownL(matrix) {
  if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
    return matrix[1][1];
  }
}