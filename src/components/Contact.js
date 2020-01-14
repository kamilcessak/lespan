import React, {Component} from 'react';
import '../css/Contact.css';
import {BasicImg} from './Basics';

export default class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <div className="contactBlock">
                    <div className="contactInfo">
                        <h4>Dane kontaktowe firmy:</h4>
                        <div className="contactInfoBlock">
                            <span className="contactImg">
                                <BasicImg url="../img/icon_person.png" title="ikona osoby" />
                            </span>
                            <p className="boldText contactText">Jacek Leski</p>
                        </div>
                        <div className="contactInfoBlock">
                            <span className="contactImg">
                                <BasicImg url="../img/icon_loc.png" title="ikona lokalizacji" />
                            </span>
                            <p className="contactText">Gromada 31A, 23-400 Biłgoraj</p>
                        </div>
                        <div className="contactInfoBlock"> 
                            <span className="contactImg">
                                <BasicImg url="../img/icon_mail.png" title="ikona emailu" />
                            </span>
                            <p className="contactText">kontakt@lespan.pl</p>
                        </div>
                        <div className="contactInfoBlock">
                            <span className="contactImg">
                                <BasicImg url="../img/icon_tel.png" title="ikona telefonu" />
                            </span>
                            <p className="contactText">601 435 985</p>
                        </div>
                    </div>
                    <form action="email.php" method="POST">
                        <h4>Formularz Kontaktowy:</h4>
                        <label for="firstName">Imię:</label><br /><input name="firstName" type="text"></input><br />
                        <label for="lastName">Nazwisko:</label><br /><input name="lastName" type="text"></input><br />
                        <label for="email">E-mail:</label><br /><input name="email" type="text"></input><br />
                        <label for="phone">Telefon:</label><br /><input name="phone" type="text"></input><br />
                        <label for="textArea">Wiadomość</label><br /><textarea name="textArea"></textarea>
                        <button type="submit">Wyślij</button>
                    </form>
                </div>
            </div>
        );
    }
}