import React from 'react';
import './App.css';
// import ImageForm from './ImageForm';
// import EditDetailForm from "./EditDetailForm";
// import Gallery from './Gallery';
import Home from './Home/Home';
import ContactUs from './ContactUs/ContactUs';
import Analytics from './Analytics/Analytics';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path = "/contact">
            {/* {a form for adding new images.} */}
            < ContactUs />
            {/* < ImageForm /> */}
          </Route>

          <Route path = "/analytics">
            {/* {list details of images} */}
            {/* <CardInformation /> */}
            < Analytics />
          </Route>

          <Route path = "/">
            {/* {list All Gallery Images as Cards(3 cards per row)} */}
            {/* < Gallery /> */}
            < Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
