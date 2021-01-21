import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [logedInUser, setlogedInUser] = useContext(userContext);
    console.log(logedInUser)

    return (
        <Route
          {...rest}
          render={({ location }) =>
            logedInUser.email ? (
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