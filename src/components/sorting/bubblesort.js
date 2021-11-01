export function bubbleSort(newarr, speed, onestep) {
    sort(newarr, onestep, speed);
}

async function sort(arr, onestep, speed) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - i; j++) {

            await sleep((10 - speed) * 100);

            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }

            onestep(arr, j, i, "bubble");
        }
    }
}

function sleep(t) {
    return new Promise(resolve => setTimeout(() => resolve(), t))
}
