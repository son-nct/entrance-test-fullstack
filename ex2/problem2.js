function getElementFromInput() {
  let arr = [];

  let size = prompt("Input size of array: ");

  for (let i = 0; i < parseInt(size); i++) {
    arr.push(prompt(`Enter element ${i + 1}`));
  }

  return arr;
}

function alternatingSums(inputArray) {
  let size = parseInt(inputArray.length);

  let sumOfTeam1 = parseInt(inputArray[0]);
  let sumOfTeam2 = parseInt(inputArray[1]);

  for (let i = 2; i < size; i += 2) {
    sumOfTeam1 += parseInt(inputArray[i]);
  }

  for (let i = 3; i < size; i += 2) {
    sumOfTeam2 += parseInt(inputArray[i]);
  }

  let arr = [];

  arr.push(sumOfTeam1);
  arr.push(sumOfTeam2);

  return arr;
}

let inputArray = getElementFromInput();

let result = alternatingSums(inputArray);

console.log(`Result is : ${result}`);
