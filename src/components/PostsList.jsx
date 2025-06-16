import Post from "./Post";
import classes from './PostsList.module.css';
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
    const posts = useLoaderData();

    return (
        <>

            {posts.length > 0 ? (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.body} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            ) : (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h1>There are no posts</h1>
                </div>
            )}



        </>


    );
};
export default PostsList;