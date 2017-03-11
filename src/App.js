import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './css/bootstrap.css'
import { Calories } from './Calorie.js';
import { BMI } from './BMI.js';

class App extends Component {

    state = {
        index: 0
    }

    OnClickCalories = (e) => {
        this.setState({index: 0});
    }

    OnClickBMI = (e) => {
        this.setState({index: 1});
    }


    render() 
    {
        let renderer = null;
        if(this.state.index == 0)
        {
            renderer = <Calories />
        }
        else if(this.state.index == 1)
        {
            renderer = <BMI />
        }


        return (
            <div className="App">
                {/*Nav Bar*/}
                <nav className="">
                    <div className="container-fluid my-nav">
                        <div className="" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><a href="#" onClick={this.OnClickCalories}>Calories</a></li>
                                <li><a href="#"  onClick={this.OnClickBMI}>BMI</a></li>
                                <li><a href="#" >BMR</a></li>
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
