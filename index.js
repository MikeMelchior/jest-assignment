const capitalize = (string) => {
    let newStr = string.split('');
    newStr[0] = newStr[0].toUpperCase();
    return newStr.join('');
};

const reverseString = (string) => {
    let newStr = string.split('');
    let result = [];
    for (let letter of newStr) result.unshift(letter);
    return result.join('');
};

const calculator = {
    add: (x, y) => {
        return x + y;
    },
    subtract: (x, y) => {
        return x - y;
    },
    multiply: (x, y) => {
        return x * y;
    },
    divide: (x, y) => {
        return x / y;
    }
}

const caesarCipher = (string, shiftFactor) => {
    if (shiftFactor < 1 || shiftFactor > 25) return 'Enter a number between 1 and 25';
    const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let result = ''

    let checkIndex = (index) => {
        if (index < 0) index += 26;
        else if (index > 25) index -=26
        return index;
    }

    for (let letter of string) {
        let lowIndex = lowerLetters.indexOf(letter);
        let highIndex = upperLetters.indexOf(letter);

        if (lowIndex != -1) {
            let index = lowIndex + shiftFactor;
            result += lowerLetters[checkIndex(index)];
        }
        else if (highIndex != -1) {
            let index = highIndex + shiftFactor;
            result += upperLetters[checkIndex(index)]
        }
        else result+= letter;
    }
    return result
}

const analyzeArray = (arr) => {
    let obj = {};
    for (let item of arr) if (typeof item != 'number') return 'Error, array must contain only numbers'

    let findAverage = (arr) => {
        let result = 0;
        for (let num of arr) {
            result += num;
        }
        return Math.floor(result / arr.length);
    }

    let findMin = (arr) => {
        let result;
        for (let num of arr) {
            if (!result || num < result) result = num;
        }
        return result;
    }

    let findMax = (arr) => {
        let result; 
        for (let num of arr) {
            if (!result || num > result) result = num;
        };
        return result;
    }

    // avg, min, max, len

    obj.average = findAverage(arr);
    obj.min = findMin(arr);
    obj.max = findMax(arr);
    obj.length = arr.length;

    return obj 
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}