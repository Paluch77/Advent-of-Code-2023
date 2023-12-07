
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
            let eachGame = {};
            game.split(",").forEach((val) => {
                const eachGem = val.split(" ").filter((k) => {
                    return k.length > 0;
                });
                eachGame[eachGem[1]] = eachGem[0];
            });
            converted[index + 1]
                ? converted[index + 1].push(eachGame)
                : (converted[index + 1] = [eachGame]);
        });
    });
    let counter = 0;
    Object.entries(converted).forEach((value) => {
        let check = 0;
        value[1].forEach((el) => {
            const redCondition = !el.red || parseInt(el.red) <= r;
            const blueCondition = !el.blue || parseInt(el.blue) <= b;
            const greenCondition = !el.green || parseInt(el.green) <= g;
            if (redCondition && blueCondition && greenCondition) check += 1;
        });
        if (check === value[1].length) counter += Number(value[0]);
    });
    return counter;
};

console.log(getSumOfGems(str, 12, 13, 14));
