// Grading problem from https://www.hackerrank.com/challenges/grading/problem

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// For example, 84 will be rounded to 85 but 29 will not be rounded because the rounding would result in a number that is less than .

// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

// Entry #006 07042019

'use strict';

var input = [73, 67, 38, 33];

function roundOffGrade(inputArray, outputArray = []) {

  // Check if inputArray is empty
  if (inputArray.length <= 0) {
    return outputArray;
  }

  const currentGrade = inputArray.shift();

  // Check if current grade is fail
  if (currentGrade < 38) {
    outputArray.push(currentGrade);
    return roundOffGrade(inputArray, outputArray);
  }

  // round up scenario VS no round up scenario (Math.round only rounds off to integers)
  // divide by 5 (/10*2) because
  // 1. dividing by 10 makes it into decimal place, thus making the Math.round works
  // 2. multiple the result by 2 so that it is rounded off to the nearest 5
  (Math.round(currentGrade / 5) > currentGrade / 5) ? outputArray.push(Math.ceil(currentGrade / 5) * 5) : outputArray.push(currentGrade);

  return roundOffGrade(inputArray, outputArray);
}

console.log(roundOffGrade(input));
