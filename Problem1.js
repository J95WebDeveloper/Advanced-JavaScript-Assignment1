const map = new Map([
  [0, { name: "Sonny" }],
  [1, { name: "Elon" }],
  [2, { name: "Jay" }],
  [3, { name: "Deepak" }],
]);

//Add key-value pairs to the Map
console.log(map.set(4, { name: "Sanjay" }));


// check if a specific key exists
console.log(map.has(0));


// Retrieve the value associated with a given key
console.log(map.get(2));


// iterate through all key-value pairs
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
