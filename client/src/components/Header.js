import { useState } from 'react';

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
  return (
    <>
      <h1 className='head'>
        <img src='http://placehold.jp/120x32.png?text=LOGO' alt='LOGO' />
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
      </h1>
    </>
  );
}

export default Header;
