import React, { Component, PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class BMI extends Component 
{
    static propTypes = {
        language: PropTypes.string.isRequired,
    }

    state = {
        value: 0,
        height: 0,
        weight: 0,
    }

    OnWeight = (e) => {
        this.setState({weight: parseInt(e.target.value,10)});
    }

    OnHeight = (e) => {
        this.setState({height: parseInt(e.target.value,10)});
    }

    OnCalculate = (e) => {
        var w = this.state.weight;
        var h = this.state.height / 100.0;
        var result = parseFloat(w) / parseFloat(h*h);

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
        var renderer = null;
        var idx = -1;
        var v = this.state.value;

        var _thin;
        var _normal;
        var _fat_1;
        var _fat_2;
        var _very_fat;

        var _header;
        var _weight;
        var _height;
        var _bmi;
        var _kg;
        var _cm;
        var _calculate;
        var _result;

        var en_filter = "";
        var th_filter = "";
        if(this.props.language === "EN")
        {
            _thin = "Thin";
            _normal = "Normal";
            _fat_1 = "Fat Level 1";
            _fat_2 = "Fat Level 2";
            _very_fat = "Very Fat";
            _header = "BMI Calculator";
            _weight = "Weight";
            _height = "Height";
            _bmi = "BMI";
            _kg = "(Kg.)";
            _cm = "(Cm.)";
            _calculate = "Calculate";
            _result = "Criterion";
            en_filter = " my-dark-filter-50 ";
        }
        else
        {
            _thin = "ผอม";
            _normal = "ปกติ";
            _fat_1 = "อ้วนระดับ 1";
            _fat_2 = "อ้วนระดับ 2";
            _very_fat = "อ้วนมาก";
            _header = "คำนวน ดัชนีมวลกาย";
            _weight = "น้ำหนัก";
            _height = "ส่วนสูง";
            _bmi = "ดัชนีมวลกาย";
            _kg = "(กก.)";
            _cm = "(ซม.)   ";
            _calculate = "คำนวน";
            _result = "เกณฑ์";
            th_filter = " my-dark-filter-50 ";
        }

        if(v !== 0)
        {
            if(v <= 18.50)
            {
                idx = 0;
            }
            else if(v <= 22.90)
            {
                idx = 1;
            }
            else if(v <= 24.90)
            {
                idx = 2;
            }
            else if(v <= 29.90)
            {
                idx = 3;
            }
            else
            {
                idx = 4;
            }

            renderer = <h3 className="my-text anim_fade">{_bmi} = {this.state.value}</h3>;
        }

        var products = [
            {BMI: "0 - 18.50", Result: _thin},
            {BMI: "18.50 - 22.90", Result: _normal},
            {BMI: "22.90 - 24.90", Result: _fat_1},
            {BMI: "24.90 - 29.90", Result: _fat_2},
            {BMI: "30 ขึ้นไป", Result: _very_fat},
        ]

        function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
            return rowIdx === idx ? 'my-table-select' : '';
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
                                <span className="my-selected my-text">BMI</span>
                                <span className="my-unselected my-text my-border-right" onClick={this.onChangeSceneBMR}>BMR</span>
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
                        <h4 className="my-text">{_weight}&nbsp;{_kg}&nbsp;&emsp;<input type="number" className="input-text" value={this.state.weight} onChange={this.OnWeight}/></h4>
                        <h4 className="my-text">{_height}&nbsp;{_cm}&emsp;<input type="number" className="input-text" value={this.state.height} onChange={this.OnHeight}/></h4>

                        <button type="button" className="btn btn-primary" onClick={this.OnCalculate}>{_calculate}</button><br/><br/>

                        {renderer}
                    </center>
                    
                    <div className="my-margin-left-100 my-margin-right-100 my-padding-left-100 my-padding-right-100">
                        <BootstrapTable data={products} hover={false} trClassName="my-table" headerStyle={{background: '#fff', color: '#000'}}>
                            <TableHeaderColumn dataField="BMI" columnClassName={columnClassNameFormat} isKey={true}>{_bmi}</TableHeaderColumn>
                            <TableHeaderColumn dataField="Result" width="100" columnClassName={columnClassNameFormat}>{_result}</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>

            </div>
        );
    }
}
