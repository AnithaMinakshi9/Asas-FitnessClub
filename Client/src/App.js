import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Signup-login/Form";
import Contact from "./pages/Contact";
import About from "./pages/Cards/cards";
import Member from "./pages/Member";
import Message from "./pages/Message";
import Login from "./pages/Signup-login/Login";
import Gallery from "./pages/Gallery";
import Dashboard from "./pages/Admin/Dashboard1";
import User from "./pages/User/DashboardU";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
          <Route path="/message" component={Message} />
          <Route path="/member" component={Member} />
          <Route path="/login" component={Login} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
