import { useState } from "react"
import { useHistory } from "react-router-dom"


function Nav({ disable, newval, start, changearray, changespeed }) {

    const [sel, setsel] = useState("bubble");
    const [arrayLength, setArrayLength] = useState(10)
    const [speed, setspeed] = useState(1)
    const history = useHistory();

    return (
        <nav>
            <div className="left">
                <label>
                    array size
                    <input disabled={disable} onChange={(e) => {
                        changearray(e.target.value);
                        setArrayLength(e.target.value)
                    }
                    } type="range" value={arrayLength} min="2" max="200" />
                    <span>{arrayLength}</span>
                </label>
                <label className="second">
                    speed
                    <input disabled={disable} onChange={e => {
                        setspeed(e.target.value)
                        changespeed();
                    }
                    } type="range" value={speed} min="1" max="9" />
                    <span>{speed}</span>
                </label>
            </div>
            <h3 className="heading">{sel[0].toUpperCase() + sel.substring(1)} Sort</h3>
            <div className="right">
                <select disabled={disable} onChange={e => { setsel(e.target.value) }} name="" id="" value={sel}>
                    <option value="bubble">Bubble Sort</option>
                    <option value="select">Selection Sort</option>
                    <option value="merge">Merge Sort</option>
                    <option value="quick">Quick Sort</option>
                </select>
                <button disabled={disable} onClick={() => { start(arrayLength, speed, sel) }}>Start</button>
                <button disabled={disable} onClick={() => newval(arrayLength)}> new values </button>
                <button disabled={disable} onClick={() => history.push("/")}>back</button>
            </div>
        </nav>
    )
}

export default Nav
