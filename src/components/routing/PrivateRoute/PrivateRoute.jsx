import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//import Home from '@views/Home/Home';
import EjerciciosJs from '@views/EjerciciosJs/EjerciciosJs';
import ErrorPage from '@views/ErrorPage/ErrorPage';

export default class PrivateRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route exact path="/" element={<EjerciciosJs/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
      );
    }
  }
