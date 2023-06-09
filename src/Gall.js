import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Load from './Load';

const Gall = ({ genre }) => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [snum, setSnum] = useState(1);
    const [load, setLoad] = useState(true);
    const handleImgError = (e) => {
        e.target.src = process.env.PUBLIC_URL + "/cover.jpg";
    }
    const allMovie = async () => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}&genre=${genre}&limit=25`);
        console.log(res.data, res.data.data.movie_count);
        setMovie(res.data.data.movies);
        setTotal(res.data.data.movie_count)
        setLoad(false)
    }
    useEffect(() => {
        setLoad(true)
        allMovie()
    }, [page, genre]);

    const cnum = 20;
    const pnum = 10;

    const listNUm = Array.from({ length: total / pnum });

    return (
        <section className='All sec'>
            <h3 className='h_inner' style={{ marginBottom: 50 }}>{total}개의 영화가 있습니다.</h3>
            {load ? <Load />
                : <div>
                    <ul className='grid h_inner'>
                        {
                            movie.map(it => {
                                return (
                                    <li key={it.id} className='itm'>
                                        <Link to={`/main/${genre}/detail/${it.id}`}>
                                            <figure>
                                                <img src={it.medium_cover_image} alt={it.title} onError={handleImgError} />
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
                    <ul className='btn' >
                        {
                            snum === 1 ? null : <li><button style={{ cursor: 'pointer' }} onClick={() => setSnum(snum - cnum)}>Prev</button></li>
                        }

                        <li>
                            {
                                listNUm.slice(snum, snum + cnum).map((it, idx) => <button onClick={() => setPage(idx + snum)} style={{ cursor: 'pointer' }}
                                    key={idx}>{idx + snum}</button>)
                            }
                        </li>

                        {
                            snum > total / pnum - cnum ? null : <li><button style={{ cursor: 'pointer' }} onClick={() => setSnum(snum + cnum)}>NEXT</button></li>
                        }
                    </ul>
                </div>}


        </section>

    )
}

export default Gall