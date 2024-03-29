import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sizes } from '../../../lib/styles/mediaQuery';
import MediaQuery from 'react-responsive';
import './header.scss';
import { useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import HeaderNav from './headerNav/headerNav';

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    background-color: white;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    width: 100%;
    color: black;
    z-index: 100;
`;

const Li = styled.li`
    box-shadow: ${ props => props.blue ? "inset 0 -2px #258bf7" : "none" };

    &:hover {
        box-shadow: ${ props => props.blue ? "inset 0 -2px #258bf7" : "inset 0 -2px #e1e2e3" };
    }
`;

const Header = ({ user, auth }) => {
    const location = useLocation();
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef();
    const narrowNavRef = useRef();

    const isNavOpen = () => {
        navOpen ?
        setNavOpen(false) :
        setNavOpen(true);
    }

    useEffect( () => {
        window.addEventListener( "click", (e) => {
            if(navRef.current && !navRef.current.contains(e.target)) {
                setNavOpen(false);
            }
        })

        window.addEventListener( "click", (e) => {
            if(narrowNavRef.current && !narrowNavRef.current.contains(e.target)) {
                setNavOpen(false);
            }
        })
    }, [])

    return (
        <HeaderWrap>
            <div className="main-header-box">
                <nav className="main-header-nav">
                    <div className="main-header-nav-top">
                        <div className="main-header-nav-top-logo">
                            <button type="button">
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75" alt="hamberger menu" />
                            </button>
                            <Link to="/">
                                <i className="icon-logo">
                                    <svg version="1.0" id="레이어_1" width="74px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 226.8 49.9" enableBackground="new 0 0 226.8 49.9" xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path fill="#0C0C0C" d="M145.6,3.5l-9.1,3.8v7.6h-6.3v8.2h6.2V39c-0.4,5.6,3.7,10.5,9.3,10.9c0.5,0,1,0,1.5,0
                                                    c1.8,0.1,3.5-0.2,5.2-0.8v-8c-0.9,0.2-1.9,0.3-2.8,0.3c-2.5,0-4-1-4-3.9V23.1h6.8V15h-6.8V3.5z"/>
                                                <polygon fill="#0C0C0C" points="46.3,15 40,36.9 32.5,15 23.5,15 16,36.9 9.7,15 0,15 10.9,49.1 20.7,49.1 28,26.1 35.4,49.1 
                                                    45.1,49.1 56,15 		"/>
                                                <path fill="#0C0C0C" d="M217.8,3.5v13.4c-2.3-1.6-5-2.5-7.9-2.7h-0.5h-1c-0.5,0-1,0-1.5,0c-7.6,0.6-13.8,6.4-14.8,14
                                                    c-0.2,1.1-0.3,2.3-0.3,3.4c0,0.1,0,0.2,0,0.4c0,0.3,0,0.6,0,0.9c0,0.5,0,1,0,1.5c1,8.7,7.1,15.5,16.5,15.5c3.4,0.1,6.8-1,9.6-2.9
                                                    V49h0.4h8.5V0L217.8,3.5z M209.4,41.7L209.4,41.7c-5.3-0.5-9.3-5.1-8.9-10.4c0.3-4.8,4.2-8.6,8.9-8.9c4.8,0,8.6,3.4,8.6,9.5
                                                    S214.2,41.7,209.4,41.7z"/>
                                                <path fill="#0C0C0C" d="M188.4,28.2c-1.3-9-9.7-15.2-18.7-13.9c-7.2,1.1-12.8,6.7-13.9,13.9c-0.2,1.3-0.3,2.6-0.3,3.9
                                                    c0,0.8,0,1.6,0.1,2.4c0.9,8.7,7.1,15.5,16.5,15.5c6.8,0.1,12.9-4.1,15.2-10.5l-8.2-1.7c-1.2,2.9-4,4.8-7.2,4.9
                                                    c-4.4,0-7.4-3.5-8.1-8.1h24.6c0-0.8,0.1-1.6,0.1-2.4C188.6,30.7,188.5,29.4,188.4,28.2L188.4,28.2z M164.4,28.2
                                                    c1.3-4.2,5.8-6.6,10-5.3c2.5,0.8,4.5,2.8,5.3,5.3H164.4z"/>
                                                <path fill="#0C0C0C" d="M82.1,17.2c-1.2-0.9-2.6-1.6-4-2.1c-1.5-0.6-3-0.9-4.6-1h-1c-9.5,0.4-16.9,8.3-16.6,17.7
                                                    c0,0.2,0,0.4,0,0.7V33c0.2,9.1,7.3,16.4,16.4,16.9h1.2c3.1-0.2,6.1-1.3,8.6-3.2V49h8.9V15h-8.9L82.1,17.2z M73.6,41.7
                                                    c-5.3-0.3-9.4-4.8-9.2-10.1c0.3-4.9,4.2-8.9,9.2-9.2c4.8,0,8.5,3.4,8.5,9.5S78.4,41.7,73.6,41.7z"/>
                                                <path fill="#0C0C0C" d="M115.3,14.1c-3.9-0.1-7.5,1.7-9.7,4.9v-4h-9.2V49h9.2V29.4c-0.4-3.5,2.2-6.7,5.7-7c0.2,0,0.4,0,0.7,0
                                                    c3.3-0.2,6.2,2.3,6.4,5.6c0,0.4,0,0.8,0,1.2V49h9.2V27.5C127.6,20.1,123.8,14.1,115.3,14.1z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </i>
                            </Link>
                        </div>
                        {
                            !user &&
                            <MediaQuery maxWidth={sizes.narrower}>
                                <button type="button" className="blue-signup-button"><Link to="/auth/login">회원가입하기</Link></button>
                            </MediaQuery>
                        }
                    </div>
                    <ul className="menu-className" >
                        <MediaQuery maxWidth={sizes.narrowest}>
                            <Li blue={location.pathname === "/"}><Link to="/">홈</Link></Li>
                        </MediaQuery>
                            <Li blue={location.pathname === "/jobsfeed"}><Link to="/jobsfeed">채용</Link></Li>
                            <Li><Link to="#">이벤트</Link></Li>
                        <MediaQuery minWidth={sizes.narrowest}>
                            <Li blue={false}><Link to="#">직군별 연봉</Link></Li>
                            <Li blue={false}><Link to="#">이력서</Link></Li>
                            <Li blue={false}><Link to="#" className="new">커뮤니티</Link></Li>
                            <Li blue={false}><Link to="#">프리랜서</Link></Li>
                            <Li blue={false}><Link to="#"className="beta">AI합격예측</Link></Li>
                        </MediaQuery>
                    </ul>
                    <aside className="aside-search-box">
                        <ul>
                            <li><button type="button" className="search-button">
                                <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18"><defs><path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path></defs><g fill="none" fillRule="evenodd"><use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a"></use></g></svg>
                            </button></li>
                            <MediaQuery minWidth={sizes.narrower}>
                            {
                                (auth && user) ?
                                <li ref={navRef}>
                                    <Link to="#" onClick={isNavOpen} >
                                        {user.userName}님
                                    </Link>
                                    {
                                        navOpen &&
                                        <HeaderNav />
                                    }
                                </li> :
                                <li><Link to="/auth/login">회원가입/로그인</Link></li>
                            }
                            <li className="dashboard-button" ><Link to="#">기업 서비스</Link></li>
                            </MediaQuery>
                            <MediaQuery maxWidth={sizes.narrower}>
                                <li ref={narrowNavRef}>
                                    <button type="button" onClick={isNavOpen}>
                                        <svg width="18" height="18" xmlns="https://www.w3.org/2000/svg"><defs><path d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z" id="a"></path></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"></use></mask><use fill="#333" xlinkHref="#a"></use><g mask="url(#b)" fill="#333"><path d="M0 0h18v18H0z"></path></g></g></svg>
                                    </button>
                                    {
                                        (user && navOpen) &&
                                        <HeaderNav />
                                    }
                                </li>
                            </MediaQuery>
                        </ul>
                    </aside>
                </nav>
            </div>
        </HeaderWrap>
    )
}

export default Header;