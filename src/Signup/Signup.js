import { useState } from "react";
import "./Signup.css";
import Profile from "../Profile";

function Signup() {
  const [data, setData] = useState([]);
  return (
    <>
      <h3> Sign Up</h3>
      <div className="input">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button
          onClick={(data) => {
            console.log('Profile called');
            return <Profile data={data} />;
          }}
        >
          {" "}
          Sign Up{" "}
        </button>
      </div>
    </>
  );
}

export default Signup;
