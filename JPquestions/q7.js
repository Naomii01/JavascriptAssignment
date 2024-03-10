function smallarray( arr){
   if (arr.length === 0){
    return "the number is empty"
   }


let smallestValue = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
        smallestValue = arr[i];
    }
}

return smallestValue;
}
let numbers = [45, 56, 77, 88, 33, 7 , 454 ,  ];
let min = smallarray(numbers);
console.log(" The smallest number is: " + min);
