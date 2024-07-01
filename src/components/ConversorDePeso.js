import React from 'react';

class ConversorDePeso extends React.Component{
    state = {
        kg:"",
        lb:"",
        oz:""
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
    <div>
        <h1>Conversor de Peso</h1>
                
                <label>Kilogramas (kg): </label>
                <input   value={this.state.kg} onChange={this.changeKg}/>
                <br></br>
                <label> Libras (lb): </label>
                <input  value ={this.state.lb} onChange={this.changelb}/>
                <br></br>
                <label> Onças(oz): </label>
                <input  value ={this.state.oz} onChange={this.changeoz}/>

    </div>

 )
}

}
export default ConversorDePeso;