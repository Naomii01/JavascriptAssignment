function doublearray (array){
    let sum = 0;
    for (let i = 0 ; i < array.length; i++){
      sum += array[i];
    }
    return sum;
}
let numbers = [1,2,3,4,5,6,7,8];
let result = doublearray (numbers);
console.log(" The sum that receives an array and returns the sum inside is : " + result);
