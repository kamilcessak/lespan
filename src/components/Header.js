import React, { Component } from 'react';
import '../css/Header.css';
import {BasicTitle} from './Basics';

export default class Header extends Component{
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
                        <a href="#desc">
                            O nas
                        </a>
                    </button>
                    <button className="button">
                        <a href="#services">
                            Usługi
                        </a>
                    </button>
                    <button className="button">
                        <a href="#price">
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