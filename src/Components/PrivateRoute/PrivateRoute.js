import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [logedInUser, setlogedInUser] = useContext(userContext);
   const user = JSON.parse(localStorage.getItem('user'));
   

    return (
        <Route
          {...rest}
          render={({ location }) =>
            logedInUser.email || user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      ); 
};

export default PrivateRoute;