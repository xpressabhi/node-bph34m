// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  const center = [pivot];
  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i];
    if (a === pivot) center.push(a);
    if (a < pivot) left.push(a);
    else right.push(a);
  }
  return [...quickSort(left), ...center, ...quickSort(right)];
}
const a = [5, 5, 7, 5, 4, 8, 1];
const result = quickSort(a);
console.log(result);
console.log(a.sort((a, b) => a - b));
