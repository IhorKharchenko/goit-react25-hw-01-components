import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfilesList from "./components/Profile/ProfilesList";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import users from "./components/db/user.json";
import statisticalData from "./components/db/statistical-data.json";
import friends from "./components/db/friends.json";
import transactions from "./components/db/transactions.json";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ProfilesList users={users} />
      <Statistics title="Upload stats" statisticalData={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
