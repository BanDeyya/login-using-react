import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import SubmitDataPage from "./components/SubmitDataPage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (userData) => {
    // Perform any additional logic you need upon login
    setLoggedIn(true);
    setUserData(userData);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <SubmitDataPage userData={userData} />
      )}
    </div>
  );
};

export default App;
