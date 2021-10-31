export function mergeSort(array, speed, fun) {
    let arr = array.slice();
    Sort(arr, 0, arr.length - 1, fun);
    console.log(arr)
    count = -1;
}

function Sort(arr, start, last, fun, speed) {
    if (start < last) {
        let mid = Math.floor((start + last) / 2);
        Sort(arr, start, mid, fun, speed);
        Sort(arr, mid + 1, last, fun, speed);

        makesorted(arr, start, mid, last, fun, speed);
    }
}

let count = -1;
function makesorted(brr, start, mid, last, fun, speed) {
    let arr = brr.slice()
    let left = [].slice();
    let right = [].slice();
    for (let i = start; i <= mid; i++) {
        left.push(arr[i]);
    }

    for (let i = mid + 1; i <= last; i++) {
        right.push(arr[i])
    }

    let lftpointer = 0;
    let rightpointer = 0;
    let i = start;

    for (i; i < last && lftpointer < left.length && rightpointer < right.length; i++) {
        count++;
        if (left[lftpointer] < right[rightpointer]) {
            arr[i] = left[lftpointer];
            lftpointer++;
        }
        else {
            arr[i] = right[rightpointer];
            rightpointer++;
        }
        setTimeout(() => {
            let abcd = arr.slice();
            fun(abcd, i, start)
        }, count * 300);
    }

    while (lftpointer < left.length) {
        count++;
        arr[i] = left[lftpointer];
        lftpointer++;
        i++;
        setTimeout(() => {
            let abcd = arr.slice();
            fun(abcd, i, start)
        }, count * 300);

    }

    while (rightpointer[right.length]) {
        count++;
        arr[i] = right[rightpointer]
        rightpointer++;
        i++;
        setTimeout(() => {
            let abcd = arr.slice();
            fun(abcd, i, start)
        }, count * 300);

    }
    for (let i = 0; i < arr.length; i++) {
        brr[i] = arr[i];
    }
}