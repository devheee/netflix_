import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import All from './All';
import Gall from './Gall';
import Load from './Load';

const Glist = ({ genre, limit }) => {
    //데이터 가져오기
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);
    const MS = useRef(null);
    const handleImgError = (e) => {
        e.target.src = process.env.PUBLIC_URL + "/cover.jpg";
    }
    const movieData = async () => {
        setLoad(true)
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&genre=${genre}`);
        getMovie(movie.data.data.movies);
        console.log(movie.data.data.movies);
        setLoad(false)
    }
    useEffect(() => {
        movieData()
    }, [genre])
    return (
        <>

            <Outlet />
            <Gall genre={genre} />
        </>
    )
}

export default Glist;