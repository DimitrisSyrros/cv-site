import React from 'react';
import Navbar from "./Navbar/NavBar";

const Layout = ({children}) => {
    return (
        <div className='content'>
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;