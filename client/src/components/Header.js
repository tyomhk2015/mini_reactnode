import { useState } from 'react';
import Image from '../img/logo.svg';

function Header({ toggleModal, retrieveUrl }) {
  const [url, setUrl] = useState('');

  const updateUrl = (event) => {
    const inputUrl = event.target.value.trim();
    setUrl(inputUrl);
  };

  const openModal = async (event) => {
    event.preventDefault();
    if (url.length === 0) return;
    toggleModal();
    retrieveUrl(url);
    setUrl('');
  };
  const spOpenModal = async (event) => {
    event.preventDefault();
    toggleModal();
  };
  return (
    <>
      <div className='head'>
        <h1>
          <img src={Image} alt='LOGO' />
        </h1>
        <div className='form__url'>
          <input
            className='input__text'
            type='text'
            name='url'
            placeholder='URL'
            value={url}
            onChange={updateUrl}
          />
          <button className='input__submit' onClick={openModal}>
            登録
          </button>
        </div>
        <div className='menuBtn'>
          <a href="#" onClick={spOpenModal}></a>
        </div>
      </div>
    </>
  );
}

export default Header;
