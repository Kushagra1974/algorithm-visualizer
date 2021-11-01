import { useState, useEffect } from "react";

import classes from "./sorting.module.css"
import Nav from "./Nav"

import { bubbleSort } from "./bubblesort";
import { SelectionSort } from "./selectionsort";
import { mergeSort } from "./mergeSort";
import { quicksort } from "./quicksort"

function Sorting() {

    const [array, setarray] = useState([])
    const [currentindex, setcurrentindex] = useState(0);
    const [finish, setfinish] = useState(false)
    const [size, setsize] = useState(10);
    const [change, setchange] = useState(false)
    const [disable, setdisable] = useState(false)

    useEffect(() => {
        let newarray = [];
        setfinish(false);
        for (let i = 0; i < size; i++) {
            newarray.push(Math.floor(Math.random() * 100) + 1);
        }
        setarray(newarray);
        setlastindex(newarray.length - 1)
    }, [size, change])

    const [lastindex, setlastindex] = useState(array.length - 1)

    const onestep = (arr, start, last, type) => {
        let abcd = arr.slice();
        setcurrentindex(start);
        setarray(abcd);
        if (type === "select" || type === "bubble") {
            setlastindex(abcd.length - last - 1);
        }
        else if (type === "merge") {
            setlastindex(last);
        }
        else if (type === "quick") {
            setlastindex(last);
        }
        let set = true;
        console.log(abcd);
        for (let i = 1; i < arr.length; i++) {
            if (abcd[i] < abcd[i - 1]) set = false;
        }
        setfinish(set)
        setdisable(!set);
    }

    const start = (len, speed, type) => {

        let set = true;

        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) set = false;
        }
        console.log(set);
        if (!set) {
            setfinish(false)
            setdisable(true);
            if (type === "bubble") {
                bubbleSort(array, speed, onestep)
            }
            if (type === "select") {
                SelectionSort(array, speed, onestep);
            }
            if (type === "merge") {
                mergeSort(array, speed, onestep)
            }
            if (type === "quick") {
                quicksort(array, speed, onestep);
            }
        }
    }

    const changearray = (len) => {
        setchange(prev => !prev)
        setsize(len)
        setfinish(false)
        setcurrentindex(0);
        setlastindex(len - 1)
    }

    const changespeed = () => {
        setfinish(false);
        setcurrentindex(0);
        setlastindex(array.length - 1);
    }

    return (
        <div className={classes.sorting}>
            <Nav disable={disable} start={start} changearray={changearray} newval={changearray} changespeed={changespeed} />
            <div className={finish ? classes.finish : classes.box}>
                {array.map((d, i) => <div className={currentindex === i ? (classes.current) : (lastindex === i ? classes.last : classes.div)} style={{ height: `${d * 6}px`, width: `40px`, margin: `1px` }} />)}
            </div>
        </div>
    )
}

export default Sorting
