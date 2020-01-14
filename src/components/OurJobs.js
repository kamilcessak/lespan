import React, {Component} from 'react';
import '../css/Basics.css';
import '../css/OurJobs.css';
import {BasicImg} from './Basics.js'

export default class OurJobs extends Component{
    render(){
        return(
            <div className="ourJobs">
                <h3>Nasze przykładowe prace:</h3>
                <div className="ourJobsImgs">
                    <div className="ourJobsImgsBlock">  
                        <div className="imgBefore">
                            <h4>Przed</h4>
                            <BasicImg url="img/1.jpg" title="Pierwsze zdjęcie przed" />  
                        </div>
                        <div className="imgAfter">
                            <h4>Po</h4>
                            <BasicImg url="img/1.jpg" title="Pierwsze zdjęcie przed" /> 
                        </div>
                    </div>
                    <div className="ourJobsImgsBlock">  
                        <div className="imgBefore">
                            <h4>Przed</h4>
                            <BasicImg url="img/1.jpg" title="Pierwsze zdjęcie przed" />  
                        </div>
                        <div className="imgAfter">
                            <h4>Po</h4>
                            <BasicImg url="img/1.jpg" title="Pierwsze zdjęcie przed" /> 
                        </div>
                    </div>
                    <div className="ourJobsImgsBlock">  
                        <div className="imgBefore">
                            <h4>Przed</h4>
                            <BasicImg url="img/1.jpg" title="Pierwsze zdjęcie przed" />  
                        </div>
                        <div className="imgAfter">
                            <h4>Po</h4>
                            <BasicImg url="img/1.jpg" title="Pierwsze zdjęcie przed" /> 
                        </div>
                    </div>
                </div>
                <h3>Aby zobaczyć więcej naszych prac kliknij:</h3>
                <button className="imgMore">Zobacz więcej</button>
            </div>
        );
    }
}