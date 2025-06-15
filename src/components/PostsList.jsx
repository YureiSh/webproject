import Post from "./Post";
import classes from './PostsList.module.css';

import { useState, useEffect } from "react";

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
            if(response.ok){
                console.log("the response is OK")
            };
        }

        fetchPosts();
    }, []);

    const addPostHandler = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    };

    return (
        <>

            {!isFetching && posts.length > 0 ? (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.body} author={post.author} body={post.body} />
                    ))}
                </ul>
            ) : !isFetching ? (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h1>There are no posts</h1>
                </div>
            ) : null}

            {isFetching && (
                <div>
                    <h4>Posts are loading...</h4>
                </div>
            )}
        </>


    );
};
export default PostsList;