import { useState, useEffect } from "react";

import classes from "./sorting.module.css"
import Nav from "./Nav"

import { bubbleSort } from "./bubblesort";
import { SelectionSort } from "./selectionsort";
import { mergeSort } from "./mergeSort";

function Sorting() {
    const [array, setarray] = useState([])
    const [currentindex, setcurrentindex] = useState(0);
    const [finish, setfinish] = useState(false)
    const [size, setsize] = useState(10);
    const [change, setchange] = useState(false)
    useEffect(() => {
        let newarray = [];
        for (let i = 0; i < size; i++) {
            newarray.push(Math.floor(Math.random() * 100) + 1);
        }
        setarray(newarray);
        setlastindex(newarray.length - 1)
    }, [size, change])
    const [lastindex, setlastindex] = useState(array.length - 1)

    //console.log(array);
    const bubbleonestep = (nextarr, j, i) => {
        let abcd = nextarr.slice()
        //console.log(array, nextarr);
        setlastindex(abcd.length - i - 1)
        setcurrentindex(j);
        setarray(abcd)
        console.log(i);
        if (i === array.length - 2) {
            setfinish(true)
        }
    }

    const selectonestep = (nextarr, j, i) => {
        let abcd = nextarr.slice();
        setlastindex(abcd.length - i - 1)
        setcurrentindex(j);
        setarray(abcd)
        console.log(i);
        if (i === array.length - 2) {
            setfinish(true)
        }
    }
    const mergeonestep = (arr, start, last) => {
        let abcd = arr.slice();
        let newa = abcd.slice();
        let s = newa.sort();
        setcurrentindex(start);
        setarray(abcd);
        setlastindex(last);
        let tcount = 0;
        let count = 0;
        let set = true;

        console.log(abcd);
        for (let i = 1; i < arr.length; i++) {
            if (abcd[i] < abcd[i - 1]) set = false;
        }
        setfinish(set)
    }

    const start = (len, speed, type) => {
        setfinish(false)
        if (type === "bubble") {
            bubbleSort(array, speed, bubbleonestep)
        }
        if (type === "select") {
            SelectionSort(array, speed, selectonestep);
        }
        if (type === "merge") {
            let arr = array.slice()
            mergeSort(arr, speed, mergeonestep)
        }
    }

    const changearray = (len) => {
        console.log(len);
        setchange(prev => !prev)
        setsize(len)
        setfinish(false)
        setcurrentindex(0);
        setlastindex(len - 1)
    }

    return (
        <div className={classes.sorting}>
            <Nav start={start} changearray={changearray} newval={changearray} />
            <div className={finish ? classes.finish : classes.box}>
                {array.map((d, i) => <div className={currentindex === i ? (classes.current) : (lastindex === i ? classes.last : classes.div)} style={{ height: `${d * 6}px`, width: `40px`, margin: `1px` }} />)}
            </div>
        </div>
    )
}

export default Sorting
