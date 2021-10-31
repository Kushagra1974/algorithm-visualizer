export function bubbleSort(newarr, speed, onestep) {
    let arr = newarr.slice();
    let count = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            count++;
            let id = setTimeout(function () {
                if (arr[j] < arr[j - 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
                onestep(arr, j, i);
            }, count * speed * 100);
        }
    }
}
