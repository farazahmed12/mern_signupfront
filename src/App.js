import React from "react";
import "./App.css";

function App() {
  const [state, setState] = React.useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const changeFullname = (e) => {
    setState({
      ...state,
      fullName: e,
    });
  };
  const changeUsername = (e) => {
    setState({
      ...state,
      username: e,
    });
  };
  const changeEmail = (e) => {
    setState({
      ...state,
      email: e,
    });
  };
  const changePassword = (e) => {
    setState({
      ...state,
      password: e,
    });
  };
  return (
    <div className="container">
      <div className="form-div">
        <form>
          <input
            placeholder="Full Name"
            type="text"
            onChange={(e) => changeFullname(e.target.value)}
            value={state.fullName}
            className="form-control form-group"
          />
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => changeUsername(e.target.value)}
            value={state.username}
            className="form-control form-group"
          />
          <input
            placeholder="E-mail"
            type="text"
            onChange={(e) => changeEmail(e.target.value)}
            value={state.email}
            className="form-control form-group"
          />
          <input
            placeholder="Password"
            type="text"
            onChange={(e) => changePassword(e.target.value)}
            value={state.password}
            className="form-control form-group"
          />

          <input
            className="btn btn-danger btn-block"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
