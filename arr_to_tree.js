// const set = [0,1,2,3,4,5,6,7,8,9];
// const arr = [5,6,0,6,0,4,4,4];
const set = [1,2,3,4,5,6,7,8];
const arr = [2,1,1,8,2,2];

const frequencies = {};
let tree = [];

set.forEach(i => frequencies[i] = 1);
arr.forEach(i => frequencies[i] ++);

while (arr.length > 0) {
    const foundItem = Object.entries(frequencies).find(item => item[1] === 1);
    if (!foundItem) break;
    tree.push([arr[0], +foundItem[0]]);
    frequencies[foundItem[0]] --;
    frequencies[arr[0]] --;
    arr.shift();
}

const remainder = Object.entries(frequencies).filter(item => item[1] === 1);
tree.push([parseInt(remainder[0][0]), parseInt(remainder[1][0])]);

tree = tree.map(connection => connection.sort());
tree.sort((a, b) => a[0] - b[0]);

console.log(tree)
