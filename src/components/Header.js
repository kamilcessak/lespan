import React, { Component } from 'react';
import '../css/Header.css';
import {BasicTitle} from './Basics';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="logo">
                    <BasicTitle title="LESPAN.PL" />
                </div>
                <nav className="nav">
                    <button className="button">
                        <a href="#">
                            Home
                        </a>
                    </button>
                    <button className="button">
                        <a href="#">
                            O nas
                        </a>
                    </button>
                    <button className="button">
                        <a href="#">
                            Usługi
                        </a>
                    </button>
                    <button className="button">
                        <a href="#">
                            Cennik
                        </a>
                    </button>
                    <button className="button">
                        <a href="#">
                            Kontakt
                        </a>
                    </button>
                </nav>
            </div>
        );
    }
}

export default Header;