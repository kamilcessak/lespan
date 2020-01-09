import React, {Component} from 'react';
import '../css/Main.css';

export default class Services extends Component{
    render(){
        return(
            <div className="ourServices">
                <p>Firma <span className="bold">Lespan</span> zajmuje się głównie naprawą: </p>
                <div className="serviceDescription">
                    <div className="serviceBlock">
                        <h3>Płyt Warstwowych:</h3>
                        <ul>
                            <li>Dziury</li>
                            <li>Akty wandalizmu</li>
                            <li>Wgniecenia</li>
                            <li>Szkody wynikające z błędnej konserwacji</li>
                            <li>Zarysowania</li>
                        </ul>
                    </div>
                    <div className="serviceBlock">
                        <h3>Elementów Budynku:</h3>
                        <ul>
                            <li>Drzwi wewnętrznych i zewnątrznych ze stali lub aluminium</li>
                            <li>Kolumn aluminiowych</li>
                            <li>Okien aluminiowych</li>
                            <li>Usługa stolarki aluminiowej</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}