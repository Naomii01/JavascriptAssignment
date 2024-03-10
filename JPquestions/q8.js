function calculateAverage(arr) {
    if (arr.length === 0) {
        return "Cannot calculate average, array is empty";
    }

    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;
    return average;
}

let numbers = [10, 3, 17, 4, 2];
let avg = calculateAverage(numbers);
console.log("The average is: " + avg);
