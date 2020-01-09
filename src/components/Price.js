import React, { Component } from 'react';
import '../css/Main.css';

export default class Price extends Component{
    render(){
        return(
            <div className="priceBlock">
                <p>Cennik usług: <br />Cennik jest ustalany na bieżąco. W celu ustalenia cennika prosimy o kontakt telefoniczny bądź przez formularz kontaktowy : <a href="#contact" className="contactButton">Kontakt</a></p>
            </div>
        );
    }
}