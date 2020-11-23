import React, { Component } from 'react';
import './navBar.scss';
import Link from 'next/link';
import Router from 'next/router';

class Navbar extends Component {
    urls = [
        {
            name: 'Home',
            pathName: '/#'
        },
        {
            name: 'Education',
            pathName: '/education'
        },
        {
            name: 'Experience',
            pathName: '/experience'
        },
    ];
    render() {
        return (<header>
            <nav>
                <ul>
                    {this.urls.map((el) => {
                        return <li><Link href={el.pathName}><a>{el.name}</a></Link></li>
                    }
                    )}
                    <li>
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