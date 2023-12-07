import str from "./input.js";

function extractNumbersAsString(inputString) {
    const regex = /\d+/g;
    const matches = inputString.match(regex);

    if (!matches) {
        return [];
    }
    return matches;
}

function dotsByStringLength(inputString) {
    const length = inputString.length;
    return ".".repeat(length);
}

const getSum = (str) => {
    const lines = str.split("\n");
    const lineLength = lines[0].length;

    return lines.reduce((acc, line, lineIndex) => {
        let numbersInLine = extractNumbersAsString(line);
        let testIndex = line;
        let numberIndexes = numbersInLine.map((el) => {
            let lineIndex = testIndex.indexOf(el);
            testIndex = testIndex.replace(el, dotsByStringLength(el));
            return lineIndex;
        });

        numbersInLine.forEach((number, index) => {
            let numberLength = number.length;
            let numberExactIndexes = Array.from(
                { length: numberLength },
                (v, i) => i,
            ).map((el) => {
                return numberIndexes[index] + el;
            });
            if (Number(numberExactIndexes[0]) > 0) {
                numberExactIndexes.unshift(numberExactIndexes[0] - 1);
            }
            if (
                Number(numberExactIndexes[numberExactIndexes.length - 1]) <
                lineLength - 1
            ) {
                numberExactIndexes.push(
                    numberExactIndexes[numberExactIndexes.length - 1] + 1,
                );
            }

            const symbolRegex = /[^a-zA-Z0-9.]/g;
            for (let i = 0; i < numberExactIndexes.length; i++) {
                if (lines[lineIndex] !== undefined) {
                    if (lines[lineIndex][numberExactIndexes[i]].match(symbolRegex)) {
                        acc += Number(number);
                        break;
                    }
                }
                if (lines[lineIndex + 1] !== undefined) {
                    if (lines[lineIndex + 1][numberExactIndexes[i]].match(symbolRegex)) {
                        acc += Number(number);
                        break;
                    }
                }
                if (lines[lineIndex - 1] !== undefined) {
                    if (lines[lineIndex - 1][numberExactIndexes[i]].match(symbolRegex)) {
                        acc += Number(number);
                        break;
                    }
                }
            }
        });
        return acc;
    }, 0);
};

console.log(getSum(str));
