class MergeSort {
      // Time Complexity : O(N Log N)
      // Space Complexity : O(n)
     // Merges two subarrays of arr[].
     // First subarray is arr[l..m]
     // Second subarray is arr[m+1..r]
    merge(arr, l, m, r){
        // Time Complexity : O(n)
        // Space Complexity : O(1)
        //Use a temp array because merge sort is not in memory sort
        let temp = []
        let i = l
        let j = m+1
        let k = 0

        //when 2 hypotheical arrays exist
        while (i<= m && j<= r) {
            //check if 1st is left than 2nd
            if(arr[i]<=arr[j]){
                temp[k] = arr[i]
                i++
            }
            else{
                temp[k] = arr[j]
                j++
        }
        k++
    }
        //when only one hypothetical array exist (left)
        while (i<= m) {
            //check if 1st is left than 2nd

            temp[k] = arr[i]
            i++
            k++
        }
        //when only one hypothetical array exist (right)
        while (j<= r) {
            //check if 1st is left than 2nd

            temp[k] = arr[j]
            j++
            k++ 
        }
        //we used the temp array to store the sorted ele, now time to put them back in OG array
        // we do by using k that was used to insert them into the temp array
        for (let i = 0; i < k; i++) {
            arr[l+i]  = temp[i];
            
        }
    }
    // Main function that sorts arr[l..r] using
    // merge()
    sort(arr, l, r){
        // Time Complexity : O(Log N)
        // Space Complexity : O(1)
        //Write your code here
        //Call mergeSort from here
        if (l>=r) {
            //This code will execute when there is one element in the IMAGINARY array we will return (because a single ele is always sorted)
            return arr
        }
        let mid = Math.floor((l+r)/2)
        //Traverse the left side of the array and get 2 elements
        this.sort(arr,l,mid)
        //Traverse the right side of the array and get 2 elements
        this.sort(arr,mid+1,r)
        //when base condition hit on both the recursive calls, we use merge method
        this.merge(arr,l,mid,r)

        return arr

    }
    printArray(arr) {
        let n = arr.length;
        for (let i = 0; i < n; ++i)
            console.log(arr[i] + " ");
        console.log();
    }

}

    // Driver method
     let arr = [12, 11, 13, 5, 6, 7];
     console.log("Given Array");
     let ob = new MergeSort();
     ob.printArray(arr);
     ob.sort(arr, 0, arr.length - 1);
     console.log("\nSorted array");
     ob.printArray(arr);

