class BinarySearch {
    // Did this code successfully run on Leetcode : YES
     // Returns index of x if it is present in arr[l.. r], else return -1
    constructor(parameters) {     
    }
    binarySearch(arr, l, r, x){
        // Time Complexity : O(Log n)
        // Space Complexity : O(1)
        //We use 2 pointer to keep track of starting and the ending pointers of array
        while (l<=r) {
            let m = Math.floor((l+r)/2) // we find the mid of the array
            if (arr[m]==x) {
                //condition 1: We get the element LUCK!
                return m
            }
            else if(arr[m]<x){
                //condition 2: The ele we at is smaller then TARGET ele 
                // We know list is SORTED so neglect the left half
                l = m+1
            }
            else{
                //condition 3: The ele we at is greater then TARGET ele 
                // We know list is SORTED so neglect the right half
                r = m-1
            }
        }
        return -1
    }
}

// Driver method to test above
const ob = new BinarySearch();
const arr = [2, 3, 4, 10, 40];
const n = arr.length;
const x = 9;
const result = ob.binarySearch(arr, 0, n - 1, x);
if (result === -1)
    console.log("Element not present");
else
    console.log("Element found at index " + result);
