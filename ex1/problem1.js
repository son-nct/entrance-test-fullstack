function getElementFromInput() {
  let arr = [];

  let size = prompt("Input size of array: ");

  for (let i = 0; i < parseInt(size); i++) {
    arr.push(prompt(`Enter element ${i + 1}`));
  }

  return arr;
}

function adjacentElementsProduct(inputArray) {
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let temp = parseInt(inputArray[i]) * parseInt(inputArray[i + 1]);
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

let inputArray = getElementFromInput();

let max = adjacentElementsProduct(inputArray);

console.log(`The pair of two adjacent numbers whose maximum product is ${max}`);
