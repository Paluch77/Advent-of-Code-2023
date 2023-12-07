import str from "./input.js";


const days = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const getDigit = (el, reverse = false) => {
    let digit = "";
    let word = "";

    for (let i = 0; i < el.length; i++) {
        if (digit.length > 0) {
            break;
        }

        if (Number(el[i])) {
            digit = el[i];
            break;
        } else {
            word += el[i];
            for (let j = 0; j < days.length; j++) {
                if (word.split("").reverse().join("").includes(days[j])) {
                    digit += days.indexOf(days[j]) + 1;
                    break;
                } else if (word.includes(days[j])) {
                    digit += days.indexOf(days[j]) + 1;
                }
            }
        }
    }
    return digit;
};

const getStarsPartTwo = (data) => {
    return data
        .split("\n")
        .map((el) => {
            let first = getDigit(el.split(""));
            let last = getDigit(el.split("").reverse());
            return first + last;
        })
        .reduce((acc, val, index) => {
            const numbers = val.split("").filter(Number);

            if (numbers.length === 1) {
                acc += Number(numbers[0] + numbers[0]);
            } else {
                acc += Number(numbers[0] + numbers[numbers.length - 1]);
            }

            return acc;
        }, 0);
};

console.time("time");
console.log(getStarsPartTwo(str));
console.timeEnd("time");
