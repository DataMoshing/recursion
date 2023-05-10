let arr = []

//  Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

const fibs = (num) => {
    let a = 0
    let b = 1
    for (let i = 1; i < num; i++) {
        let temp = b + a
        a = b
        b = temp
        arr.push(b)
    }
    return b
}

console.log(fibs(10))
console.log([arr])

/* First iteration
        a = 0
        b = 1
        for (let i = 1; i < num; i++) { // num = 10
        let temp = b + a // 1 + 0 = 1
        a = b // a = 1
        b = temp // b = 1
        arr.push(b) // [1]
*/

/* Second iteration
        a = 1
        b = 1
        for (let i = 1; i < num; i++) { // num = 10
        let temp = b + a // 1 + 1 = 2
        a = b // a = 1
        b = temp // b = 2
        arr.push(b) // [1, 2]
*/

const fibsRec = (num) => {
    if (num <= 1) {
        return num
    }
    return fibsRec(num - 1) + fibsRec(num - 2)
}

console.log(fibsRec(10))