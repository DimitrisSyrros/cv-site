import React, { Component } from 'react';
import './navBar.scss';
import Link from 'next/link';
import Router from 'next/router';

class Navbar extends Component {
    urls = [
        {
            key:'0',
            name: 'Home',
            pathName: '/#'
        },
        {
            key:'1',
            name: 'About Me',
            pathName: '/about-me'
        },

    ];
    render() {
        return (<header>
            <nav>
                <ul>
                    {this.urls.map((el) => {
                        return <li key={el.key}><Link href={el.pathName}><a>{el.name}</a></Link></li>
                    }
                    )}
                    <li key='2'>
                        <button
                            id="contact-button"
                            onClick={()=> Router.push('/contact')}
                        >Contact</button>
                    </li>
                </ul>
            </nav>
        </header >);
    }
}

export default Navbar;