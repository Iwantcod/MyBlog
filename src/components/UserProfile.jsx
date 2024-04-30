import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';
const { Meta } = Card;


const UserProfile = (props) => {

  const setProfile = props.setProfile;
  const setIsLoggedIn = props.setIsLoggedIn;
  const dummyUser = props.dummyUser;

  const onClickBtn = (e) => {   // 로그아웃 버튼 클릭 이벤트
    setIsLoggedIn(false);
    dummyUser.username = null;    // dummyUser의 username값을 null값으로 만든다.
    setProfile(dummyUser);      // 그렇게 만들어진 dummyUser을 Profile로 업데이트한다. (즉 로그아웃된 상태.)
  }
  

  return (
    <div>
      <Card
        cover={
          <img
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
          avatar={<Avatar>{props.profile.username[0]}</Avatar>}
          title={props.profile.username}
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