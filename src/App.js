import React from 'react';
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Courses from './Pages/Courses/Courses';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import Navigation from './Pages/Navigation/Navigation';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>

            <PrivateRoute path="/courses">
              <Courses></Courses>
            </PrivateRoute>
            <PrivateRoute path="/course/:courseId">
              <CourseDetails></CourseDetails>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
