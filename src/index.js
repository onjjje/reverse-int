module.exports = function reverse (n) {
    return String(Math.abs(n)).toString().split("").reverse().filter(el => el !=="-").join("")
}
