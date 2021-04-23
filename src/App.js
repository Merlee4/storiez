import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from "./pages/People";
import Home from "./pages/Home";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/people" component={People} />
      </Switch>
    </Router>
  );
}
