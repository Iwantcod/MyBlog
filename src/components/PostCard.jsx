import React, { useState, useCallback } from "react";
import { LikeTwoTone, CommentOutlined, EllipsisOutlined, LikeOutlined } from '@ant-design/icons';
import { Input, Avatar, Card, Button, Popover } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { removeAction } from "../reducer/post";
import { FileImageOutlined } from '@ant-design/icons';
const { Meta } = Card;

// Index.js에서 redux의 post.js에 있는 postList 배열 내의 정보(게시글)를 순회함
// 각 순회마다 각 게시글의 정보를 props를 통해 넘겨받고, 그 정보를 PostCard를 통해 게시글의 형태로 구현

const PostCard = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [like, setLike] = useState(false);
  const { userInfo } = useSelector(state => state.user);
  const { isLoggedIn } = useSelector(state => state.user);

  const onChangeText = (e) => {
    setText(e.target.value);    // 입력이 가해질 때마다 text 상태 갱신
  }
  const onChangeUrl = (e) => {
    setUrl(e.target.value)
  }


  const onToggle = useCallback((prev) => {
    setLike((prev) => !prev);
  }, []);

  const onClickRm = () => {   // 삭제버튼 기능
    console.log(props.id);
    dispatch(removeAction(props.id));
  }

  const onClickUpdate = () => {   // 수정버튼 기능 구현중...
    inputArea = <>
      <Input.TextArea rows={4} placeholder="Write!" value={text} onChange={onChangeText} name="text"/>
        <Input size="small" placeholder="Image URL" value={url} onChange={onChangeUrl} prefix={<FileImageOutlined />} style={{marginTop: 10}}/>
        <Button type="primary" htmlType="submit" style={{
        float: 'right',
        marginTop: 15
        }}>
          Post
      </Button>
    </>
  }

  let inputArea = props.postText;

  const content = (
    <div>
      <Button danger>신고</Button>
      {isLoggedIn && userInfo.username === props.postUser ? <Button type="primary" style={{margin: 10}} onClick={onClickUpdate}>수정</Button> : <></>}
      {isLoggedIn && userInfo.username === props.postUser ? <Button type="primary" danger onClick={onClickRm}>삭제</Button> : <></>}
    </div>
  );

  return (
    <Card
    cover={
      props.img ? <img alt="example" src={props.img}/> : <></>
    }
    actions={[
      like ? <LikeTwoTone key="likeOn" onClick={onToggle} twoToneColor="#0000FF"/> : <LikeOutlined key="likeOff" onClick={onToggle}/>,
      <CommentOutlined key="comment"/>,
      <Popover content={content} trigger="hover">
        <EllipsisOutlined />
      </Popover>,
    ]}
    style={{marginBottom: 25}}
    >
      <Meta
        avatar={<Avatar>{props.postUser[0]}</Avatar>}
        title={props.postUser}
      />
      <p>
        {inputArea}
      </p>
    </Card>

  )
}


export default PostCard;