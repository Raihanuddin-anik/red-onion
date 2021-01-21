
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mainpage from './Components/MainPage/Mainpage';
import FoodDetail from './Components/FoodDetail/FoodDetail';
import LogIn from './Components/LogIn/LogIn';
import Delivary from './Components/Delivary/Delivary';
import Notfound from './Components/Notfound/Notfound';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

 
 export const userContext = createContext();


function App() {
 
 
  
  const [logedInUser, setlogedInUser] = useState([]);
  return (
    <userContext.Provider value={
      [logedInUser, setlogedInUser]
      }>
       
       <Router>
         <Header></Header>
         <Switch>
            <Route exact path="/">
              <Mainpage></Mainpage>
            </Route>
            <Route path ="/details/:Id">
              <FoodDetail></FoodDetail>
            </Route>
            <Route path ="/login">
            <LogIn></LogIn>
            </Route>
            <PrivateRoute to="/purshes">
            <Delivary></Delivary>
            </PrivateRoute>
            <Route path="/*">
              <Notfound></Notfound>
            </Route>
         </Switch>
       </Router>
      
       
      
    </userContext.Provider>
  );
}

export default App;
