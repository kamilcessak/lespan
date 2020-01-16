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
                        <label>Imię:</label><br /><input name="firstName" type="text" placeholder="Jan"></input><br />
                        <label>Nazwisko:</label><br /><input name="lastName" type="text" placeholder="Kowalski"></input><br />
                        <label>E-mail:</label><br /><input name="email" type="text" placeholder="jan.kowalski@example.pl"></input><br />
                        <label>Telefon:</label><br /><input name="phone" type="text" placeholder="000 000 000"></input><br />
                        <label>Wiadomość:</label><br /><textarea name="message" placeholder="Napisz do nas !"></textarea><br />
                        <input type="submit" name="submit" className="sent" value="Wyślij"></input>
                    </form>
                </div>
                <div className="created">
                    <h2>© Website designed and created by. Kamil Cessak</h2>
                </div>
            </div>
        );
    }
}