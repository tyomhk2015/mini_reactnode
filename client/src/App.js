import GenreRouter from './components/GenreRouter';
import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState(false);
  const [userInputUrl, setUserInputUrl] = useState('');
  const [newArticle, setNewArticle] = useState([]);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const retrieveUrl = (userInput) => {
    setUserInputUrl(userInput);
  };

  const retrieveRegisteredData = (registeredData) => {
    const addedArticles = [registeredData, ...newArticle];
    setNewArticle(addedArticles);
  }

  return (
    <>
      <Header toggleModal={toggleModal} retrieveUrl={retrieveUrl} />
      <GenreRouter newArticle={newArticle}/>
      <Modal
        toggleModal={toggleModal}
        isModalOn={modal}
        userInputUrl={userInputUrl}
        retrieveRegisteredData={retrieveRegisteredData}
      />
    </>
  );
}

export default App;
