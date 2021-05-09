import React from 'react';
import './navBar.scss';
import Link from 'next/link';
import Router from 'next/router';
import Image from "next/image";

const Navbar = () => {
    const urls = [
        {
            key: '1',
            name: 'Home',
            pathName: '/#'
        },
        {
            key: '2',
            name: 'About Me',
            pathName: '/about-me'
        },

    ];

    return (<header>
        <nav>
            <ul>
                <li key='0'><Image id='nav-logo' src="/my-logo.png" alt="myLogo" width="80" height="80"/></li>
                {urls.map((el) => {
                        return <li key={el.key}><Link href={el.pathName}><a>{el.name}</a></Link></li>
                    }
                )}
                <li key='3'>
                    <button
                        id="contact-button"
                        onClick={() => Router.push('/contact')}
                    >Contact
                    </button>
                </li>
            </ul>
        </nav>
    </header>);

}

export default Navbar;