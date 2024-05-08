import React, { useState, useCallback } from "react";
import { LikeTwoTone, CommentOutlined, EllipsisOutlined, LikeOutlined } from '@ant-design/icons';


import { Avatar, Card } from 'antd';
const { Meta } = Card;


const PostCard = (props) => {
  const [like, setLike] = useState(false);

  const onToggle = useCallback((prev) => {
    setLike((prev) => !prev);
  }, []);

  return (
    <Card
    cover={
      <img
        alt="example"
        src={props.img}
      />
    }
    actions={[
      like ? <LikeTwoTone key="likeOn" onClick={onToggle} twoToneColor="#0000FF"/> : <LikeOutlined key="likeOff" onClick={onToggle}/>,
      <CommentOutlined key="comment"/>,
      <EllipsisOutlined key="ellipsis" />,
    ]}
    style={{marginBottom: 25}}
    >
      <Meta
        avatar={<Avatar>{props.postUser[0]}</Avatar>}
        title={props.postUser}
        description={props.postText}
      />
    </Card>

  )
}


export default PostCard;