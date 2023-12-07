import str from './input.js'


const getStars = (data) => {
    return data.split('\n').reduce((acc, val) => {
        const numbers = val.split("").filter(Number)
        numbers.length === 1 ? acc += Number(numbers[0] + numbers[0]) :acc += Number(numbers[0] + numbers[numbers.length - 1])
        return acc
    }, 0)
}

console.time('time')
console.log(getStars(str))
console.timeEnd('time')