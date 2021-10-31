import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Sorting from "./components/sorting/Sorting";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sorting" component={Sorting} />
      </Switch>
    </Router>
  );
}

export default App;
