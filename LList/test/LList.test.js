describe('init should init linked list', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    const testData = [
        {numbers: [], expected: {next: null, value: undefined}},
        {numbers: [2], expected: {next: null, value: 2}},
        {numbers: [-5, 15], expected: {next: {next: null, value: 15}, value: -5}},
        {
            numbers: [35, 14, 18, 0, 3],
            expected: {next: {next: {next: {next: {next: null, value: 3}, value: 0}, value: 18}, value: 14}, value: 35}
        },
        {numbers: [null], expected: {next: null, value: null}},
        {numbers: [undefined], expected: {next: null, value: undefined}}
    ];

    testData.forEach(data => {
        const {numbers, expected} = data;

        it(`should return ${expected} when numbers = [${numbers}]`, () => {
            const actual = myLList.init(numbers);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('getSize should get length of linked list', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    const testData = [
        {numbers: [], expected: 1},
        {numbers: [2], expected: 1},
        {numbers: [-5, 15], expected: 2},
        {numbers: [35, 14, 18, 0, 3], expected: 5},
        {numbers: [null], expected: 1},
        {numbers: [undefined], expected: 1}
    ];

    testData.forEach(data => {
        const {numbers, expected} = data;

        it(`should return ${expected} when numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            const actual = myLList.getSize(numbers);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('toString should return linked list as a string', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    const testData = [
        {numbers: [], expected: '[undefined]'},
        {numbers: [2], expected: '[2]'},
        {numbers: [5, 8], expected: '[5,8]'},
        {numbers: [5, 8, -7, 15, -2], expected: '[5,8,-7,15,-2]'},
        {numbers: [undefined], expected: '[undefined]'},
        {numbers: [null], expected: '[null]'}
    ];

    testData.forEach((data) => {
        const {numbers, expected} = data;

        it(`should return ${expected} when numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            const actual = myLList.toString();

            assert.deepEqual(actual, expected);
        });
    });
});

describe('push should add new value to linked list', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    const testData = [
        {numbers: [], value: 5, expected: {next: {next: null, value: 5}, value: undefined}},
        {numbers: [2], value: 5, expected: {next: {next: null, value: 5}, value: 2}},
        {numbers: [5, 8], value: 15, expected: {next: {next: {next: null, value: 15}, value: 8}, value: 5}},
        {
            numbers: [5, 8, -7, 15, -2],
            value: -6,
            expected: {
                next: {
                    next: {next: {next: {next: {next: null, value: -6}, value: -2}, value: 15}, value: -7},
                    value: 8
                }, value: 5
            }
        },
        {numbers: [undefined], value: 0, expected: {next: {next: null, value: 0}, value: undefined}},
        {numbers: [null], value: undefined, expected: {next: {next: null, value: undefined}, value: null}}
    ];

    testData.forEach((data) => {
        const {numbers, value, expected} = data;

        it(`should return ${expected} when value = ${value}, numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            const actual = myLList.push(value);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('pop should return value from tail and delete it', () => {
    let myLList = new LList();
    let myExpectedLList = new LList();

    beforeEach(() => {
        myLList = new LList();
        myExpectedLList = new LList();
    });

    const testData = [
        {numbers: [], expected: undefined, expectedArray: null},
        {numbers: [2], expected: 2, expectedArray: null},
        {numbers: [5, 8], expected: 8, expectedArray: [5]},
        {numbers: [5, 8, -7, 15, -2], expected: -2, expectedArray: [5, 8, -7, 15]},
        {numbers: [undefined], expected: undefined, expectedArray: null},
        {numbers: [null], expected: null, expectedArray: null}
    ];

    testData.forEach((data) => {
        const {numbers, expected, expectedArray} = data;

        it(`should return ${expected} when numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            myExpectedLList.init(expectedArray);
            const actual = myLList.pop();

            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList.root, myExpectedLList.root);
        });
    });
});

