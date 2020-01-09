import React, { Component } from 'react';
import '../css/Basics.css';

export class BasicLine extends Component {
    render(){
        return(
            <hr />
        );
    }
}

export class BasicTitle extends Component{
    render(){
        return(
            <h1>{this.props.title}</h1>
        );
    }
}

export class BasicImg extends Component{
    render(){
        return(
            <div className="bannerB">
                <img src={this.props.url} alt={this.props.title} />
            </div>
        );
    }
}