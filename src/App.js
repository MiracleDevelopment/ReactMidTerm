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
        language: "EN",
        listEat: []
    }

    OnUpdateListEat = (value) => {
        this.setState({listEat: value});
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

    OnChangeScene = (value) => {
        this.setState({index: parseInt(value)});
    }

    render() 
    {
        let renderer = null;
        if(this.state.index == 0)
        {
            renderer = <Calories language={this.state.language} OnChangeScene={this.OnChangeScene} OnClickEN={this.OnClickEN} OnClickTH={this.OnClickTH} listEat={this.state.listEat} OnUpdateListEat={this.OnUpdateListEat}/>
        }
        else if(this.state.index == 1)
        {
            renderer = <BMI language={this.state.language} OnChangeScene={this.OnChangeScene} OnClickEN={this.OnClickEN} OnClickTH={this.OnClickTH}/>
        }
        else if(this.state.index == 2)
        {
            renderer = <BMR language={this.state.language} OnChangeScene={this.OnChangeScene} OnClickEN={this.OnClickEN} OnClickTH={this.OnClickTH}/>
        }


        return (

            <div className="App">
                {renderer}

            </div>
        );
    }
}

export default App;
