import React, { Component } from 'react';
import {BasicImg} from './Basics';

class Main extends Component{
    render(){
        return(
            <div className="banner">
                <BasicImg url={'./img/bannerImg.jpg'} title={'Banner Strony'} />
                <BasicImg url={'./img/bannerImg2.jpg'} title={'Banner Strony'} />
            </div>
        );
    }
}

export default Main;