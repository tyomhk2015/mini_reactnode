import { dbService } from '../firebase_assets';
import axios from 'axios';
import {useState} from 'react';

function Header() {
  const [url, setUrl] = useState('');

  const updateUrl = (event) => {
    const inputUrl = event.target.value.trim();
    setUrl(inputUrl);
  }

  const register = async (event) => {
    event.preventDefault();
    if (url.length === 0) return;

    let bookmarkData = {};
    try {
      const response = await axios.post(event.target.action, {url: url});
      bookmarkData = await response.data;
      await console.log(await bookmarkData);
    } catch (error) {
      console.log('Error occured during axios.');
      throw error;
    }

    await dbService.collection('bookmarks').add(bookmarkData);
    event.target.url.value = '';
  }
  return (
    <>
      <h1 className="head">
        <img src='http://placehold.jp/120x32.png?text=LOGO' alt='LOGO' />
        <form className='form__url' onSubmit={register} action='/register'>
          <input
            className='input__text'
            type='text'
            name='url'
            placeholder='URL'
            value={url}
            onChange={updateUrl}
          />
          <button className='input__submit' type='submit'>登録</button>
        </form>
      </h1>
    </>
  );
}

export default Header;
