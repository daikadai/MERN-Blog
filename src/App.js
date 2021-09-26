import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/HomePage/Users/Login/Login";
import Register from "./components/HomePage/Users/Register/Register";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/register' component={Register}/> 
        <Route exact path='/login' component={Login}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
