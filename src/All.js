import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const All = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [snum, setSnum] = useState(1);
    const allMovie = async () => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=40`);
        //console.log(res.data, res.data.data.movie_count);
        setMovie(res.data.data.movies);
        setTotal(res.data.data.movie_count)
    }
    useEffect(() => {
        allMovie()
    }, [page]);

    const cnum = 20;
    const pnum = 10;

    const listNUm = Array.from({ length: total / pnum });

    return (
        <section className='All sec'>

            <ul className='grid'>
                {
                    movie.map(it => {
                        return (
                            <li key={it.id} className='itm'>
                                <Link to={`/main/detail/${it.id}`}>
                                    <figure>
                                        <img src={it.medium_cover_image} alt={it.title} />
                                    </figure>
                                    <div className="case">
                                        <div className='desc'>{it.title}</div>
                                    </div>
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>
            <ul className='btn'>
                {
                    snum === 1 ? null : <li><button onClick={() => setSnum(snum - cnum)}>Prev</button></li>
                }

                <li>
                    {
                        listNUm.slice(snum, snum + cnum).map((it, idx) => <button onClick={() => setPage(idx + snum)}
                            key={idx}>{idx + snum}</button>)
                    }
                </li>

                {
                    snum > total / pnum - cnum ? null : <li><button onClick={() => setSnum(snum + cnum)}>NEXT</button></li>
                }
            </ul>

        </section>

    )
}

export default All