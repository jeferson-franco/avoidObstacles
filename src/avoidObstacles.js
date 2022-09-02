function solution(inputArray) {
    for (let i = 1; ; i++) {
        if (inputArray.every((element) => element % i !== 0)) {
            return i;
        }
    }
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test avoidObstacles

// alternative solution
// function solution(arr) {
//     for (let n = 1; ; n++) if (arr.every((x) => x % n)) return n;
// }

// alternative solution
// function solution(inputArray) {
//     let jump = 2;
//     while (inputArray.some((obstacle) => obstacle % jump == 0)) {
//         jump++;
//     }
//     return jump;
// }

// alternative solution
// A = solution = (a, j) => ((j = -~j), a.every((e) => e % j) ? j : A(a, j));
