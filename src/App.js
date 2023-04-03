import React, { useState } from 'react'
import './css/common.scss'
import './css/movie.scss'
import { Link, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Glist from './Glist';
import Detail from './Detail';
import SearchResult from './SearchResult';
import Home from './Home';

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
        <Route path="/" element={null}>
          <Route index element={<Home />}></Route>
          <Route path="main" element={<Main />}>
            {
              genreList.map((it, idx) => {
                return (
                  <Route path={`${it}`} element={<Glist genre={it} limit={20} />} key={idx}>

                  </Route>
                )
              })
            }
            <Route path="detail/:id" element={<Detail />} />
          </Route>



          <Route path="/search" element={<SearchResult limit={50} />}>
            <Route path="/search/:id" element={<Detail />} />
          </Route>
        </Route>


      </Routes>

      {/* <SearchResult /> */}

      {/* <All /> */}


    </div>
  )
}

export default App