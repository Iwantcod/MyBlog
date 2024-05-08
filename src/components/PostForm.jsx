import React, { useState } from "react";
import { Input, Form, Button } from 'antd';
import { useDispatch } from "react-redux";
import { postRequestAction } from "../reducer/post";

const PostForm = () => {
  const [text, setText] = useState('');   // 게시글 내용
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    console.log(text);  // 입력한 내용을 콘솔에 출력
    dispatch(postRequestAction(text));
  }
  const onSubmitFailed = (errorInfo) => {   // submit 에러 발생 시 실행되는 함수. 에러내용 콘솔에 출력
    console.log('Failed:', errorInfo);
  }
  const onChangeText = (e) => {
    setText(e.target.value);    // 입력이 가해질 때마다 text 상태 갱신
  }

  return (
    <Form
    onFinish={onSubmit} 
    onFinishFailed={onSubmitFailed}

    >
      <Form.Item>
        <Input.TextArea rows={4} placeholder="Write!" value={text} onChange={onChangeText}/>
        <Button type="primary" htmlType="submit" style={{
        float: 'right',
        marginTop: 10
        }}>
          Post
      </Button>
      </Form.Item>
      
    </Form>
  )
};


export default PostForm;