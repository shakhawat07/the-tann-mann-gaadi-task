import React from 'react';
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          {/* <Navigation></Navigation> */}
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>

            {/* <Route path="/about">
              <About></About>
            </Route> */}
            {/* <PrivateRoute path="/bicycle/:bicycleId">
              <BicycleDetails></BicycleDetails>
            </PrivateRoute> */}


            {/* <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute> */}

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
        </Router>
        {/* <Footer></Footer> */}
      </AuthProvider>
    </div>
  );
}

export default App;
