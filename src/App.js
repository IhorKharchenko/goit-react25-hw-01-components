import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfilesList from "./components/Profile/ProfilesList";
import Statistics from "./components/Statistics/Statistics";
import users from "./components/user.json";
import statisticalData from "./components/statistical-data.json";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ProfilesList users={users} />
      <Statistics title="Upload stats" statisticalData={statisticalData} />
    </div>
  );
}

export default App;
