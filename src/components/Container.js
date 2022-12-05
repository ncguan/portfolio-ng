import React, { useState } from 'react';
import NavBar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        // if (currentPage === 'Contact') {
        //     return <Contact />;
        // }
        // return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="m-2">
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}
