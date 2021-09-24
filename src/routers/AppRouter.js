import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../views/Home";
import MusicStore from "../views/MusicStore";
import Profile from "../views/Profile";

function AppRouter() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/musicstore" component={MusicStore} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
