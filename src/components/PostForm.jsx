import React, { useState } from "react";
import { Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../reducer/post";
import { FileImageOutlined } from '@ant-design/icons';


const PostForm = () => {
  const [text, setText] = useState('');   // 게시글 내용
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);


  const onSubmit = (e) => {
    if(text !== '') {
      dispatch(postAction([text, url, userInfo.username]));
      setText('');
      setUrl('');
    } else {
      alert("게시글 내용을 입력해주세요.");
    }
  }

  const onSubmitFailed = (errorInfo) => {   // submit 에러 발생 시 실행되는 함수. 에러내용 콘솔에 출력
    console.log('Failed:', errorInfo);
  }

  const onChangeText = (e) => {
    setText(e.target.value);    // 입력이 가해질 때마다 text 상태 갱신
  }
  const onChangeUrl = (e) => {
    setUrl(e.target.value)
  }


  return (
    <Form
    onFinish={onSubmit} 
    onFinishFailed={onSubmitFailed}
    >
      <Form.Item>
        <Input.TextArea rows={4} placeholder="Write!" value={text} onChange={onChangeText} name="text"/>
        <Input size="small" placeholder="Image URL" value={url} onChange={onChangeUrl} prefix={<FileImageOutlined />} style={{marginTop: 10}}/>
        <Button type="primary" htmlType="submit" style={{
        float: 'right',
        marginTop: 15
        }}>
          Post
      </Button>
      </Form.Item>
      
    </Form>
  )
};


export default PostForm;