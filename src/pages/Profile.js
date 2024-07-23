import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const {isLoggedIn} = useSelector(state => state.user);

  return (
    isLoggedIn ? 
    <div>
      Profile page...
    </div> : <></>
  )
};

export default Profile;