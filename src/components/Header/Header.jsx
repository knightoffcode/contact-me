import React from 'react';

import { GrUpdate, GrMenu } from 'react-icons/gr';

/**
 *
 * @returns
 */

function Header() {

    const menuPages = [
        {
            id: '01',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: null,
                    name: null,
                    url: null
                }
            ]
        },
        {
            id: '02',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: '021',
                    name: 'Page 01',
                    url: '/021'
                }
            ]
        }
    ];

    return (
        <header className='header'>
            <div className='header__wrapper'>
                    <nav className='header__menu'>
                        <ul className='header__menu__list'>
                            <div className='header__menu__item'>
                                <div className='header__submenu'>
                                    <ul className='header__submenu__list'>
                                        <li className='header__submenu__item'>
                                            <a
                                                className='header__submenu__anchor'
                                                href='{subpage.url}'
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {menuPages.map((page, index) => (
                                <div key={index} className='header__menu__item'>
                                    <li className='header__item'>
                                        <a href={page.url} className='header__link'>
                                            {page.page}
                                        </a>
                                    </li>
                                    {page.subPages
                                        ? page.subPages.map((subpage, subIndex) => (
                                            <div className='header__submenu' key={subIndex}>
                                                <ul className='header__submenu__list'>
                                                    <li className='header__submenu__item'>
                                                        <a
                                                            className='header__submenu__anchor'
                                                            href={subpage.url}
                                                        >
                                                            {subpage.name}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))
                                        : null}
                                </div>
                            ))}
                        </ul>
                    </nav>
            </div>
        </header>
    );
};

export default Header;
