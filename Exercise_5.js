// Time Complexity : O (N (Log N))
// Space Complexity : O(n) <- because of stack
class IterativeQuickSort {
    //Swap function to swap the given values
    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    partition(arr, l, h) {
        //same logic as recursive partition
        const pivot = arr[l];
        let i = l + 1;
        let j = h;

        while (true) {
            while (i <= j && arr[i] <= pivot) {
                i++;
            }
            while (i <= j && arr[j] > pivot) {
                j--;
            }
            if (i > j) break;
            this.swap(arr, i, j);
        }
        this.swap(arr, l, j);
        return j;
    }

    QuickSort(arr, l, h) {
        //Try using Stack Data Structure to remove recursion.
        //using stack as recurtion is banned
        //we use stack to keep the high and low track
        const stack = [];
        stack.push(l);
        stack.push(h);
        //and single ele is always sorted
        while (stack.length > 0) {
            const currentH = stack.pop();
            const currentL = stack.pop();
        // when low and high in stack are same that means its single ele
            if (currentL >= currentH) continue;
            //call the partition on the current low and high
            const pivotIndex = this.partition(arr, currentL, currentH);
            //push the left of partition array 
            stack.push(currentL);
            stack.push(pivotIndex - 1);
            //push the right of partition array 
            stack.push(pivotIndex + 1);
            stack.push(currentH);
        }
    }

    printArr(arr, n) {
        let i;
        for (i = 0; i < n; ++i)
            console.log(arr[i] + " ");
    }
}

  // Driver code to test above
let ob = new IterativeQuickSort();
let arr = [4, 3, 5, 2, 1, 3, 2, 3];
ob.QuickSort(arr, 0, arr.length - 1);
ob.printArr(arr, arr.length);
