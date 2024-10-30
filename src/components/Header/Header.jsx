import React from 'react';

/**
 *
 * @returns
 */

function Header() {

    const menuPages = [
        {
            id: '01',
            page: 'Contact',
            url: '/',
            subPages: [
                {
                    id: null,
                    name: null,
                    url: null
                }
            ]
        },
    ];

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className="header__logo">
                    NOC
                </div>
                <nav className='header__menu'>
                    <ul className='header__menu__list'>
                        {menuPages.map((page, index) => (
                            <div key={index} className='header__menu__item'>
                                <li className='header__item'>
                                    <a href={page.url} className='header__link'>
                                        {page.page}
                                    </a>
                                </li>
                            </div>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
