import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import User from './components/users/ViewUser';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/users/add" component={AddUser} exact />
          <Route path="/users/edit/:id" component={EditUser} exact />
          <Route path="/users/:id" component={User} exact />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
