import React, { Component } from 'react';
import '../css/Main.css';
import '../css/Basics.css';

export default class Price extends Component{
    render(){
        return(
            <div className="priceBlock">
                <p>Cennik usług: <br />Cennik jest ustalany na bieżąco. W celu ustalenia cennika prosimy o kontakt telefoniczny bądź przez formularz kontaktowy : <a href="#contact" className="contactButton">Kontakt</a></p>
                <p>Gwarantujemy <span className="importantColor importantStyle">6 lat</span> gwarancji na nasze usługi !</p>
            </div>
        );
    }
}