import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import Courses from "./components/Courses/Courses";
import Blogs from "./components/Blogs/Blogs";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/courses'>
        <Courses></Courses>
        </Route>
        <Route path='/blogs'>
       <Blogs></Blogs>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
