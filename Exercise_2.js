// Time Complexity : O (N (Log N))
// Space Complexity : O(1)
class QuickSort {
    partition(arr,low,high){
        //Here we go through all the ele of O(N)
        //this function should place the pivot element to its correct position
        let pivotEle = arr[low]
        let i = low+1
        let j = high
        while (true) {
            while (i<=j && arr[i]<= pivotEle) {
                //while ele is less than pivot keep pushing i
                i++
            }
            while (i<=j && arr[j] > pivotEle) {
                //while ele is greater than pivot keep pushing j
                j--
            }
            if(i>j){
                // all good, the ele are adhering to the prop.
                break
            }
            //these condition dont adher so swap them
            [arr[i],arr[j]]=[arr[j],arr[i]]

        }
        //swap pivot element to its correct postion
        [arr[low],arr[j]]=[arr[j],arr[low]]
        return j
    }
    sort(arr,l,r){
        //Here we divide the array so O(Log(N))
        //This is the recusive function we are going to call
        //Base case 1 element is already in its correct position
        if(l>=r){
            return arr
        }
        let pivotIndex=this.partition(arr,l,r)
        this.sort(arr,l,pivotIndex-1)
        this.sort(arr,pivotIndex+1,r)
        return arr
    }
    printArray(arr) {
        let n = arr.length;
        for (let i = 0; i < n; ++i){
            console.log(arr[i] + " ");
        }
        console.log();
    }
}

    // Driver program
    let arr = [10, 7, 8, 9, 1, 5];
    let n = arr.length;
    let ob = new QuickSort();
    ob.sort(arr, 0, n - 1);
    console.log("sorted array");
    ob.printArray(arr);
