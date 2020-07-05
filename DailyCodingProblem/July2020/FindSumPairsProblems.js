// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const { set } = require("object-path")

// Clarifying questions to ask (validate assumptions):
// -Are values in given list unique? A set? No duplicates?
// -Are negative numbers allowed?
// -Is the list sorted? (example set, no)

const k = 18;
let arr = [10, 15, 3, 7];

// Can iterate list in one pass, uses a hash set so
// access, insertion, etc. is constant time O(1)
// + iterating list O(n) -> O(1 + n) -> O(n)
// IFF provided list is a set, things get weird with
// duplicates
const FindSumPairWithSet = (arr, k) =>
{
    let foundPair = false;
    let set = new Set();
    arr.forEach((number) =>
    {
        if (set.has(k-number))
            foundPair = true;
        else
            set.add(number);
    });

    return foundPair;
}

// Two passes - first pass sort, second pass iterate list
// from both sides until you've reached middle or match found
// sort O(nlogn) + find O(n/2) -> O(n) -> O(n + nlogn)
// -> O(nlogn)
const FindSumPairWithSort = (arr, k) =>
{
    let foundPair = false;
    let sortedArray = Array.from(arr).sort((a,b) => a-b);

    let i = 0;
    let j = sortedArray.length - 1;
    while(j > i)
    {
        let sum = arr[i] + arr[j];
        if (sum > k)
        {
            j--;
        }
        else if (sum < k)
        {
            i++;
        }
        else
        {
            foundPair = true;
            break;
        }
    }

    return foundPair;
}

// Worst performance as it's brute force
// Iterate list with two loops checking each index with
// every other corresponding index
// O(n^2) time
const FindSumPairBruteForce = (arr, k) =>
{
    let foundPair = false;
    
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 1; j < arr.length; j++)
        {
            if (arr[i] + arr[j] === k)
                foundPair = true;
        }
    }

    return foundPair;
}

let found = FindSumPairWithSet(arr, k);
console.log("Found pairs with hash set?", found);
found = FindSumPairWithSort(arr, k);
console.log("Found pairs with sorted array?", found);
found = FindSumPairBruteForce(arr, k);
console.log("Found pairs with brute force?", found);
