import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <header className="d-flex justify-content-between">
            <h1>Nichole Guan</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <a
                            href="/"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="/">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;