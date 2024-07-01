import React from 'react';
import './ConversorDePeso.css';

class ConversorDePeso extends React.Component {
    state = {
        kg: 0,
        lb: 0,
        oz: 0
    }

    changeKg = (event) => {
        const kg = event.target.value;
        this.setState({
            kg: kg,
            lb: kg * 2.2046,
            oz: kg * 35.274
        });
    }

    changeLb = (event) => {
        const lb = event.target.value;
        this.setState({
            lb: lb,
            kg: lb / 2.2046,
            oz: lb * 16
        });
    }

    changeOz = (event) => {
        const oz = event.target.value;
        this.setState({
            oz: oz,
            kg: oz / 35.274,
            lb: oz / 16
        });
    }

    deleteInputFields = () =>{
        this.setState({
            kg:0,
            lb:0,
            oz:0,
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Conversor de Peso</h1>
                <div className="mb-3">
                    <label className="form-label">Kilogramas (kg):</label>
                    <br />
                    <input type="number" className="form-control-sm" value={this.state.kg} onChange={this.changeKg} min="0" />
                    <br />
                    <label className="form-label">Libras (lb):</label>
                    <br />
                    <input type="number" className="form-control-sm" value={this.state.lb} onChange={this.changeLb} min="0" />
                    <br />
                    <label className="form-label">Onças (oz):</label>
                    <br />
                    <input type="number" className="form-control-sm" value={this.state.oz} onChange={this.changeOz} min="0" />
                    <br /><br />
                    <button onClick = {this.deleteInputFields} className="btn btn-light">Redefinir</button>
                </div>
            </div>
        );
    }
}

export default ConversorDePeso;
