import React from 'react';
import github from '../images/github-logo.png';
import linkedin from '../images/linkedin-logo.png';
import instagram from '../images/instagram-logo.png';

function Footer() {
    return (
        <footer className="text-center mt-5 pb-3">
            <a className="m-3" href="https://github.com/ncguan/note-taker"><img src={github} alt="GitHub"></img></a>
            <a className="m-3" href="https://www.linkedin.com/in/nichole-guan-18aa7913a/"><img src={linkedin} alt="Linkedin"></img></a>
            <a className="m-3" href="https://www.instagram.com/ncguan/"><img src={instagram} alt="Instagram"></img></a>
        </footer>
    );
}

export default Footer;