// Taken from reddit, /r/dailyprogrammer 2019-2-11 Challenge #375
// Take a number, add one to each of the digits.
// e.g. 998 becomes 10109

// Entry 02042019 #001

var input = 998;
var output = '';

var inputLength = input.toString().length;

function recursive(input, output) {
  if (inputLength == 0) {
    return output;
  } else {
    --inputLength;
    output = (parseInt(input.toString()[inputLength]) + 1) + output;
    return output = recursive(input, output);
  }
}

console.log(recursive(input, output));
