const numbers = [2,3,6,7,5,2,9,1];

const set = new Set (numbers);

const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);