import React, { useState } from 'react'
import './css/common.scss'
import './css/movie.scss'
import { Link, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Glist from './Glist';
import Detail from './Detail';
import SearchResult from './SearchResult';
import Home from './Home';
import Layout from './Layout';
import Footer from './Footer';

const App = () => {

  const genreList = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Romance",
    "Thriller",
    "Western"
  ];

  const [movie, setMovie] = useState([]);

  return (
    <div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Layout genreList={genreList} />}>
          <Route path='/main' element={<Main />}>
            <Route path={`detail/:id`} element={<Detail />} ></Route>
          </Route>

          {
            genreList.map((it, idx) => {
              return (
                <Route path={`${it}`} element={<Glist genre={it} limit={20} />} key={idx}>
                  <Route path={`detail/:id`} element={<Detail />} />
                </Route>
              )
            })
          }
        </Route>


        <Route path="/search" element={<SearchResult limit={50} genreList={genreList} />}>
          <Route path="/search/:id" element={<Detail />} />
        </Route>



      </Routes>
      <Footer />
      {/* <SearchResult /> */}

      {/* <All /> */}


    </div>
  )
}

export default App