import React from 'react';
import './heroBanner.scss';

export default function HeroBanner() {
    return (
        <>
            <div className='fullscreen-container'>
                <div className='h-100 bg-dark text-white position-relative'>
                    <a
                        href='https://github.com/Petertran198'
                        className='position-absolute text-white text-decoration-none title'
                    >
                        Peter Tran
                        <br />{' '}
                        <span className='web-dev-title text-danger'>Full Stack</span>
                        <span className='web-dev-title '> Web Dev;</span>
                    </a>
                    <div className='title-box-logo bg-danger position-absolute'></div>
                </div>
            </div>
        </>
    );
}
