import PostForm from "../components/PostForm";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";

const Home = (props) => {

  const { isLoggedIn } = useSelector(state => state.user);
  const { postList } = useSelector(state => state.post);


  
  return (
    <>
    <p>
      {isLoggedIn ? <PostForm /> : <></>}
    </p>
    <p>
      {postList.map((v) => {
        return <PostCard key={v.id} id={v.id} postUser={v.postUser} postText={v.postText} img={v.img}/>
      })}
    </p>

    </>

  )
};


export default Home;