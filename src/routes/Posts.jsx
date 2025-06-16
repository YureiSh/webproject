import './App.css'
import PostsList from '../components/PostsList'
import { Outlet } from 'react-router-dom';

const Posts = () => {

  return (
    <>
    <Outlet />
      <main>
        <PostsList  />
      </main>
    </>
  );
};

export default Posts

export const loader = async () => {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
};

