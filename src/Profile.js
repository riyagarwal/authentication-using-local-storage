function Profile(props) {
  console.log("inside profile function");
  const { name, email, password } = props;
  return (
    <>
      <h3> Your Profile </h3>
      <p>
        <span>Full Name</span>: {name}{" "}
      </p>
      <p>
        <span>Email </span>: {email}{" "}
      </p>
      <p>
        <span>Password </span>: {password}{" "}
      </p>
      <button onClick={localStorage.clear}> Log Out </button>
    </>
  );
}

export default Profile;
