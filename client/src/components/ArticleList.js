import React from 'react';

function ArticleList({ articles }) {
  return (
    <>
      <ul className='articleList'>
        {articles.map((article, index) => {
          return (
            <li key={'articleItem'+index} className='articleListItem'>
              <button onClick={null} className='articleListDeleteBtn'></button>
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
                    {new Date(article.createdAt).toString()} | { 77 }件
                  </p>
                  <p>＃{'TEMP'}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
