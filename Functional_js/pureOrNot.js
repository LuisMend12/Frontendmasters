// This function is TODO
// Because TODO

function getDate() {
    return new Date().toDateString();
}


function compareDateStrings(s1, s2) {
    const d1 = Date(s1);
    const d2 = Date(s2);
    const delta = d2 - d1;
    return `${s1} is ${delta > 0 ? 'after' : 'before'} ${s2}`
}

const stringToJson = (jsonString) => {
    return JSON.parse(jsonString);
}



const fileToJson = (filename) => {
    const fs = require('fs');
    const fileData = fs.readFileSync(filename, 'utf8');
    return JSON.parse(fileData);
}


function add(a, b) {
    return a + b;
}


function sum(numArray) {
    let total = 0;
    for (let value of numArray) total += value;
    return total;
}


const logicalXor = (A, B) => (A || B) && !(A && B);


const truthTable = (logicalOperator) => {
    const values  = [true, false];
    const table = [];
    for (const A of values) {
        for (const B of values) table.push(A, B, logicalOperator(A, B));
    }
    return table;
}


const xorTruthTable = () => {
    console.log('XOR truth table:\n==============\n');
    const table = truthTable(logicalXor);
    console.log('\tA\t|\tB\t|\tA xor B');
    console.log('\t------\t|\t------\t|\t-------');
    table.map(
        ([A, B]) => console.log(`\t${A}\t|\t\${B}\t|\t${logicalXor(A, B)}`)
    );
};

function encodeString(stringValue) {
    return encodeURIComponent(stringValue);
}

function encodeArray(arrayValue) {
    return arrayValue.map(encodeURIComponent).join(',');

}


function encodeValue(value) {
    if (Array.isArray(value)) {
        return encodeArray(value);
    }
    return encodeString(value);
}