describe('shift should return value from head and delete it', () => {
    let myLList = new LList();
    let myExpectedLList = new LList();

    beforeEach(() => {
        myLList = new LList();
        myExpectedLList = new LList();
    });

    const testData = [
        {numbers: [], expected: undefined, expectedArray: null},
        {numbers: [2], expected: 2, expectedArray: null},
        {numbers: [5, 8], expected: 5, expectedArray: [8]},
        {numbers: [5, 8, -7, 15, -2], expected: 5, expectedArray: [8, -7, 15, -2]},
        {numbers: [undefined], expected: undefined, expectedArray: null},
        {numbers: [null], expected: null, expectedArray: null}
    ];

    testData.forEach((data) => {
        const {numbers, expected, expectedArray} = data;

        it(`should return ${expected} when numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            myExpectedLList.init(expectedArray);
            const actual = myLList.shift();

            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList.root, myExpectedLList.root);
        });
    });
});

describe('unshift should add new value to head of linked list', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    const testData = [
        {numbers: [], value: 5, expected: {next: {next: null, value: undefined}, value: 5}},
        {numbers: [2], value: 5, expected: {next: {next: null, value: 2}, value: 5}},
        {numbers: [5, 8], value: 15, expected: {next: {next: {next: null, value: 8}, value: 5}, value: 15}},
        {
            numbers: [5, 8, -7, 15, -2],
            value: -6,
            expected: {
                next: {
                    next: {next: {next: {next: {next: null, value: -2}, value: 15}, value: -7}, value: 8},
                    value: 5
                }, value: -6
            }
        },
        {numbers: [undefined], value: 0, expected: {next: {next: null, value: undefined}, value: 0}},
        {numbers: [null], value: undefined, expected: {next: {next: null, value: null}, value: undefined}}
    ];

    testData.forEach((data) => {
        const {numbers, value, expected} = data;

        it(`should return ${expected} when value = ${value}, numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            const actual = myLList.unshift(value);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('slice should return array of removed elements', () => {
    let myLList = new LList();
    let myExpectedLList = new LList();

    beforeEach(() => {
        myLList = new LList();
        myExpectedLList = new LList();
    });

    const testData = [
        {numbers: [], start: 1, expected: [], expectedArray: []},
        {numbers: [2], start: 2, end: 1, expected: [], expectedArray: [2]},
        {numbers: [5, 8], start: 0, end: 0, expected: [], expectedArray: [5, 8]},
        {numbers: [5, 8], start: 0, end: 3, expected: [5, 8], expectedArray: [5, 8]},
        {numbers: [5, 8, -7, 15, -2], start: 2, end: 4, expected: [-7, 15], expectedArray: [5, 8, -7, 15, -2]},
        {numbers: [undefined], start: 0, end: 1, expected: [undefined], expectedArray: [undefined]},
        {numbers: [null], start: 3, expected: [], expectedArray: [null]}
    ];

    testData.forEach((data) => {
        const {numbers, start, end, expected, expectedArray} = data;

        it(`should return ${expected} when start = ${start}, end = ${end}, numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            myExpectedLList.init(expectedArray);
            const actual = myLList.slice(start, end);

            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList.root, myExpectedLList.root);
        });
    });
});

describe('splice should return array with removed elements', () => {
    let myLList = new LList();
    let myExpectedLList = new LList();

    beforeEach(() => {
        myLList = new LList();
        myExpectedLList = new LList();
    });

    const testData = [
        {numbers: [], start: 0, count: 2, expected: [undefined], expectedArray: null},
        {numbers: [2], start: 0, count: 1, expected: [2], expectedArray: null},
        {numbers: [5, 8], start: 1, count: 3, expected: [8], expectedArray: [5]},
        {numbers: [5, 8, -7, 15, -2], start: 2, count: 3, expected: [-7, 15, -2], expectedArray: [5, 8]},
        {
            numbers: [5, 8, -7, 15, undefined],
            start: 3,
            count: 0,
            element: 12,
            expected: [],
            expectedArray: [5, 8, -7, 12, 15, undefined]
        },
        {numbers: [5, null, -7, 15, -2], start: 4, count: 2, expected: [-2], expectedArray: [5, null, -7, 15]}
    ];

    testData.forEach((data) => {
        const {numbers, start, count, element, expected, expectedArray} = data;

        it(`should return ${expected} when start = ${start}, count = ${count}, numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            myExpectedLList.init(expectedArray);
            const actual = myLList.splice(start, count, element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList.root, myExpectedLList.root);
        });
    });
});

describe('set should change existing value to new', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    const testData = [
        {numbers: [], index: 0, element: 5, expected: {next: null, value: 5}},
        {numbers: [2], index: 1, element: 3, expected: {next: {next: null, value: 3}, value: 2}},
        {numbers: [5, 8], index: 1, element: 3, expected: {next: {next: null, value: 3}, value: 5}},
        {
            numbers: [5, 8, -7, 15, -2],
            index: 3,
            element: -8,
            expected: {next: {next: {next: {next: {next: null, value: -2}, value: -8}, value: -7}, value: 8}, value: 5}
        },
        {
            numbers: [undefined, 2, 15],
            index: 0,
            element: 45,
            expected: {next: {next: {next: null, value: 15}, value: 2}, value: 45}
        }
    ];

    testData.forEach((data) => {
        const {numbers, index, element, expected} = data;

        it(`should return ${expected} when index = ${index}, element = ${element}, numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            const actual = myLList.set(index, element);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('get should get element by index', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    const testData = [
        {numbers: [], index: 0, expected: {next: null, value: undefined}},
        {numbers: [2], index: 1, expected: undefined},
        {numbers: [5, 8], index: 1, expected: {next: null, value: 8}},
        {
            numbers: [5, 8, -7, 15, -2],
            index: 3,
            expected: {next: {next: null, value: -2}, value: 15}
        },
        {
            numbers: [undefined, 2, 15],
            index: 0,
            expected: {next: {next: {next: null, value: 15}, value: 2}, value: undefined}
        }
    ];

    testData.forEach((data) => {
        const {numbers, index, expected} = data;

        it(`should return ${expected} when index = ${index}, numbers = [${numbers}]`, () => {
            myLList.init(numbers);
            const actual = myLList.get(index);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('sort should sort existing linked list', () => {
    let myLList = new LList();

    beforeEach(() => {
        myLList = new LList();
    });

    function comparator(first, second) {
        return second - first;
    }

    const testData = [
        {numbers: [], callback: comparator, expected: {next: null, value: undefined}},
        {numbers: [2], callback: comparator, expected: {next: null, value: 2}},
        {numbers: [5, 8], callback: comparator, expected: {next: {next: null, value: 5}, value: 8}},
        {
            numbers: [5, 8, -7, 15, -2],
            callback: comparator,
            expected: {next: {next: {next: {next: {next: null, value: -7}, value: -2}, value: 5}, value: 8}, value: 15}
        },
        {
            numbers: [undefined, 2, 15],
            callback: comparator,
            expected: {next: {next: {next: null, value: 2}, value: 15}, value: undefined}
        }
    ];

    testData.forEach((data) => {
        const {numbers, callback, expected} = data;

        it(`should return ${expected} when numbers = [${numbers}], callback = [${callback}]`, () => {
            myLList.init(numbers);
            const actual = myLList.sort(callback);
            console.log('actual', actual);
            assert.deepEqual(actual, expected);
        });
    });
});
