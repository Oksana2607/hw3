describe('init should init array list', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    const testData = [
        {numbers: [], expected: []},
        {numbers: [2], expected: [2]},
        {numbers: [-5, 15], expected: [-5, 15]},
        {numbers: [35, 14, 18, 0, 3], expected: [35, 14, 18, 0, 3]},
        {numbers: [null], expected: [null]},
        {numbers: [undefined], expected: [undefined]}
    ];

    testData.forEach((data) => {
        const {numbers, expected} = data;

        it(`should return ${expected} when numbers = [${numbers}]`, () => {
            const actual = myAList.init(numbers);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('getSize should return length of array list', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    const testData = [
        {array: [], expected: 0},
        {array: [2], expected: 1},
        {array: [5, 8], expected: 2},
        {array: [5, 8, -7, 15, -2], expected: 5},
        {array: [undefined], expected: 1},
        {array: [null], expected: 1}
    ];

    testData.forEach((data) => {
        const {array, expected} = data;

        it(`should return ${expected} when array = [${array}]`, () => {
            myAList.init(array);
            const actual = myAList.getSize();

            assert.deepEqual(actual, expected);
        });
    });
});


describe('toString should return array list as a string', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    const testData = [
        {array: [], expected: '[]'},
        {array: [2], expected: '[2]'},
        {array: [5, 8], expected: '[5,8]'},
        {array: [5, 8, -7, 15, -2], expected: '[5,8,-7,15,-2]'},
        {array: [undefined], expected: '[undefined]'},
        {array: [null], expected: '[null]'}
    ];

    testData.forEach((data) => {
        const {array, expected} = data;

        it(`should return ${expected} when array = [${array}]`, () => {
            myAList.init(array);
            const actual = myAList.toString();

            assert.deepEqual(actual, expected);
        });
    });
});

describe('push should return array with new element', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    const testData = [
        {array: [], value: 25, expected: [25]},
        {array: [2], value: null, expected: [2, null]},
        {array: [5, 8], value: 55, expected: [5, 8, 55]},
        {array: [5, 8, -7, 15, -2], value: undefined, expected: [5, 8, -7, 15, -2, undefined]},
        {array: [null], value: 0, expected: [null, 0]}
    ];

    testData.forEach((data) => {
        const {array, value, expected} = data;

        it(`should return ${expected} when array = ${array}, value = ${value}`, () => {
            myAList.init(array);
            const actual = myAList.push(value);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('pop should return removed element', () => {
    const myAList = new AList();
    const myExpectedAList = new AList();

    beforeEach(() => {
        myAList.array = [];
        myExpectedAList.array = [];
    });

    const testData = [
        {array: [], expected: 0, expectedArray: []},
        {array: [2], expected: 2, expectedArray: []},
        {array: [5, 8], expected: 8, expectedArray: [5]},
        {array: [5, 8, -7, 15, -2], expected: -2, expectedArray: [5, 8, -7, 15]},
        {array: [undefined], expected: undefined, expectedArray: []},
        {array: [null], expected: null, expectedArray: []}
    ];

    testData.forEach((data) => {
        const {array, expected, expectedArray} = data;

        it(`should return ${expected} when array = [${array}]`, () => {
            myAList.init(array);
            myExpectedAList.init(expectedArray);
            const actual = myAList.pop();

            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.array, myExpectedAList.array);
        });
    });
});

describe('shift should return removed element', () => {
    const myAList = new AList();
    const myExpectedAList = new AList();

    beforeEach(() => {
        myAList.array = [];
        myExpectedAList.array = [];
    });

    const testData = [
        {array: [], expected: 0, expectedArray: []},
        {array: [2], expected: 2, expectedArray: []},
        {array: [5, 8], expected: 5, expectedArray: [8]},
        {array: [5, 8, -7, 15, -2], expected: 5, expectedArray: [8, -7, 15, -2]},
        {array: [undefined], expected: undefined, expectedArray: []},
        {array: [null], expected: null, expectedArray: []}
    ];

    testData.forEach((data) => {
        const {array, expected, expectedArray} = data;

        it(`should return ${expected} when array = [${array}]`, () => {
            myAList.init(array);
            myExpectedAList.init(expectedArray);
            const actual = myAList.shift();

            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.array, myExpectedAList.array);
        });
    });
});

describe('unshift should return array with new element', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    const testData = [
        {array: [], value: 25, expected: [25]},
        {array: [2], value: null, expected: [null, 2]},
        {array: [5, 8], value: 55, expected: [55, 5, 8]},
        {array: [5, 8, -7, 15, -2], value: undefined, expected: [undefined, 5, 8, -7, 15, -2]},
        {array: [null], value: 0, expected: [0, null]}
    ];

    testData.forEach((data) => {
        const {array, value, expected} = data;

        it(`should return ${expected} when array = ${array}, value = ${value}`, () => {
            myAList.init(array);
            const actual = myAList.unshift(value);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('slice should return array with removed elements', () => {
    const myAList = new AList();
    const myExpectedAList = new AList();

    beforeEach(() => {
        myAList.array = [];
        myExpectedAList.array = [];
    });

    const testData = [
        {array: [], start: 0, end: 2, expected: undefined, expectedArray: []},
        {array: [2], start: 0, end: 1, expected: [2], expectedArray: [2]},
        {array: [5, 8], start: 0, end: 1, expected: [5], expectedArray: [5, 8]},
        {array: [5, 8, -7, 15, -2], start: 2, end: 4, expected: [-7, 15], expectedArray: [5, 8, -7, 15, -2]},
        {
            array: [5, 8, -7, 15, undefined],
            start: 2,
            end: 5,
            expected: [-7, 15, undefined],
            expectedArray: [5, 8, -7, 15, undefined]
        },
        {array: [5, null, -7, 15, -2], start: 0, end: 3, expected: [5, null, -7], expectedArray: [5, null, -7, 15, -2]}
    ];

    testData.forEach((data) => {
        const {array, start, end, expected, expectedArray} = data;

        it(`should return ${expected} when array = [${array}], start = ${start}, end = ${end}`, () => {
            myAList.init(array);
            myExpectedAList.init(expectedArray);
            const actual = myAList.slice(start, end);

            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.array, myExpectedAList.array);
        });
    });
});

describe('splice should return array with removed elements', () => {
    const myAList = new AList();
    const myExpectedAList = new AList();

    beforeEach(() => {
        myAList.array = [];
        myExpectedAList.array = [];
    });

    const testData = [
        {array: [], start: 0, count: 2, expected: undefined, expectedArray: []},
        {array: [2], start: 0, count: 1, expected: [2], expectedArray: []},
        {array: [5, 8], start: 0, count: 1, expected: [5], expectedArray: [8]},
        {array: [5, 8, -7, 15, -2], start: 2, count: 3, expected: [-7, 15, -2], expectedArray: [5, 8]},
        {
            array: [5, 8, -7, 15, undefined],
            start: 3,
            count: 0,
            element: 12,
            expected: [],
            expectedArray: [5, 8, -7, 12, 15, undefined]
        },
        {
            array: [5, null, -7, 15, -2],
            start: 0,
            count: 3,
            element: -10,
            expected: [5, null, -7],
            expectedArray: [-10, 15, -2]
        }
    ];

    testData.forEach((data) => {
        const {array, start, count, element, expected, expectedArray} = data;

        it(`should return ${expected} when array = [${array}], start = ${start}, count = ${count}`, () => {
            myAList.init(array);
            myExpectedAList.init(expectedArray);
            const actual = myAList.splice(start, count, element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.array, myExpectedAList.array);
        });
    });
});

describe('set should return array with replaced elements', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    const testData = [
        {array: [], index: 0, element: 5, expected: 'Enter valid index'},
        {array: [2], index: 0, element: 5, expected: [5]},
        {array: [5, 8], index: 1, element: 1, expected: [5, 1]},
        {array: [5, 8, -7, 15, -2], index: 3, element: 12, expected: [5, 8, -7, 12, -2]},
        {array: [5, 8, -7, 15, undefined], index: 4, element: 5, expected: [5, 8, -7, 15, 5]},
        {array: [5, null, -7, 15, -2], index: 1, element: -9, expected: [5, -9, -7, 15, -2]}
    ];

    testData.forEach((data) => {
        const {array, index, element, expected} = data;

        it(`should return ${expected} when array = [${array}], index = ${index}, element = ${element}`, () => {
            myAList.init(array);
            const actual = myAList.set(index, element);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('get should return element by index', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    const testData = [
        {array: [], index: 0, expected: 'Enter valid index'},
        {array: [2], index: 0, expected: 2},
        {array: [5, 8], index: 1, expected: 8},
        {array: [5, 8, -7, 15, -2], index: 3, expected: 15},
        {array: [5, 8, -7, 15, undefined], index: 4, expected: undefined},
        {array: [5, null, -7, 15, -2], index: 1, expected: null}
    ];

    testData.forEach((data) => {
        const {array, index, expected} = data;

        it(`should return ${expected} when array = [${array}], index = ${index}`, () => {
            myAList.init(array);
            const actual = myAList.get(index);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('sort should return sorted array', () => {
    const myAList = new AList();

    beforeEach(() => {
        myAList.array = [];
    });

    function comparator(first, second) {
        return second - first;
    }

    function comparator1(first, second) {
        return first - second;
    }

    const testData = [
        {array: [], callback: comparator, expected: []},
        {array: [2], callback: comparator, expected: [2]},
        {array: [8, 5], callback: comparator, expected: [8, 5]},
        {array: [8, 5], callback: comparator1, expected: [5, 8]},
        {array: [5, 8, -7, 15, -2], callback: comparator, expected: [15, 8, 5, -2, -7]},
        {array: [5, 8, -7, 15, undefined], callback: comparator1, expected: [-7, 5, 8, 15, undefined]},
        {array: [5, null, -7, 15, -2], callback: comparator, expected: [15, 5, null, -2, -7]}
    ];

    testData.forEach((data) => {
        const {array, callback, expected} = data;

        it(`should return ${expected} when array = [${array}], callback = ${callback}`, () => {
            myAList.init(array);
            const actual = myAList.sort(callback);

            assert.deepEqual(actual, expected);
        });
    });
});




