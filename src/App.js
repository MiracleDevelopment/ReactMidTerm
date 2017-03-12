import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './css/bootstrap.css'
import { Calories } from './Calorie.js';
import { BMI } from './BMI.js';
import { BMR } from './BMR.js';

class App extends Component {

    state = {
        index: 0,
        language: "EN"
    }

    OnClickCalories = (e) => {
        this.setState({index: 0});
    }

    OnClickBMI = (e) => {
        this.setState({index: 1});
    }

    OnClickBMR = (e) => {
        this.setState({index: 2});
    }

    OnClickEN = (e) => {
        this.setState({language: "EN"});
    }

    OnClickTH = (e) => {
        this.setState({language: "TH"});
    }

    render() 
    {
        let renderer = null;
        if(this.state.index == 0)
        {
            renderer = <Calories language={this.state.language}/>
        }
        else if(this.state.index == 1)
        {
            renderer = <BMI language={this.state.language}/>
        }
        else if(this.state.index == 2)
        {
            renderer = <BMR language={this.state.language}/>
        }


        return (

            <div className="App">
                {/*Nav Bar*/}
                <nav className="">
                    <div className="container-fluid my-nav">
                        <div className="" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><a href="#" value="0" onClick={this.OnClickCalories}>Calories</a></li>
                                <li><a href="#" value="1" onClick={this.OnClickBMI}>BMI</a></li>
                                <li><a href="#" value="2" onClick={this.OnClickBMR}>BMR</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.OnClickEN}>EN</a></li>
                                <li><a href="#" onClick={this.OnClickTH}>TH</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/*Component Bar*/}
                {renderer}

            </div>
        );
    }
}

export default App;
