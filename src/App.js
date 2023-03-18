import logo from './logo.svg';
import './fonts/NeueHaasDisplayBlack.ttf';
// import Top from './components/Top';
// import Top2 from './components/Top2';
// import Login from './components/Login';
// import Genre from './components/Genre';
// import Article from './components/Article';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homepage from './components/Homepage';
// import Trending from './components/Trending';
// import Signup from './components/Signup';
import { ReactSession } from 'react-client-session';
import Signup from './components/Signup';
import Login from './components/Login';
ReactSession.setStoreType("localStorage");




function App() {
  
  return (
    <Router>
          <Routes>
          <Route exact path="/" element={ <Homepage />}></Route> 
          <Route exact path="/login" element={ <Login /> }></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          
      </Routes>
    </Router>
  );
}

export default App;