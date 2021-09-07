import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNews from './component/AddNews/AddNews';
import Footer from './component/common/Footer';
import Sidebar from './component/Dashboard/Sidebar/Sidebar';
import Login from './pages/Login/Login';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import ManageNews from './component/Dashboard/ManageNews/ManageNews';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import SingleNews from './pages/SingleNews/SingleNews';
import TopNews from './component/Dashboard/TopNews/TopNews';
import SidebarNews from './component/Dashboard/SidebarNews/SidebarNews';
import Header from './component/common/Header/Header';
import SingleSidebarNews from './pages/SingleSidebarNews/SingleSidebarNews';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/addNews" component={AddNews} />
        <PrivateRoute path="/singleNews/:_id" component={SingleNews} />
        <PrivateRoute path="/topNews" component={TopNews} />
        <PrivateRoute path="/sidebarNews" component={SidebarNews} />
        <PrivateRoute path="/sidebar" component={Sidebar} />
        <PrivateRoute path="/singleSidebarNews/:_id" component={SingleSidebarNews} />
        <PrivateRoute path="/manageNews" component={ManageNews} />
        <PrivateRoute path="/makeAdmin" component={MakeAdmin} />
        <PrivateRoute path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
