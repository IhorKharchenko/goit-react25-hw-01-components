import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfilesList from "./components/Profile/ProfilesList";
import users from "./components/user.json";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ProfilesList users={users} />
    </div>
  );
}

export default App;
