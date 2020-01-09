import React, { Component } from 'react';
import {BasicImg} from './Basics';
import '../css/Main.css';
import Description from './Description';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="banner">
                    <BasicImg url={'./img/banner1a.png'} title={'Banner Strony'} />
                    <BasicImg url={'./img/banner2a.png'} title={'Banner Strony'} />
                </div>
                <div id="home" className="description">
                    <Description />
                </div>
            </div>
        );
    }
}

export default Main;