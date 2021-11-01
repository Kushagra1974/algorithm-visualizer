export async function mergeSort(array, speed, fun) {
    await Sort(array, 0, array.length - 1, fun, speed);
}

function sleep(t) {
    return new Promise(res => setTimeout(() => res(), t))
}


async function Sort(arr, start, last, fun, speed) {
    if (start < last) {
        let mid = Math.floor((start + last) / 2);
        await Sort(arr, start, mid, fun, speed);
        await Sort(arr, mid + 1, last, fun, speed);

        await makesorted(arr, start, mid, last, fun, speed);
    }
}

async function makesorted(arr, start, mid, last, fun, speed) {
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
        await sleep((10 - speed) * 100);

        if (left[lftpointer] < right[rightpointer]) {
            arr[i] = left[lftpointer];
            fun(arr, i, start + lftpointer, "merge")
            lftpointer++;
        }
        else {
            arr[i] = right[rightpointer];
            fun(arr, i, mid + 1 + rightpointer)
            rightpointer++;
        }
    }

    while (lftpointer < left.length) {
        await sleep((10 - speed) * 100);
        arr[i] = left[lftpointer];
        fun(arr, i, start + lftpointer, "merge")
        lftpointer++;
        i++;

    }

    while (rightpointer < right.length) {
        await sleep((10 - speed) * 100);
        arr[i] = right[rightpointer]
        fun(arr, i, mid + 1 + rightpointer, "merge")
        rightpointer++;
        i++;
    }
}


