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
        this.setState({weight: parseInt(e.target.value)});
    }

    OnHeight = (e) => {
        this.setState({height: e.target.value});
    }

    OnCalculate = (e) => {
        var w = this.state.weight;
        var h = this.state.height / 100.0;
        var result = parseFloat(w) / parseFloat(h*h);

        this.setState({value: result.toFixed(2)});
    }

    render() 
    {
        let renderer = null;
        let status = null;
        let idx = -1;
        let v = this.state.value;

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

        if(this.props.language == "EN")
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
            _kg = "Kg.";
            _cm = "Cm.";
            _calculate = "Calculate";
            _result = "Criterion";
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
            _kg = "กก.";
            _cm = "ซม.";
            _calculate = "คำนวน";
            _result = "เกณฑ์";
        }

        if(v != 0)
        {
            if(v <= 18.50)
            {
                status = _thin;
                idx = 0;
            }
            else if(v <= 22.90)
            {
                status = _normal;
                idx = 1;
            }
            else if(v <= 24.90)
            {
                status = _fat_1;
                idx = 2;
            }
            else if(v <= 29.90)
            {
                status = _fat_2;
                idx = 3;
            }
            else
            {
                status = _very_fat;
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
            <div className=" my-container App anim_all my-panel">
                <h1 className="my-text">{_header}</h1>
                <h4 className="my-text">{_weight}&nbsp;({_kg})&nbsp;&nbsp;<input type="number" className="input-text" value={this.state.weight} onChange={this.OnWeight}/></h4>
                <h4 className="my-text">{_height}&nbsp;({_cm})&nbsp;&nbsp;<input type="number" className="input-text" value={this.state.height} onChange={this.OnHeight}/></h4>

                <button type="button" className="btn btn-primary" onClick={this.OnCalculate}>{_calculate}</button><br/><br/>

                {renderer}
                
                <div className="my-margin-left-100 my-margin-right-100 my-padding-left-100 my-padding-right-100">
                    <BootstrapTable data={products} hover={false} trClassName="my-table" headerStyle={{background: '#fff', color: '#000'}}>
                        <TableHeaderColumn dataField="BMI" columnClassName={columnClassNameFormat} isKey={true}>{_bmi}</TableHeaderColumn>
                        <TableHeaderColumn dataField="Result" width="100" columnClassName={columnClassNameFormat}>{_result}</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}
