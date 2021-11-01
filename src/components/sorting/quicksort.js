export function quicksort(arr, speed, fun) {
    let start = 0;
    let last = arr.length - 1;
    //console.log(arr);
    sort(arr, start, last, fun, speed);
    //console.log(arr);
}

const sleep = (t) => {
    return new Promise(res => setTimeout(() => res(), t))
}

const sort = async (arr, start, last, fun, speed) => {
    let pvt;
    pvt = await sortone(arr, start, last, fun, speed);
    //console.log(pvt, arr);
    if (start < pvt - 1) {
        await sort(arr, start, pvt - 1, fun, speed);
    }
    if (pvt + 1 < last) {
        await sort(arr, pvt + 1, last, fun, speed);
    }
}

const sortone = async (arr, start, last, fun, speed) => {
    let j = start;
    let pvtele = arr[last];
    for (let i = start; i <= last; i++) {
        await sleep((10 - speed) * 100)
        if (arr[i] <= pvtele) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        fun(arr, i, j, "quick");
    }
    return j - 1;
}