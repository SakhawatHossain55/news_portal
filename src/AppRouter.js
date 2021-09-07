import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNews from './component/AddNews/AddNews';
import Footer from './component/common/Footer';
import Header from './component/common/Header';
import Sidebar from './component/Dashboard/Sidebar/Sidebar';
import Login from './pages/Login/Login';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './component/Dashboard/ManageServices/ManageServices';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import SingleNews from './pages/SingleNews/SingleNews';
import TopNews from './component/TopNews/TopNews';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/addNews" component={AddNews} />
        <PrivateRoute path="/singleNews/:_id" component={SingleNews} />
        <PrivateRoute path="/topNews" component={TopNews} />
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
