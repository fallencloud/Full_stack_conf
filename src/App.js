import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Signup from "./Signup";
import Footer from "./Footer";
import Modal from "./Modal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <div class="container pt-4 text-left">
          <About />
          <h1 id="speakers" class="display-4 text-center my-5 text-muted">
            Speakers
          </h1>
          <Speakers />
          <h1 id="schedule" class="display-4 text-center my-5 text-muted">
            Schedule
          </h1>
          <Schedule />
          <button
            type="button"
            class="btn btn-outline-info btn-lg d-block mx-auto my-5"
            data-toggle="modal"
            data-target="#register"
          >
            Don't Miss Out, Register Now
          </button>
          <hr />
          <Signup />
          <hr />
          <Footer />
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
