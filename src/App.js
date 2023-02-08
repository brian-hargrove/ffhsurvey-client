import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./compoonents/Footer";
import Intro from "./compoonents/Intro";
// import Questionone from "./compoonents/Questionone";
// import Questiontwo from "./compoonents/Questiontwo";
// import { Form, Button } from "reactstrap";
// import SurveyOver from "./compoonents/SurveyOver";
import PreConfSurvey from "./compoonents/PreConfSurvey";

function App() {
  return (
    <>
      <Intro></Intro>
      <PreConfSurvey></PreConfSurvey>
      {/* <SurveyOver></SurveyOver> */}
      {/* <Questionone></Questionone> */}
      <Router></Router>
      <Footer></Footer>
    </>
  );
}

export default App;
