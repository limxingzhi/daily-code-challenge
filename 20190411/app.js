// There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways

// Entry #008 11042019

// strength is the highest amount of steps the user can climb
var strength = 3;
var n = 4;

function countSteps(input, strength = 2, steps = 0) {
  input -= steps;

  if (input <= strength) {
    return input;
  } else if (input == 0) {
    return 1;
  } else {
    var output = 0;
    for (var i = 0; i < strength; i++) {
      output += countSteps(input, strength, i + 1);
    }
    return output;
    // return countSteps(input, strength, 1) + countSteps(input, strength, 2);
  }
}

console.log(countSteps(n, strength));
