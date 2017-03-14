import React, { Component, PropTypes } from 'react';

export class BMR extends Component 
{
    static propTypes = {
        language: PropTypes.string.isRequired,
    }

    state = {
        value: 0,
        height: 0,
        weight: 0,
        gender: 0,
        age: 0
    }

    OnWeight = (e) => {
        this.setState({weight: e.target.value});
    }

    OnHeight = (e) => {
        this.setState({height: e.target.value});
    }

    OnGender = (e) => {
        this.setState({gender: e.target.value});
    }

    OnAge = (e) => {
        this.setState({age: e.target.value});
    }

    OnCalculate = (e) => {

        var w = this.state.weight;
        var h = this.state.height;
        var a = this.state.age;

        var result = -1;

        if(this.state.gender == 0)
        {
            result = 10 * w + 6.25 * h - 5 * a + 5;           
        }
        else
        {
            result = 10 * w + 6.25 * h - 5 * a - 161;           
        }

        this.setState({value: result.toFixed(2)});
    }
    render() 
    {
        let renderer = null;
        let v = this.state.value;

        var _header;
        var _weight;
        var _height;
        var _age;
        var _male;
        var _female;

        var _bmr;
        var _kg;
        var _cm;
        var _calculate;
        var _gender;

        if(this.props.language == "EN")
        {
            _header = "BMR Calculator";
            _weight = "Weight";
            _height = "Height  ";
            _age = "Age";
            _male = "Male";
            _female = "Female";
            _gender = "Gender ";

            _bmr = "BMR";
            _kg = "Kg.";
            _cm = "Cm.";
            _calculate = "Calculate";
        }
        else
        {
            _header = "คำนวน การเผาผลาญพลังงาน";
            _weight = "น้ำหนัก";
            _height = "ส่วนสูง";
            _gender = "ระบุเพศ";
            _age = "อายุ";
            _male = "ชาย";
            _female = "หญิง";
            _bmr = "การเผาผลาญพลังงาน";
            _kg = "กก.";
            _cm = "ซม.";
            _calculate = "คำนวน";
        }

        if(v != 0)
        {
            renderer = <h3 className="my-text anim_fade">{_bmr} = {this.state.value}</h3>;
        }

        return (
            <div className="App anim_all my-panel my-container">

                <h1 className="my-text">{_header}</h1>

                <h4 className="">
                    <span className="my-text">{_gender}</span>&nbsp;&nbsp;

                    <select className="my-text" style={{color:'black'}} onChange={this.OnGender}>
                        <option value="0">{_male}</option>
                        <option value="1">{_female}</option>
                    </select>

                    <span className="my-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </h4>
                
                <h4 className="my-text">{_age}&nbsp;&nbsp;<input type="number" className="input-text" value={this.state.age} onChange={this.OnAge}/>&nbsp;&nbsp;&nbsp;</h4>
                <h4 className="my-text">{_weight}&nbsp;&nbsp;<input type="number" className="input-text" value={this.state.weight} onChange={this.OnWeight}/>&nbsp;&nbsp;&nbsp;{_kg}</h4>
                <h4 className="my-text">{_height}&nbsp;&nbsp;<input type="number" className="input-text" value={this.state.height} onChange={this.OnHeight}/>&nbsp;&nbsp;&nbsp;{_cm}</h4>

                <button type="button" className="btn btn-primary" onClick={this.OnCalculate}>{_calculate}</button>

                {renderer}

            </div>
        );
    }
}
