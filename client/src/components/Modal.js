import { dbService } from '../firebase_assets';
import axios from 'axios';
import React, { useState } from 'react';

const Modal = ({ toggleModal, isModalOn, userInputUrl, retrieveRegisteredData}) => {
  const categories = [
    {
      lable: `ニュース`,
      tag: `news`,
    },
    {
      lable: `スポーツ`,
      tag: `sport`,
    },
    {
      lable: `ゲーム`,
      tag: `game`,
    },
    {
      lable: `ブック`,
      tag: `book`,
    },
    {
      lable: `映画`,
      tag: `movie`,
    },
    {
      lable: `音楽`,
      tag: `music`,
    },
  ];

  const [genre, setGenre] = useState('');

  const formData = {
    url: userInputUrl,
    genre: genre
  }

  const getGenre = (event) => {
    setGenre(event.target.value)
  }

  const disableModal = (event) => {
    if (event.target.className.indexOf('modal-wrapper') === -1) return;
    toggleModal();
  };

  const register = async (event) => {
    event.preventDefault(); 
    if( genre.length === 0 ) return;

    let registeredData = {};

    try {
      const response = await axios.post(event.target.action, formData);
      registeredData = await response.data;
      await console.log(await registeredData);
      retrieveRegisteredData(registeredData);
    } catch (error) {
      console.log('Error occured during axios.');
      throw error;
    }

    toggleModal();
    await dbService.collection('bookmarks').add(registeredData);
  };

  return (
    <div
      className={`modal-wrapper${isModalOn ? ' active' : ''}`}
      onClick={disableModal}
    >
      <div className='modal__area'>
        <p className='modal__text'>カテゴリを選んでください</p>
        <p className='modal__text-url'>
          {userInputUrl}
        </p>
        <form onSubmit={register}  method="POST" action="/register">
          <ul className='modal__item'>
            {categories.map((category) => {
              return (
                <li key={category.tag}>
                  <label>
                    <input
                      className='input__radio'
                      type='radio'
                      name='categories'
                      value={category.tag}
                      onChange={getGenre}
                    />
                    {category.lable}
                  </label>
                </li>
              );
            })}
          </ul>
          <button className='modal__submit' type='submit'>登録</button>
          <input type="hidden" name="url" value={userInputUrl} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
