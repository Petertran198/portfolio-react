import './App.css';
import HeroBanner from './portfolio/HeroBanner';
import NavMenu from './portfolio/NavMenu';
import React, { useState, useEffect } from 'react';

function App() {
    useEffect(() => {
        window.addEventListener('scroll', fixedNav);

        return () => window.removeEventListener('scroll', fixedNav);
    }, []);

    const fixedNav = () => {
        const nav = document.querySelector('#main');
        const topOfNav = nav.offsetTop;

        if (window.scrollY >= topOfNav) {
            document.body.classList.add('fixed-nav');
        } else {
            document.body.classList.remove('fixed-nav');
        }
    };

    return (
        <div>
            <HeroBanner />
            <NavMenu />
        </div>
    );
}

export default App;
