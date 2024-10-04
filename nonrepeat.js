function nonRepeat(input) {
    const count = {};
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (count[char]) {
            count[char]++;
        }
        else {
            count[char] = 1;
        }
    }
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (count[char] === 1) {
            return char;
        }
    }
    return '';
}
const inputString = "swiss";
const result = nonRepeat(inputString);
console.log(The first non repeating character in "${inputString}" is: "${result}");