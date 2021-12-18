// ex1
"use strict";
var clientObj = {
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
$(function() {
    $.each(clientObj, function(index, value) {
        if (typeof(value) !== "object") {
            console.log("".concat(index, ": ").concat(value));
        } else {
            $.each(clientObj.amram, function(index, value) {
                console.log("".concat(index, ": ").concat(value));
            });
        }
    });
});
// ex2
var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var arrayOfRandom = function(size) {
    var arr = new Array;
    for (var i = 0; i < size; i++) {
        arr[i] = randomNumber(100, 200);
    }
    console.log(arr);
    return arr;
};
var printArray = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        $(".object").append(arr[i]);
    }
};
var size = +prompt("enter a number of arrays random numbers");
var array = arrayOfRandom(size);
printArray(array);

// ex3