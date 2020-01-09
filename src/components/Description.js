import React, {Component} from 'react';
import '../css/Main.css';
import {BasicImg} from './Basics';

export default class Description extends Component{
    render(){
        return(
            <div className="description">
                <h1>Witaj na Lespan.pl</h1>
                <div className="ceo">
                        <article>
                            <BasicImg url="../img/avatar.png" title="avatar" />
                            <p>Właścicielem firmy jest <span className="bold">Jacek Leski</span>. Człowiek z wieloletnim doświadczeniem zdobytym w Polsce i za granicą.</p>
                        </article>
                </div>
            </div>
        );
    }
}