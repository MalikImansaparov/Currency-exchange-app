import React from 'react';
import './Header.css';
import Nav from "../Nav/Nav";

class Header extends React.Component {
    render(){
        return (
                <header>
                    <div className="top-bar animate-dropdown"></div>
                    <div className='main-header'>
                        <div className='container'>
                            <h1 className='site-title'>FastExchange</h1>

                        </div>
                    </div>
                   <Nav/>
                </header>
    );
    }
    }
    export default Header;
