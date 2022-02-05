import { dbService } from '../firebase_assets';
import React from 'react';
import { useLocation } from 'react-router-dom';

function ArticleList({ articles }) {
  const pathName = useLocation().pathname;

  let filteredArticles = [];

  const filterArticles = () => {
    articles.forEach((article) => {
      pathName.includes(article.genre) && filteredArticles.push(article);
    });
  }

  if (pathName !== '/') {
    filterArticles();
  } else {
    filteredArticles = [...articles];
  }

  const deleteArticle = async (event) => {
    event.target.parentElement.remove();
    await dbService
      .doc(`bookmarks/${event.target.getAttribute('data-url')}`)
      .delete();
  };

  return (
    <>
      <ul className='articleList'>
        {filteredArticles.map((article, index) => {
          return (
            article.id && (
              <li key={'articleItem' + index} className='articleListItem'>
                <button
                  onClick={deleteArticle}
                  className='articleListDeleteBtn'
                  data-url={article.id}
                ></button>
                <a
                  href={article.url}
                  className='articleListLink'
                  target='_blank'
                  rel="noreferrer"
                >
                  <div
                    className='articleListImgWrapper'
                    style={{
                      backgroundImage: `url(${article.image})`,
                    }}
                  ></div>
                  <div className='articleListTextWrapper'>
                    <h2 className='articleListTitle'>{article.title}</h2>
                    <div className='articleListArticleDetailWrapper'>
                      <p>{new Date(article.createdAt).toDateString()}</p>
                      <p>#{article.genre}</p>
                    </div>
                  </div>
                </a>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
