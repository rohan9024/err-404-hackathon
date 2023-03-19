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
import Recruiter from './components/Recruiter/Recruiter';
import { useMemo, useState } from 'react';
import { UserContext } from "./contexts/loginContext";
import AdminLogin from './components/AdminLogin';
import RecruiterLogin from './components/RecruiterLogin';
import Candidate from './components/Candidate/Candidate';
import CandidateLogin from './components/Candidate/CandidateLogin';
ReactSession.setStoreType("localStorage");

function App() {
  const [ADMIN, SETADMIN] = useState(true)
  const [CANDIDATE, SETCANDIDATE] = useState(true)
  const [RECRUITER, SETRECRUITER] = useState(true)

  const providerValue = useMemo(() => ({  CANDIDATE, SETCANDIDATE, RECRUITER, SETRECRUITER }))

  return (
      <UserContext.Provider value={providerValue}>
    <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/recruiter" element={<Recruiter />}></Route>
          <Route exact path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route exact path="/RecruiterLogin" element={<RecruiterLogin />}></Route>
          <Route exact path="/candidate" element={<Candidate />}></Route>
          <Route exact path="/candidatelogin" element={<CandidateLogin />}></Route>
          {/* <Route exact path="/candidatelogin" element={<CandidateLogin />}></Route>
          <Route exact path="/candidatelogin" element={<CandidateLogin />}></Route> */}
        </Routes>
    </Router>
      </UserContext.Provider>

  );
}

export default App;