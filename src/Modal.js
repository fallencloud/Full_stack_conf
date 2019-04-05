import React from 'react';

const Modal = () => {
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
                aria-describedby='emailHelp'
                placeholder='Enter your name'
              />
            </div>
            <div class='form-group'>
              <label for='email'>Email address</label>
              <input
                type='email'
                class='form-control'
                id='email'
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
              <label for='color-pun'>Color</label>
              <select multiple class='form-control' id='color-pun'>
                <option>Cornflower Blue (JS Pun shirt only)</option>
                <option>Dark Slate Gray (JS Pun shirt only)</option>
                <option>Gold (JS Pun shirt only)</option>
              </select>
            </div>
            <div class='form-group d-inline'>
              <label for='color-heart'>Color</label>
              <select multiple class='form-control' id='color-heart'>
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
                value='main-conference'
                id='main-conference'
              />
              <label class='form-check-label' for='main-conference'>
                Main Conference — $200
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
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
                value=''
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
                value=''
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
                value=''
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
                value=''
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
                value=''
                id='npm'
              />
              <label class='form-check-label' for='npm'>
                npm Workshop — Wednesday 1pm-4pm, $100
              </label>
            </div>
            <hr />
            <h3>Payment Info</h3>
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
};

export default Modal;
