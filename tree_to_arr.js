const tree = [[1, 5], [6, 5], [6, 2], [6, 0], [0, 3], [0, 4], [4, 9], [7, 4], [8, 4]]; // 56060444
// const tree = [[5,6],[6,4],[1,6],[1,8],[1,0],[0,3],[0,7]]; // 066101
// const tree = [[1,4], [1,5], [1,8], [2,3], [2,6], [2,7], [2,8]]; // 211822

const relations = {};
let answer = [];

tree.forEach(arr => {
    relations[arr[0]] = [];
    relations[arr[1]] = [];
});

tree.forEach(arr => saveRelation(arr[0], arr[1]));

function saveRelation(a, b) {
    relations[a].push(b);
    relations[b].push(a);
}

function removeRelation(a, b) {
    delete relations[a];
    relations[b] = relations[b].filter(relation => relation != a);
}

function findMinIndexSloping() {
    const slopings = Object.entries(relations).filter(arr => arr[1].length === 1);
    if (!slopings.length) return -1;
    slopings.sort((a, b) => a - b);
    return slopings[0];
}

while (true) {
    if (Object.keys(relations).length <= 2) break;
    let sloping = findMinIndexSloping();
    if (!sloping) break;
    answer.push(sloping[1]);
    removeRelation(sloping[0], sloping[1]);
}

console.log(answer.join(''))
