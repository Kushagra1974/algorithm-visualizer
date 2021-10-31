import classes from "./card.module.css"
import { useHistory } from "react-router-dom"
import { useState } from "react";
function Card({ img, heading, path, desc }) {
    const [cls, setcls] = useState("hidd")
    const history = useHistory();
    return (
        <div onClick={e => {
            if (e.target.innerText !== "show") {
                history.push(path)
            }
        }
        } className={classes.card}>
            < img src={img} alt="he he" />
            <div className={classes.headingcont}>
                <h2 className={classes.heading}>{heading}</h2>
                <button className={classes.btn} onClick={() => {
                    if (cls === "hidd")
                        setcls("vis")
                    else setcls("hidd")
                }}>show</button>
            </div>
            <p className={classes[cls]}>{desc}</p>
        </div >
    )
}

export default Card
