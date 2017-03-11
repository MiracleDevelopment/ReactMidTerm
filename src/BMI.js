import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class BMI extends Component 
{
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

        if(v != 0)
        {
            if(v <= 18.50)
            {
                status = "ผอม";
                idx = 0;
            }
            else if(v <= 22.90)
            {
                status = "ปกติ";
                idx = 1;
            }
            else if(v <= 24.90)
            {
                status = "อ้วนระดับ 1";
                idx = 2;
            }
            else if(v <= 29.90)
            {
                status = "อ้วนระดับ 2";
                idx = 3;
            }
            else
            {
                status = "อ้วนมาก";
                idx = 4;
            }

            renderer = <h3 className="my-text anim_fade">BMI = {this.state.value}</h3>;
        }

        var products = [
            {BMI: "0 - 18.50", Result: "ผอม"},
            {BMI: "18.50 - 22.90", Result: "ปกติ"},
            {BMI: "22.90 - 24.90", Result: "อ้วนระดับ 1"},
            {BMI: "24.90 - 29.90", Result: "อ้วนระดับ 2"},
            {BMI: "30 ขึ้นไป", Result: "อ้วนมาก"},
        ]

        function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
            return rowIdx === idx ? 'my-table-select' : '';
        }


        return (
            <div className="App anim_all my-panel">
                <h1 className="my-text">BMI Calculator</h1>
                <h4 className="my-text">Weight&nbsp;&nbsp;<input type="number" className="input-text" value={this.state.weight} onChange={this.OnWeight}/>&nbsp;&nbsp;&nbsp;Kg.</h4>
                <h4 className="my-text">Height&nbsp;&nbsp;<input type="number" className="input-text" value={this.state.height} onChange={this.OnHeight}/>&nbsp;&nbsp;&nbsp;Cm.</h4>

                <button type="button" className="btn btn-success" onClick={this.OnCalculate}>Calculate</button>

                {renderer}
                <BootstrapTable data={products} hover={false} trClassName="my-table" headerStyle={{background: '#fff', color: '#000'}}>
                    <TableHeaderColumn dataField="BMI" columnClassName={columnClassNameFormat} isKey={true}>BMI</TableHeaderColumn>
                    <TableHeaderColumn dataField="Result" width="100" columnClassName={columnClassNameFormat}>Result</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}
