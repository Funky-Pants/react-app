import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import FunctionalComponent from './components/FunctionalComponent';
import { tsPropertySignature } from '../node_modules/@babel/types';

const Layout = (props) =>{
  return(
    <>
      <Navbar></Navbar>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}

function App() {
  return(    
    <Router>
      {/* <Navbar/>
      <FunctionalComponent count={1} step={1} title="Hi Functional component" description="Test description">
        <div className="alert alert-danger">
          Test 1
        </div>
      </FunctionalComponent>
      <FunctionalComponent count={2} step={3} title="Hi Functional component" description="Test description">
        <div className="alert alert-danger">
          Test 2
        </div>
      </FunctionalComponent> */}
      {/* <div> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/" exact>Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
          <Layout>
            <Profile />
          </Layout>
          </Route>
          <Route path="/users">
          <Layout>
            <Users />
          </Layout>
          </Route>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
