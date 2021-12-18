// ex1
"use strict";
let clientObj = {
  firstName: "moses",
  lastName: "moseson",
  age: 45,
  address: "somewhere",
  amram: {
    firstName: "amram",
    lastName: "amramson",
    age: 74,
    address: "somehow"
  }
};

//prints the object
$(() => {

  $.each(clientObj, function (index, value) {
    if (typeof (value) !== "object") {
      console.log(`${index}: ${value}`);
    } else {

      $.each(clientObj.amram, function (index, value) {
        console.log(`${index}: ${value}`);
      })
    }

  });

});


// ex2
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}
const arrayOfRandom = (size: number) => {
  let arr: number[] = new Array;
  for (let i = 0; i < size; i++) {
    arr[i] = randomNumber(100, 200);
  }
  console.log(arr);
  return arr;
}
const printArray = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    $(".object").append(arr[i]);
  }
}
let size: number = +prompt("enter a number of arrays random numbers")
let array: number[] = arrayOfRandom(size)
printArray(array);

