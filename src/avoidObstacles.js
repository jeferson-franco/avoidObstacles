function solution(inputArray) {
    for(let i = 1; ; i++) {
        if(inputArray.every(element => element % i !== 0)) {
            return i;
        }
    }
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test avoidObstacles
