import MainHeader from './components/MainHeader';
import './App.css'
import PostsList from './components/PostsList'
import { useState } from 'react';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
};
  const hideModalHandler = () => {
    setModalIsVisible(false);
};

  return (
    <>
    <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting = {modalIsVisible} onStopPosting = {hideModalHandler} />
      </main>
    </>
  );
};

export default App
