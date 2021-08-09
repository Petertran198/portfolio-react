import React from 'react';
import './NavMenu.scss';
function NavMenu() {
    return (
        <div id='main'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light nav'>
                <a className='navbar-brand' id='logo' href='#'>
                    <img
                        className='brand-img'
                        src='https://cdn.dribbble.com/users/2592071/screenshots/7327591/logo-artboard_2_4x_4x.png'
                        alt=''
                    ></img>
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item '>
                            <a className='nav-link' href='#'>
                                Home <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Features
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Pricing
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link disabled' href='#'>
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavMenu;
