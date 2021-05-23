
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

import Notfound from './Components/Notfound/Notfound';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OnDelivery from './Components/OnDelivery/OnDelivery';
import Delivary from './Components/Delivary/Delivary/Delivary';

 
 export const userContext = createContext();
export const secondContext = createContext();

function App() {

  const [cartData, setcartData] = useState([])
  localStorage.setItem("data", JSON.stringify(cartData));
  console.log(cartData)
  const [logedInUser, setlogedInUser] = useState([]);
  return (
    <secondContext.Provider value={[cartData, setcartData]}>
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
            <PrivateRoute path="/purshes">
           <Delivary></Delivary>
            </PrivateRoute>
            <Route path="/delivery">
            <OnDelivery></OnDelivery>
            </Route>
            <Route path="/*">
              <Notfound></Notfound>
            </Route>
         </Switch>
       </Router>
      
       
      
    </userContext.Provider>
    </secondContext.Provider>
  );
}

export default App;
