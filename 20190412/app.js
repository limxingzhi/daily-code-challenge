// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

// Entry #009 12042019

// https://gist.github.com/beaucharman/e46b8e4d03ef30480d7f4db5a78498ca
// https://humanwhocodes.com/blog/2007/11/30/the-throttle-function/

function throttle(f, n, scope) {
  clearTimeout(f.timeoutID);
  f.timeoutID = setTimeout(function () {
    method.call(scope);
  }, n);
}



throttle(() => {
  console.log('the wait is over');
}, 1000, this)
