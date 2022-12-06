import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <header className="d-flex justify-content-between">
            <h1>Nichole Guan</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <a
                            href="#about-me"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About Me</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact</a>
                    </li>
                    <li class="nav-item">
                    <a href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;