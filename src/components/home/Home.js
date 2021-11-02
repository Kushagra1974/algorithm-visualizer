import classes from "./home.module.css"
import Card from "../Card/Card"
function Home() {
    return (
        <div className={classes.app}>
            <div className={classes.header}>
                <h1>visualizer</h1>
            </div>
            <div className={classes.body}>
                <Card heading="Sorting" path="/sorting" img="/sorting.jfif" desc="This shows the visualization of the process of arranging elements of an array in asending order" />
            </div>
            <div className={classes.footer}>
                <h1><a className={classes.a} href="https://github.com/Kushagra1974/algorithm-visualizer">GitHub link</a></h1>
            </div>
        </div>
    )
}

export default Home
