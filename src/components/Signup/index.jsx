import React from 'react';

const Signup = () => {
  return <div>

    <h4>Signup </h4>
    <form >

      <div className="id">
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

      <div className="userid">
        <input
          type="text"
          name="userid"
          placeholder="user id "
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="username">
        <input
          type="text"
          name="userid"
          placeholder="user id "
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="firstname">
        <input
          type="text"
          name="firstname"
          placeholder="first name "
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="lastname">
        <input
          type="text"
          name="lastname"
          placeholder="last name"
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="email">
        <input
          type="email"
          name="email"
          placeholder="email"
        // onChange={/*handleChange*/}
        />

      </div>

      <div className="password">
        <input
          type="password"
          name="password"
          placeholder="Password"
        // onChange={/*handleChange*/}
        />

      </div>


      <div className="submit">
        <button>Log in</button>
      </div>
    </form>

  </div>

};

export default Signup;
