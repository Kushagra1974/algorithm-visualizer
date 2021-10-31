export function SelectionSort(array, speed, fun) {
    let arr = array.slice();
    console.log("initial", arr);
    let count = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            count++;
            setTimeout(() => {
                if (arr[j] > arr[arr.length - i - 1]) {
                    let temp = arr[arr.length - i - 1];
                    arr[arr.length - i - 1] = arr[j];
                    arr[j] = temp;
                }
                fun(arr, j, i);
            }, count * speed * 100);
        }
    }
    console.log("final", arr);
}
