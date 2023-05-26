import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './css/home.scss'
import { AiOutlineRight } from "react-icons/ai";
import ReactPlayer from 'react-player';
import AccordianMenu from './AccordianMenu';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='Home'>
                <Outlet />
                <header>
                    <h1>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                        </Link>
                    </h1>
                    <div className="right">
                        <div className="sel_box">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Small" data-name="Globe">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z" fill="currentColor"></path>
                            </svg>
                            <select name="" id="">
                                <option value="">한국어</option>
                                <option value="">English</option>
                            </select>
                        </div>
                        <div className="login">
                            <a href=""><span>로그인</span></a>
                        </div>
                    </div>

                </header>
                <main>
                    <section className='mainVisual'>
                        <div class='bg_img'>
                            <img src={process.env.PUBLIC_URL + '/website_large.jpg'} alt="" />
                        </div>
                        <div className="text_box">
                            <strong>영화와 시리즈를 무제한으로.</strong>
                            <span>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.<br />
                                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</span>
                            <div className="start_btn">
                                <form action=""><input type="text" placeholder="이메일 주소" style={{ fontSize: 16 }} /></form>
                                <a href='#' onClick={() => navigate(`/main`)}>시작하기<AiOutlineRight /></a>
                            </div>

                        </div>
                    </section>
                    <section class='mainTv'>
                        <div className="h_inner">
                            <div className="left">
                                <h2>TV로 즐기세요.</h2>
                                <p>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</p>
                            </div>
                            <div className="right">
                                <img src={process.env.PUBLIC_URL + '/tv.png'} alt="" />
                                <div className='v_wrapper'>
                                    <ReactPlayer
                                        className="re_video"
                                        url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                        width="100%"
                                        height="100%"
                                        muted={true}
                                        playing={true}
                                        loop={true} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='mainDevice'>
                        <div className="h_inner">
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/device-pile.png'} alt="" />
                                <div className='v_wrapper'>
                                    <ReactPlayer
                                        className="re_video"
                                        url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                                        width="100%"
                                        height="220px"
                                        muted={true}
                                        playing={true}
                                        loop={true} />
                                </div>
                            </div>
                            <div className="right">
                                <h2>다양한 디바이스에서<br /> 시청하세요.</h2>
                                <p>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</p>
                            </div>
                        </div>
                    </section>
                    <section className='mainChildren'>
                        <div className="h_inner">
                            <div className="left">
                                <h2>어린이 전용 프로필을<br />만들어 보세요.</h2>
                                <p>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험.<br /> 자녀에게 이 특별한 경험을 선물하세요. <br />넷플릭스 회원이라면 무료입니다.</p>
                            </div>
                            <div className="right">
                                <img src={process.env.PUBLIC_URL + '/chil.png'} alt="" />

                            </div>
                        </div>
                    </section>
                    <section className='mainContent'>
                        <div className="h_inner">
                            <div className="left">
                                <img src={process.env.PUBLIC_URL + '/mobile.jpg'} alt="" />
                                <div className="left_save">
                                    <div className="poster">
                                        <img src={process.env.PUBLIC_URL + '/boxshot.png'} alt="" />
                                    </div>
                                    <div className="text">
                                        <strong>기묘한 이야기</strong>
                                        <span>저장 중...</span>
                                    </div>
                                    <div className="download">
                                        <img src={process.env.PUBLIC_URL + '/download-icon.gif'} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="right">
                                <h2>즐겨 보는 콘텐츠를 저장해<br /> 오프라인으로 시청하세요.</h2>
                                <p>광고 없는 멤버십에서만 이용 가능합니다.</p>
                            </div>
                        </div>
                    </section>
                    <section className='mainQna'>
                        <h2>자주 묻는 질문</h2>
                        <AccordianMenu />
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home