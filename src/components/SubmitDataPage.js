import React from "react";

const SubmitDataPage = ({ userData }) => {
  return (
    <div>
      <h2>Submit Data Page</h2>
      <p>Welcome, {userData.username}!</p>
      <p>Your password, {userData.password}!</p>
      {/* You can add form elements or other content for submitting data */}
    </div>
  );
};

export default SubmitDataPage;
