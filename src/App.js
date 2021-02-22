import React from "react";
import logo from "./logo.svg";
import "./App.css";
import user from "./components/user.json";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Profile user={user} />
    </div>
  );
}

export default App;
