import { useLayoutEffect, useState } from 'react';
import { dbService } from '../firebase_assets';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ArticleList from './ArticleList';
import Navigation from './Navigation';

const GenreRouter = ({newArticle}) => {
  const [articles, setArticles] = useState([]);

  useLayoutEffect(()=>{
    const querySnapShot = dbService.collection('bookmarks').orderBy('createdAt', 'desc').get();
    querySnapShot.then(querySnapShot => {
      const loadedArticles = querySnapShot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      });
      if(newArticle.length > 0) {
        setArticles([...newArticle, ...loadedArticles]);
      } else {
        setArticles(loadedArticles);
      }
    })
  },[newArticle]);

  return (
    <>
      <BrowserRouter base='/'>
        <Navigation />
        <Routes>
          <>
            <Route exact path='/news' element={<ArticleList genre='ニュース' articles={articles} />} />
            <Route exact path='/sports' element={<ArticleList genre='スポーツ' articles={articles} />} />
            <Route exact path='/game' element={<ArticleList genre='ゲーム' articles={articles} />} />
            <Route exact path='/book' element={<ArticleList genre='ブック' articles={articles} />} />
            <Route exact path='/music' element={<ArticleList genre='音楽' articles={articles} />} />
            <Route exact path='/' element={<ArticleList genre='すべて' articles={articles}/>} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default GenreRouter;
