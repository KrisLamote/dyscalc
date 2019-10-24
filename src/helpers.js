// generate a range based on start & stop params ( range(2, 7) => [2, 3, 4, 5, 6, 7] )
export const range = (start, end) => {
    return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
};

// pickOne(arr): returns a random element from the provided array
export const pickOne = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * pickSome(arr, amount)
 * returns amount random elements from the provided array
 * without duplicates
 */
export const pickSome = (arr, amount) => {
    const picked = [];
    for (let i = 0; i < amount; i += 1) {
        const idx = Math.floor(Math.random() * arr.length);
        const deleted = arr.splice(idx, 1);
        picked.push(deleted[0]);
    }

    return picked;
};
