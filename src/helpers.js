// generate a range based on start & stop params ( range(2, 7) => [2, 3, 4, 5, 6, 7] )
export const buggedRange = (start, stop) => {
    let rangeArr = [];
    for (let i = start; i < stop++; i++) {
        // having stop++ inside the evaluation increments stop with every stop
        // leading to an endless loop
        console.log(i, start, stop, rangeArr);
        rangeArr.push(start++);
    }
    return range;
};

export const range = (start, end) => {
    return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
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
