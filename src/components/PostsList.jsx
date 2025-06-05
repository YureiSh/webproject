import Post from "./Post";
import classes from './PostsList.module.css';
import NewPost from "./NewPost";
import Modal from './Modal';
import { useState } from "react";

const PostsList = ({isPosting, onStopPosting }) => {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    };

    return (
        <>
            {isPosting ? (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost = {addPostHandler}/>
                </Modal>
            ) : null}
            {posts.length > 0 ? (            
            <ul className={classes.posts}>
                {posts.map((post)=> <Post key={post.body} author= {post.author} body={post.body} />)}
            </ul>)
            : <div style={{ textAlign:'center', color:'white'}}> <h1> There are no posts</h1> </div>}
        </>
    ); 
};
export default PostsList;