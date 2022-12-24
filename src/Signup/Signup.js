import { useState } from "react";
import "./Signup.css";
import Profile from "../Profile";

function Signup() {
  let [data, setData] = useState({});
  let [dataArr, setDataArr] = useState([]);
  return (
    <>
      <h3> Sign Up</h3>
      <div className="input">
        <input
          placeholder="Full Name"
          onChange={(event) => {
            setData = { 'name': event.target.value };
            setDataArr = [...dataArr, data];
            console.log(data);
          }}
        />
        <input
          placeholder="Email"
          onChange={(event) => {
            setData = { 'email': event.target.value };
            setDataArr = [...dataArr, data];
          }}
        />
        <input
          placeholder="Password"
          onChange={(event) => {
            setData = { 'password': event.target.value };
            setDataArr = [...dataArr, data];
          }}
        />
        <input
          placeholder="Confirm Password"
          onChange={(event) => {
            setData = { 'confirmPassword': event.target.value };
            setDataArr = [...dataArr, data];
          }}
        />
        <button
          onClick={(data) => {
            console.log("Profile called");
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
