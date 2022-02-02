import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <ul className='globalnavi'>
        <li>
          <NavLink to='/'>すべて</NavLink>
        </li>
        <li>
          <NavLink to='/news'>ニュース</NavLink>
        </li>
        <li>
          <NavLink to='/sports'>スポーツ</NavLink>
        </li>
        <li>
          <NavLink to='/game'>ゲーム</NavLink>
        </li>
        <li>
          <NavLink to='/book'>ブック</NavLink>
        </li>
        <li>
          <NavLink to='/music'>音楽</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
