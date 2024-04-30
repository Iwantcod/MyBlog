import React from "react";
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useState } from "react";



const AppLayout = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);    // 임시로 만든것

  const [profile, setProfile] = useState({});

  const dummyUser = {
    username: null,
  };

  const items = [
    {
      label: (
        <Link to="/">Home</Link>
      ),
      key: "home",
    },
    {
      label: (
        <Link to="/profile">Profile</Link>
      ),
      key: "profile",
    },
    {
      label: (
        <Link to="/signup">Signup</Link>
      ),
      key: "signup",
    },
  ];

  return (
    <>
      <Menu 
      mode="horizontal"
      items={items}
      >
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn
          ? <UserProfile setIsLoggedIn={setIsLoggedIn} profile={profile} setProfile={setProfile} dummyUser={dummyUser}/>
          : <LoginForm setIsLoggedIn={setIsLoggedIn} setProfile={setProfile} dummyUser={dummyUser}/>}
        </Col>
        <Col xs={24} md={12}>
        {children}
        </Col>
        <Col xs={24} md={6}>
            <a href="https://github.com/Iwantcod" target="_blank">Iwantcod's Github</a>
        </Col>
        
      </Row>
      
    </>
  );
}

export default AppLayout;