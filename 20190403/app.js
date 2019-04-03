// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Entry 03042019 #002

var input1 = [10, 15, 3, 7];
var input2 = 22;
var output = false;

var input1Length = input1.length;

function recursive(input1, input2, output) {
  if (input1Length == 0 || output == true) {
    return output;
  } else {
    --input1Length;
    for (i = 0; i < input1.length; i++) {

      if (input1[input1Length] != input1[i] && (input1[input1Length] + input1[i]) == input2) {
        output = true;
        return true;
      }
    }
    recursive(input1, input2, output);
    return output;
  }
}

console.log(recursive(input1, input2, output));
