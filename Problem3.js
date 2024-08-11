

// rest operator
function myArray(...args) {

  // spread operator
  array.push(...args);
  return array;
}

const array = [1, 8, 9, 5];
console.log(myArray(4, 5, 6));
