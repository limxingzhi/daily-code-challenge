// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Entry 04042019 #003

var input = [1, 2, 3, 4, 5];
var output = [];

var inputLength = input.length;

function recursive(input, output) {
  if (inputLength == 0) {
    return output;
  } else {
    inputLength--;
    var outputValue = 1;
    for (var i = 0; i < input.length; i++) {
      if (input[i] != input[inputLength]) {
        outputValue *= input[i];
      }
    }
    output[inputLength] = outputValue;
    return recursive(input, output);
  }
}

console.log(recursive(input, output));
