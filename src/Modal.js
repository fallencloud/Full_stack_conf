import React, { Component } from 'react';
import $ from 'jquery';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      role: '',
      size: '',
      design: '',
      colorPun: '',
      colorHeart: '',
      mainConference: '',
      frameworks: '',
      libraries: '',
      express: '',
      node: '',
      tools: '',
      npm: '',
      cardNumber: '',
      payZip: '',
      cvv: '',
      exy: '',
      exyYear: ''
    };
  }
  render() {
    return (
      <div
        class='modal fade'
        id='register'
        tabindex='-1'
        role='dialog'
        aria-labelledby='register form'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Register for Full Stack Conf
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body text-left'>
              <h3>Basic Information</h3>
              <div class='form-group'>
                <label for='name'>Name</label>
                <input
                  type='text'
                  class='form-control'
                  id='name'
                  name='name'
                  value={this.state.name}
                  aria-describedby='name'
                  placeholder='Enter your name'
                />
              </div>
              <div class='form-group'>
                <label for='email'>Email address</label>
                <input
                  type='email'
                  class='form-control'
                  id='email'
                  name='email'
                  value={this.state.email}
                  aria-describedby='emailHelp'
                  placeholder='Enter your email'
                />
              </div>
              <h3>Job Role</h3>
              <select class='role-select' id='role'>
                <option selected>Job Role</option>
                <option value='full-stack-js'>
                  Full Stack JavaScript Developer
                </option>
                <option value='front-end'>Front End Developer</option>
                <option value='back-end'>Back End Developer</option>
                <option value='designer'>Designer</option>
                <option value='student'>Student</option>
                <option value='other'>Other</option>
              </select>
              <hr />
              <h3>T-Shirt Info</h3>
              <div class='form-group d-inline'>
                <label for='size'>Size</label>
                <select multiple class='form-control' id='size'>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
              <div class='form-group d-inline'>
                <label for='size'>Design</label>
                <select multiple class='form-control' id='design'>
                  <option>Theme - JS Puns</option>
                  <option>Theme - I ♥ JS</option>
                </select>
              </div>
              <div class='form-group d-inline'>
                <label for='colorPun'>Color</label>
                <select multiple class='form-control' id='colorPun'>
                  <option>Cornflower Blue (JS Pun shirt only)</option>
                  <option>Dark Slate Gray (JS Pun shirt only)</option>
                  <option>Gold (JS Pun shirt only)</option>
                </select>
              </div>
              <div class='form-group d-inline'>
                <label for='colorHeart'>Color</label>
                <select multiple class='form-control' id='colorHeart'>
                  <option>Dim Grey (I ♥ JS shirt only)</option>
                  <option>Tomato (I ♥ JS shirt only)</option>
                  <option>Steel Blue (I ♥ JS shirt only)</option>
                </select>
              </div>
              <hr />
              <h3>Register for Activities</h3>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value='mainConference'
                  id='mainConference'
                />
                <label class='form-check-label' for='mainConference'>
                  Main Conference — $200
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value='frameworks'
                  id='frameworks'
                />
                <label class='form-check-label' for='frameworks'>
                  JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value='libraries'
                  id='libraries'
                />
                <label class='form-check-label' for='libraries'>
                  JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value='express'
                  id='express'
                />
                <label class='form-check-label' for='express'>
                  Express Workshop — Tuesday 9am-12pm, $100
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value='node'
                  id='node'
                />
                <label class='form-check-label' for='node'>
                  Node.js Workshop — Tuesday 1pm-4pm, $100
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value='tools'
                  id='tools'
                />
                <label class='form-check-label' for='tools'>
                  Build tools Workshop — Wednesday 9am-12pm, $100
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value='npm'
                  id='npm'
                />
                <label class='form-check-label' for='npm'>
                  npm Workshop — Wednesday 1pm-4pm, $100
                </label>
              </div>
              <hr />
              <h3>Credit Card Info</h3>
              <div class='form-group'>
                <label for='cardNumber'>Card Number:</label>
                <input
                  type='text'
                  class='form-control'
                  id='cardNumber'
                  aria-describedby='emailHelp'
                />
              </div>
              <div class='form-group'>
                <label for='payZip'>Zip Code:</label>
                <input
                  type='text'
                  class='form-control'
                  id='payZip'
                  aria-describedby='emailHelp'
                />
              </div>
              <div class='form-group'>
                <label for='cvv'>CVV:</label>
                <input
                  type='text'
                  class='form-control'
                  id='cvv'
                  aria-describedby='emailHelp'
                />
              </div>
              <div class='form-group'>
                <label for='exy'>Expiration Date:</label>
                <br />
                <select class='role-select' id='exy'>
                  <option selected>1 - January</option>
                  <option value='jan'>1-January</option>
                  <option value='feb'>2 - February</option>
                  <option value='mar'>3 - March</option>
                  <option value='apr'>4 - April</option>
                  <option value='may'>5 - May</option>
                  <option value='jun'>6 - June</option>
                  <option value='jul'>7 - July</option>
                  <option value='aug'>8 - August</option>
                  <option value='sep'>9 - September</option>
                  <option value='oct'>10 - October</option>
                  <option value='nov'>11 - November</option>
                  <option value='dec'>12 - December</option>
                </select>
              </div>
              <div class='form-group'>
                <label for='exyYear'>Expiration Date:</label>
                <br />
                <select class='role-select' id='exyYear'>
                  <option selected>2019</option>
                  <option value='2019'>2019</option>
                  <option value='2020'>2020</option>
                  <option value='2021'>2021</option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                </select>
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='button' class='btn btn-danger'>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
