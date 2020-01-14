import React, { Component } from 'react';
import {BasicImg} from './Basics';
import '../css/Main.css';
import Description from './Description';
import Services from './Services';
import Price from './Price';
import OurJobs from './OurJobs';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="banner">
                    <BasicImg url={'./img/banner1a.png'} title={'Banner Strony'} />
                    <BasicImg url={'./img/banner2a.png'} title={'Banner Strony'} />
                </div>
                <div id="desc" className="description">
                    <Description />
                </div>
                <div id="services" className="services">
                    <Services />
                </div>
                <div id="price" className="price">
                    <Price />
                </div>
                <div id="ourJobs" className="ourJobs">
                    <OurJobs />
                </div>
            </div>
        );
    }
}

export default Main;