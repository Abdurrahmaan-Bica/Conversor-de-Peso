import React from 'react';
import './ConversorDePeso.css';
class ConversorDePeso extends React.Component{
    state = {
        kg:0,
        lb:0,
        oz:0
    }

    changeKg = (event)=>{
        this.setState({kg:event.target.value})
        this.setState({lb:event.target.value * 2.2046})
        this.setState({oz:event.target.value * 35.274})

    }
    changeLb = (event)=>{
        this.setState({lb:event.target.value}) 
        this.setState({kg:event.target.value / 2.2046})
        this.setState({oz:event.target.value * 16})
    }
    changeOz = (event)=>{
        this.setState({oz:event.target.value}) 
        this.setState({kg:event.target.value / 35.274})
        this.setState({lb:event.target.value / 16})
    }


render(){
    
 return(
    <div className="container">
        <h1>Conversor de Peso</h1>
                <div class="mb-3">
                    <label class="form-label">Kilogramas (kg):</label>
                    <input type="number" class="form-control" value ={this.state.kg} onChange={this.changekg}/>
                    <br></br>
                    <label class="form-label">Libras (lb):</label>
                    <input type="number" class="form-control" value ={this.state.lb} onChange={this.changelb}/>
                    <br></br>
                    <label class="form-label"> Onças (oz): </label>
                    <input type="number" class="form-control" value ={this.state.oz} onChange={this.changeoz}/>
                </div>
                   
             
    </div>

 )
}

}
export default ConversorDePeso;