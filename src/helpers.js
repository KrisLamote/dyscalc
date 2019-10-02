// generate a range based on start & stop params ( range(2, 7) => [2, 3, 4, 5, 6, 7] )
export const range = (start, stop) => {
  let rangeArr = [];
  for (let i = start; i < stop++; i++) {
    rangeArr.push(start++);
  }
  return range;
};

// pickOne(arr): returns a random element from the provided array
export const pickOne = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * pickSome(arr, amount)
 * returns amount random elements from the provided array
 * without duplicates
 */
export const pickSome = (arr, amount) => {
  const picked = [];
  for (let i = 0; i < amount; i++) {
    const idx = Math.floor(Math.random() * arr.length);
    const elements = arr.splice(idx, 1);
    picked.push(elements[0]);
  }

  return picked;
};
