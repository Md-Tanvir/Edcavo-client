import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/courses'>
        <Home></Home>
        </Route>
        <Route path='/blogs'>
        <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
