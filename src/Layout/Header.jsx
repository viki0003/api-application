import { Button } from '@mui/material';
import AppLogo from '../Assets/Images/ApiAppLogo.png'
import './Layout.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-elements">
                <div className="app-logo">
                    <img src={AppLogo} alt="ApiLogo" />
                </div>
                <div className='nav-menu'>
                    <ul className='navbar-menu'>
                        <li className='menu-list'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='menu-list'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='menu-list'>
                            <Link to="/news-api">
                                News API
                            </Link>
                        </li>
                        <li className='menu-list'>
                            <Link to="/pokemon-api">
                                Pokemon API
                            </Link>
                        </li>
                        <li className='menu-list'>
                            <Link to="/crypto-api">
                                Crypto API
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='portfolio-btn'>
                    <Link className="button">
                        <span className="button__icon-wrapper">
                            <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                            </svg>

                            <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                            </svg>
                        </span>
                        Visit Portfolio
                    </Link>

                </div>
            </div>
        </header>
    );
}

export default Header;