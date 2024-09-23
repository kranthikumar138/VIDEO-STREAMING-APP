import React from 'react';
import {Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar.js';
import './api.js';

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Route path="/" exact component={Home} />
        <Route path="/videos/:id" component={VideoDetail} />
        <Route path="/upload" component={Upload} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
    </Router>
  );
};

export default App;
