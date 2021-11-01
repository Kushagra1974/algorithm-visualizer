export function SelectionSort(array, speed, fun) {
    sort(array, speed, fun)
}

async function sort(arr, speed, fun) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {

            await sleep(100 * (10 - speed))
            if (arr[j] > arr[arr.length - i - 1]) {
                let temp = arr[arr.length - i - 1];
                arr[arr.length - i - 1] = arr[j];
                arr[j] = temp;
            }
            fun(arr, j, i, "select");
        }
    }
}

function sleep(t) {
    return new Promise(res => setTimeout(() => res(), t))
}
