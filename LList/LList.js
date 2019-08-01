function LList() {
    this.root = null;
    this.next = null;
    this.length = 0;

    this.init = numbers => {
        if (!numbers) {
            return;
        }

        if (!this.root) {
            this.root = new Entry(numbers[0], null);
        }

        let current = this.root;
        let e = 0;

        for (let i = 1; i < numbers.length; i++) {
            e = new Entry(numbers[i], null);
            current.next = e;
            current = current.next;
        }

        return this.root;
    };

    this.getSize = () => {
        if (!this.root) {
            return 0;
        }

        let counter = 0;
        let current = this.root;

        while (current !== null) {
            counter++;
            current = current.next;
        }

        return counter;
    };

    this.toString = () => {
        if (!this.root) {
            return 0;
        }

        let str = '';
        let a = '[';
        let b = ']';
        let current = this.root;

        while (current !== null) {

            str += `${current.value},`;
            current = current.next;
        }

        return a + str.slice(0, -1) + b;
    };

    this.push = value => {
        let e = new Entry(value, null);

        if (!this.root) {
            this.root = e;

            return this.root;
        }

        let tail = this.root;

        while (tail.next !== null) {
            tail = tail.next;
        }

        tail.next = e;

        return this.root;
    };

    this.pop = () => {
        if (!this.root) {
            return null;
        }

        if (!this.root.next) {
            let result = this.root.value;

            this.root = null;

            return result;
        }

        let previous = this.root;
        let tail = this.root.next;

        while (tail.next) {
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;

        return tail.value;
    };

    this.shift = () => {
        let shiftElement = this.root;

        if (!this.root) {
            return;
        }

        this.root = this.root.next;

        return shiftElement.value;
    };

    this.unshift = value => {
        let e = new Entry(value);

        e.next = this.root;
        this.root = e;
        this.length++;

        return this.root;
    };

    this.slice = (start, end) => {
        if (start > this.getSize()) {
            return [];
        }

        let current = this.root;
        let index = 0;
        let result = [];

        while (current) {
            if (index >= start && index < end) {
                result[result.length] = current.value;
            }
            index++;

            if (index < end) {
                current = current.next;
            } else {
                break;
            }
        }

        return result;
    };

    this.splice = (index, count, element) => {
        let removed = [];
        let current = this.root;
        let previous = null;
        let j = 0;

        if (index > this.getSize()) {
            return [];
        }

        while (current) {
            if (index <= j && j < index + count) {
                removed[removed.length] = current.value;

                if (current == this.root) {
                    current = current.next;
                    this.root = current;
                } else {
                    previous.next = current.next;
                    current = current.next;
                }
            } else {
                previous = current;
                current = current.next;
            }
            j++;
        }

        if (element) {
            let i = 0;
            let current = this.root;
            let previous = null;

            while (i <= index) {
                if (i === index) {
                    let e = new Entry(element, null);
                    e.next = current;

                    if (current == this.root) {
                        this.root = e;
                    } else {
                        previous.next = e;
                    }
                    break;
                }
                previous = current;
                current = current.next;
                i++;
            }
        }

        return removed;
    };


    this.set = (index, element) => {
        let e = new Entry(element, null);

        if (index >= this.getSize()) {
            this.root.next = e;
        }

        if (!this.root) {
            this.root = e;

            return;
        }

        let oldElementValue = this.get(index);

        oldElementValue.value = element;

        return this.root;
    };


    this.get = index => {
        if (index > this.getSize()) {
            return;
        }

        let counter = 0;
        var current = this.root;

        while (current !== null) {
            if (counter === index) {
                return current;
            }
            counter++;
            current = current.next;
        }
    };

    this.sort = callback => {
        let current = this.root;
        for (let i = 0; i < this.getSize(); i++) {
            for (let j = 0; j < this.getSize() - 1; j++) {
                let result = callback(current.value, current.next.value);
                let temp = 0;

                if (result > 0) {
                    temp = current.next.value;
                    current.next.value = current.value;
                    current.value = temp;
                }

                if (current.next) {
                    current = current.next;
                } else {
                    break;
                }
            }
            current = this.root;
        }
        return this.root;
    }
}

function Entry(value, next) {
    this.value = value;
    this.next = next;
}

function comparator(first, second) {
    return second - first;
}

