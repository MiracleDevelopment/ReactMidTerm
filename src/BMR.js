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
        gender: "Male",
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

        if(this.state.gender === "Male")
        {
            result = 10 * w + 6.25 * h - 5 * a + 5;           
        }
        else
        {
            result = 10 * w + 6.25 * h - 5 * a - 161;           
        }

        this.setState({value: result.toFixed(2)});
    }

    onChangeSceneCal = (e) => {
        this.props.OnChangeScene(0);
    }
    onChangeSceneBMI = (e) => {
        this.props.OnChangeScene(1);
    }
    onChangeSceneBMR = (e) => {
        this.props.OnChangeScene(2);
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

        var en_filter = "";
        var th_filter = "";
        if(this.props.language === "EN")
        {
            _header = "BMR Calculator";
            _weight = "Weight ";
            _height = "Height ";
            _age = "Age ";
            _male = "Male";
            _female = "Female";
            _gender = "Gender ";

            _bmr = "BMR";
            _kg = "Kg.";
            _cm = "Cm.";
            _calculate = "Calculate";
            en_filter = " my-dark-filter-50 ";
        }
        else
        {
            _header = "คำนวน การเผาผลาญพลังงาน";
            _weight = "น้ำหนัก ";
            _height = "ส่วนสูง ";
            _gender = "ระบุเพศ ";
            _age = "อายุ ";
            _male = "ชาย";
            _female = "หญิง";
            _bmr = "การเผาผลาญพลังงาน";
            _kg = "กก.";
            _cm = "ซม.";
            _calculate = "คำนวน";
            th_filter = " my-dark-filter-50 ";
        }

        if(v !== 0)
        {
            renderer = <h3 className="my-text anim_fade">{_bmr} = {this.state.value}</h3>;
        }

        return (
            <div className="App-Cal my-container">

                <div className="my-navbar">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="./logo.png" alt="Logo" width="64" height="64"/>
                            <span className="my-text" style={{fontSize:"24px"}}>&nbsp;Calories Killer</span>
                        </div>
                        <div className="col-md-4 my-padding-top-20">
                            <center>
                                <span className="my-unselected my-text my-border-left" onClick={this.onChangeSceneCal}>Calories</span>
                                <span className="my-unselected my-text" onClick={this.onChangeSceneBMI}>BMI</span>
                                <span className="my-selected my-text my-border-right">BMR</span>
                            </center>
                        </div>
                        <div className="col-md-4 my-padding-top-20">
                            <img src="./th.png" alt="TH" className={th_filter} style={{float:"right", marginLeft:"8px", color:"#003", width:"36", boxShadow:"2px 2px 5px #333", cursor:"pointer"}} onClick={this.props.OnClickTH}/>
                            <img src="./en.png" alt="EN" className={en_filter} style={{float:"right", marginLeft:"8px", color:"#003", width:"36", boxShadow:"2px 2px 5px #333", cursor:"pointer"}} onClick={this.props.OnClickEN}/>
                        </div>
                    </div>
                </div>

                <div className="my-contrainer-sub anim_all">
                    <center>
                        <h4 className="">
                            <span className="my-text">&nbsp;&nbsp;&nbsp;&nbsp;{_gender}</span>

                            <select className="my-text" style={{color:'black'}} onChange={this.OnGender}>
                                <option value="Male">{_male}</option>
                                <option value="Female">{_female}</option>
                            </select>

                            <span className="my-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </h4>
                        
                        <h4 className="my-text">&emsp;&emsp;{_age}<input type="number" className="input-text" value={this.state.age} onChange={this.OnAge}/>&nbsp;&nbsp;&nbsp;</h4>
                        <h4 className="my-text">&emsp;&emsp;{_weight}<input type="number" className="input-text" value={this.state.weight} onChange={this.OnWeight}/>&nbsp;&nbsp;&nbsp;{_kg}</h4>
                        <h4 className="my-text">&nbsp;&emsp;&emsp;{_height}<input type="number" className="input-text" value={this.state.height} onChange={this.OnHeight}/>&nbsp;&nbsp;&nbsp;{_cm}</h4>

                        <button type="button" className="btn btn-primary" onClick={this.OnCalculate} style={{marginBottom:"20px"}}>{_calculate}</button>

                        {renderer}
                    </center>
                </div>

            </div>
        );
    }
}
