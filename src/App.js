import * as React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Signup from './signup/Signup';
import Signin from './signin/Signin';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
          <Routes>
            <Route path="/">
            <Route index element={<Navigate to="/signup" />} />
              <Route path="signup">
                <Route index element={<Signup />} />
              </Route>
              <Route path="signin">
                <Route index element={<Signin />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
