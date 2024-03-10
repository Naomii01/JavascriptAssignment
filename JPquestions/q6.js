function greatarray(arr) {
    if (arr.length === 0) {
        return "array is empty";  
    }

    let greatestValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > greatestValue) {
            greatestValue = arr[i];
        }
    }

    return greatestValue;
}
let numbers = [8, 3, 11, 5, 2];
let max = greatarray(numbers);

console.log(" The biggest number is: " + max);
