import React from "react";

const Signup = () => {
  return (
    <div class="row py-4 text-muted">
      <div class="col-md col-xl-5">
        <p>
          <strong>About Treehouse</strong>
        </p>
        <p>
          Treehouse brings affordable technology education to people everywhere
          to help them achieve their dreams and change the world.
        </p>
      </div>
      <div class="col-md col-xl-5 ml-auto">
        <p>
          <strong>Stay up-to-date on Full Stack Conf</strong>
        </p>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Email" />
          <span class="input-group-btn">
            <button class="btn btn-primary" type="button">
              Sign up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
