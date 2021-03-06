import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./routing/PrivateRoute";
import Info from "./components/pages/info/Info";
//@ filter dosent work fine ,fix that one!
//@AuthState line 59 dosent work with array of errors
// @protect info route
// @Job Tracker
// לקצר את כל הקומפוננטות מעל 100 שורות
// להוציא פונקציות שמחשבות מחוץ לקומפוננטות
// loading
// להוסיף היסטוריה שכל תזכיר שמוחקים נשמר בדאטה בס בhistory
// בדף הבית כל יום שהמשתמש נכנס מוצג לו משימה יומית על פי החולשות שלו
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/about' component={About} />
                  <PrivateRoute exact path='/info' component={Info} />
                  <PrivateRoute exact path='/' component={Home} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
