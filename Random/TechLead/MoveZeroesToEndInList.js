// Given an array move all zeroes to the right as in:
// [1,0,0,2,5,0] -> [1,5,2,0,0,0]

// Clarifying questions:
// -Do non-zeroes need to be sorted afterward? as in: let arr = [1,2,5,0,0,0];
//  -- Doubt that's important, but doesn't hurt to ask.
// Is the array length known ahead? Makes it easier as you avoid O(n) to calculate it
// But, it doesn't matter all that much in the end because O(2n) -> O(n)

let arr = [1,0,0,2,5,0];
let arrTest = [0,0,1,0,0,2,5,0];
let arrTest1 = [0,0,0,0,0,0,0,0,1,0,0,2,5,0];
let arrTest2 = [1,0,0,2,5,0,7,11];
let arrTest3 = [0,0,0,0,2,5,0,7,11,0];
let arrTest4 = [0,0,0];
let arrTest5 = [1,2,5];
let arrTest6 = [0,-1,0,-2,0,-5,0];

// Using indices at left and right side
// advance from beginning until 0 is found, advance from end until non-zerois found,
// then swap values. Do this until midpoint is passed/reached (j > i)
const PushZeroesToRight = (arr) =>
{
    let i = 0;
    let j = arr.length - 1;
    while (j > i)
    {
        if (arr[i] == 0 && arr[j] != 0)
        {
            //swap
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        else
        {
            // non-zero in the right place advance right
            if (arr[i] != 0)
                i++;
            // zero in the right place advance left
            else if (arr[j] == 0)
                j--;
        }
    }
}

console.log("Array Before", arr);
console.log("Array Before", arrTest);
console.log("Array Before", arrTest1);
console.log("Array Before", arrTest2);
console.log("Array Before", arrTest3);
console.log("Array Before", arrTest4);
console.log("Array Before", arrTest5);
console.log("Array Before", arrTest6);
PushZeroesToRight(arr);
PushZeroesToRight(arrTest);
PushZeroesToRight(arrTest1);
PushZeroesToRight(arrTest2);
PushZeroesToRight(arrTest3);
PushZeroesToRight(arrTest4);
PushZeroesToRight(arrTest5);
PushZeroesToRight(arrTest6);
console.log("Array After", arr);
console.log("Array After", arrTest);
console.log("Array After", arrTest1);
console.log("Array After", arrTest2);
console.log("Array After", arrTest3);
console.log("Array After", arrTest4);
console.log("Array After", arrTest5);
console.log("Array After", arrTest6);