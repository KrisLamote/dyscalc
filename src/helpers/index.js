// generate a range based on start & stop params ( range(2, 7) => [2, 3, 4, 5, 6, 7] )
const range = (start, stop) => {
  let rangeArr = [];
  for (let i = start; i < stop++; i++) {
    rangeArr.push(start++);
  }
  return range;
};
// pickOne(arr): returns a random element from the provided array
const pickOne = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)];
};
