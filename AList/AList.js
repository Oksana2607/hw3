function AList() {
    this.array = [];

    this.init = numbers => {
        for (let i = 0; i < numbers.length; i++) {
            this.array[this.array.length] = numbers[i];
        }

        return this.array;
    };

    this.getSize = () => {
        let length = 0;

        this.array.forEach(element => {
            length++;
        });

        return length;
    };

    this.toString = () => {
        let a = '[';
        let b = ']';
        let result = '';

        for (let i = 0; i < this.array.length; i++) {
            result += `${this.array[i]},`;
        }

        return a + result.slice(0, -1) + b;
    };

    this.push = value => {
        this.array[this.array.length] = value;

        return this.array;
    };

    this.pop = () => {
        if (!this.array.length) {
            return 0;
        }

        let popElement = this.array[this.array.length - 1];

        this.array.length = this.array.length - 1;

        return popElement;
    };

    this.shift = () => {
        if (!this.array.length) {
            return 0;
        }

        let shiftElement = this.array[0];

        for (let i = 0; i < this.array.length; i++) {
            this.array[i] = this.array[i + 1];
        }

        this.array.length = this.array.length - 1;

        return shiftElement;
    };

    this.unshift = value => {
        for (let i = this.array.length - 1; i >= 0; i--) {
            this.array[i + 1] = this.array[i];
        }

        this.array[0] = value;

        return this.array;
    };

    this.slice = (start, end) => {
        if (!this.array.length) {
            return;
        }

        if (start > this.array.length) {
            return [];
        }

        let resultArray = [];

        for (let i = start; i < end; i++) {
            resultArray[resultArray.length] = this.array[i];
        }

        return resultArray;
    };

    this.splice = (start, count, element) => {
        if (!this.array.length) {
            return;
        }

        let resultArray = [];

        for (let i = start; i < (start + count); i++) {
            resultArray[resultArray.length] = this.array[i];
            this.array[i] = this.array[i + count];
        }

        this.array.length = this.array.length - count;

        if (element) {
            for (let i = this.array.length; i > start; i--) {
                this.array[i] = this.array[i - 1];
            }

            this.array[start] = element;
        }

        return resultArray;
    };

    this.sort = callback => {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - 1; j++) {
                let result = callback(this.array[j], this.array[j + 1]);
                let temp = 0;

                if (result > 0) {
                    temp = this.array[j + 1];
                    this.array[j + 1] = this.array[j];
                    this.array[j] = temp;
                }
            }
        }

        return this.array;
    }

    this.set = (index, element) => {
        if (index > this.array.length - 1) {
            return 'Enter valid index';
        }

        for (let i = 0; i < this.array.length; i++) {
            if (i === index) {
                this.array[i] = element;
            }
        }

        return this.array;
    };

    this.get = index => {
        if (index > this.array.length - 1) {
            return 'Enter valid index';
        }

        let findElement = 0;

        for (let i = 0; i < this.array.length; i++) {
            if (i === index) {
                findElement = this.array[i];
            }
        }

        return findElement;
    };
}

function comparator(first, second) {
    return second - first;
}




