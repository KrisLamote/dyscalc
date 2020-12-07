/* eslint-disable no-undef */
import { range, pickOne, pickSome } from "./helpers";

describe("range", () => {
    it("returns an array with the range of numbers between start and end (inclusive)", () => {
        expect(range(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
    });

    it("returns an array with the start index matching the first parameter", () => {
        expect(range(23, 50)[0]).toEqual(23);
    });

    it("returns an array with the last index matching the second parameter", () => {
        const results = range(23, 50);

        expect(results[results.length - 1]).toEqual(50);
    });

    it("handles a negative start", () => {
        expect(range(-3, 2)).toEqual([-3, -2, -1, 0, 1, 2]);
    });
});

describe("pickOne", () => {
    it("returns undefined when given an empty array", () => {
        expect(pickOne([])).toEqual(undefined);
    });

    it("returns an element in the array randomly", () => {
        const array = ["this", "that", "those"];

        // Mocking Math.Random so we can
        // determine proper "random" selections
        const mockMath = Object.create(global.Math);

        mockMath.random = () => 0.32;
        global.Math = mockMath;

        expect(pickOne(array)).toEqual("this");

        mockMath.random = () => 0.65;
        global.Math = mockMath;

        expect(pickOne(array)).toEqual("that");

        mockMath.random = () => 0.99;
        global.Math = mockMath;

        expect(pickOne(array)).toEqual("those");
    });
});

describe("pickSome", () => {
    it("returns the number of elements in array when requested", () => {
        const array = ["this", "that", "those", "these"];

        [1, 2, 3, 4].forEach((number) =>
            expect(pickSome(array, number).length).toEqual(number)
        );
    });

    it("never returns duplicate elements in the results", () => {
        const array = ["this", "that", "those", "these"];

        const results = pickSome(array, 3);
        const uniqueResults = [...new Set(results)];

        expect(results).toEqual(uniqueResults);
    });
});
