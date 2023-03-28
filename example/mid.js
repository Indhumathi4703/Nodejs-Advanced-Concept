function findMiddleValue(arr){
    arr [10,4,8,6,9,2,-12,5,15]
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    
for(let index =0;index < arr.length;index++) {
    const currentNum = arr[index]
      10,4,8,6,9,2,-12,5,15

    if(currentNum == min && currentNum == min) {
        return index
    }
}
}
const result =findMiddleValue([10,4,8,6,9,2,-12,5,15]);
console.log(result);