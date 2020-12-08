import React from 'react';

const Login = () => {
  return <div>

    <h4>Login </h4>
    <form >
      <div className="name">
        <input
          type="text"
          name="name"
          placeholder="Name"
          // onChange={/*handleChange*/}
          autoComplete="off"
        />

        {/* {errors.name.length > 0 && (
          <span className="error">{errors.name}</span>
        )} */}
      </div>


      <div className="password">
        <input
          type="password"
          name="password"
          placeholder="Password"
        // onChange={/*handleChange*/}
        />

        {/* {errors.password.length > 0 && (
          <span className="error">{errors.password}</span>
        )} */}
      </div>



      {/* <div className="info">
        <small>Password must be eight characters in length.</small>
      </div> */}

      <div className="submit">
        <button>Log in</button>
      </div>
    </form>

  </div>
};

export default Login;
