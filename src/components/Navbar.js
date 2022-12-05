import React from 'react';

function NavBar() {
    return (
        <header className="d-flex justify-content-between m-2">
            <h1>Nichole Guan</h1>
            <nav>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="/">Portfolio</a>
                    </li>
                    <li class="nav-item">
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