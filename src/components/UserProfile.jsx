import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Card, Button } from 'antd';
import styled from "styled-components";
import { logOutAction } from "../reducer/user";
const { Meta } = Card;



const UserProfile = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector(state => state.user);

  const onClickBtn = (e) => {   // 로그아웃 버튼 클릭 이벤트
    dispatch(logOutAction());
  }
  
  const StyledImage = styled.img`
  height: 150px;
  `

  return (
    <div>
      <Card
        cover={
          <StyledImage
            alt="example"
            src="https://images.unsplash.com/photo-1542637297-1318423100cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
          
        ]}
      >
        
        <Meta
          avatar={<Avatar>{userInfo.username[0]}</Avatar>}
          title={userInfo.username}
          description="Hello!"
          style={{
          }}
      />
      <Button
        htmlType="button"
        onClick={onClickBtn}
        style={{ float: 'right' }}>
          LogOut
      </Button>
       
      </Card>
    </div>
  )
};


export default UserProfile;