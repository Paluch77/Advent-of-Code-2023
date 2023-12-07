import str from "./input.js";

const getSumOfGems = (str, r, g, b) => {
    const cuttedId = str.split("\n").map((line) => {
        return line.split(":");
    });
    const pairs = {};

    cuttedId.forEach((el) => {
        let values = [];
        el[1].split(";").forEach((elem) => {
            values.push(elem);
        });
        pairs[el[0].split(" ")[1]] = values;
    });

    let converted = {};

    Object.values(pairs).forEach((el, index) => {
        el.forEach((game, pairIndex) => {
            game.split(",").forEach((val) => {
                const eachGem = val.split(" ").filter((k) => {
                    return k.length > 0;
                });
                if (converted[index + 1]) {
                    converted[index + 1][eachGem[1]] <= Number(eachGem[0]) ||
                    converted[index + 1][eachGem[1]] === undefined
                        ? (converted[index + 1][eachGem[1]] = eachGem[0])
                        : null;
                } else {
                    converted[index + 1] = { [eachGem[1]]: eachGem[0] };
                }
            });
        });
    });
    return converted;
};
const highestValues = getSumOfGems(str, 12, 13, 14);

const getSum = (val) => {
    return Object.values(val).reduce((acc, val) => {
        acc += Object.values(val).reduce((accum, value) => {
            return accum * Number(value);
        }, 1);
        return acc;
    }, 0);
};

console.log(getSum(highestValues));
