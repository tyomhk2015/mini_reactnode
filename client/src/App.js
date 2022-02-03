import GenreRouter from './components/GenreRouter';
import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState(false);
  const [userInputUrl, setUserInputUrl] = useState('');

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const retrieveUrl = (userInput) => {
    setUserInputUrl(userInput);
  };

  return (
    <>
      <Header toggleModal={toggleModal} retrieveUrl={retrieveUrl} />
      <GenreRouter />
      <Modal
        toggleModal={toggleModal}
        isModalOn={modal}
        userInputUrl={userInputUrl}
      />
    </>
  );
}

export default App;
