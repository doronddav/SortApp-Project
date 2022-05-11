let array = [];
const tmpArray = [];
let firstGroupArray = [];
let secondGroupArray = [];
let thirdGroupArray = [];
let chosenNum = document.getElementById("userNum");
let userNumBtn = document.getElementById("userNumBtn");
let inputNumber = document.getElementById("numbersforsort");
let displayValue = document.querySelector(".displaynumbers");
let BtnSort = document.getElementById("BtnSort");
let BtnAdd = document.querySelector(".BtnAdd");
let displayArray = document.querySelector(".display-array");
let displaySort = document.querySelector(".display-sort");
let groupSortBtn = document.querySelector(".groupSortBtn");
let BtnClear = document.querySelector(".Btn-clear");
let displayFirstGroup = document.querySelector(".display-first-groupt");
let displaySecondGroup = document.querySelector(".display-second-groupt");
let displayThirdGroup = document.querySelector(".display-third-sort");

let bubbleSort = () => {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
};

let stringToNum = function (chosenNumInput) {
  let chosenArray = chosenNumInput.split(" ");
  for (let i = 0; i < chosenArray.length; i++) {
    array.push(parseInt(chosenArray[i]));
  }
};

let groupsSort = function () {
  bubbleSort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 30) {
      firstGroupArray.push(array[i]);
    } else if (array[i] <= 60 && array[i] >= 31) {
      secondGroupArray.push(array[i]);
    } else {
      thirdGroupArray.push(array[i]);
    }
  }
};

let makeRandomNumbers = function () {
  for (let i = 0; i < inputNumber.value; i++) {
    let randonNumber = Math.floor(Math.random() * 100) + 1;
    array.push(randonNumber);
  }
};
let printArray = function (displayObject, titleString, array) {
  displayObject.textContent = `${titleString}: ${array.slice(
    0,
    20
  )}\n ${array.slice(20, 50)}\n  ${array.slice(50, 80)}\n  ${array.slice(
    80,
    110
  )}\n  ${array.slice(110, 140)}\n`;
};

inputNumber.addEventListener("input", function (event) {
  num = inputNumber.value;
  displayValue.textContent = `${num}`;
});

BtnAdd.addEventListener("click", function (event) {
  makeRandomNumbers();
  printArray(displayArray, "Array before sorting", array);
});

BtnSort.addEventListener("click", () => {
  bubbleSort();
  printArray(displaySort, "Array after sorting", array);
});

groupSortBtn.addEventListener("click", function (event) {
  groupsSort();
  printArray(displayFirstGroup, "Numbers From 0-30", firstGroupArray);
  printArray(displaySecondGroup, "Numbers From 31-60", secondGroupArray);
  printArray(displayThirdGroup, "Numbers From 61-100", thirdGroupArray);
});

userNumBtn.addEventListener("click", function (event) {
  stringToNum(chosenNum.value);
  printArray(displayArray, "Array before sorting", array);
  console.log(array);
});
BtnClear.addEventListener("click", function (event) {
  array = [];
  firstGroupArray = [];
  secondGroupArray = [];
  thirdGroupArray = [];
  displayArray.textContent = array;
  displaySort.textContent = array;
  displayFirstGroup.textContent = array;
  displaySecondGroup.textContent = array;
  displayThirdGroup.textContent = array;
});
