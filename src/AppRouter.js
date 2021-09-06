import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddService from './component/AddNews/AddNews';
import Footer from './component/common/Footer/Footer';
import Header from './component/common/Header';
import Sidebar from './component/Dashboard/Sidebar/Sidebar';
import Login from './component/Login/Login';
import MakeAdmin from './component/MakeAdmin/MakeAdmin';
import ManageServices from './component/ManageServices/ManageServices';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Home from './Home/Home';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/addService" component={AddService} />
        <PrivateRoute path="/sidebar" component={Sidebar} />
        <PrivateRoute path="/manageService" component={ManageServices} />
        <PrivateRoute path="/makeAdmin" component={MakeAdmin} />
        <PrivateRoute path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
