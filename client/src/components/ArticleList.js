import { dbService } from '../firebase_assets';
import React from 'react';

function ArticleList({ articles, sendRegisteredData}) {

  const deleteArticle = async (event) => {
    event.target.parentElement.remove();
    await dbService.doc(`bookmarks/${event.target.getAttribute('data-url')}`).delete();
  }

  return (
    <>
      <ul className='articleList'>
        {articles.map((article, index) => {
          return (article.id &&
            <li key={'articleItem'+index} className='articleListItem'>
              <button onClick={deleteArticle} className='articleListDeleteBtn' data-url={article.id}></button>
              <a href={article.url} className="articleListLink" target="_blank">
                <div
                  className='articleListImgWrapper'
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                ></div>
                <div className='articleListTextWrapper'>
                  <h2 className='articleListTitle'>{article.title}</h2>
                  <div className='articleListArticleDetailWrapper'>
                    <p>
                      {new Date(article.createdAt).toDateString()}
                    </p>
                    <p>＃{article.genre}</p>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
