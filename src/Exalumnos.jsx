import React, {Component} from 'react';
import axios from 'axios';
import CardAlumno from './CardAlumno';

class Exalumnos extends Component{
    constructor(props){
        super(props)
        this.state={
            Exalumnos:[],
            nombre:"",
            carrera:"",
            generation:"",
            age:"",
            current_job:"",
            income:""
        }
    }

    componentDidMount(){
        axios.get('https://devf33.herokuapp.com/all/graduates')
        .then((Exalumnos) => {
            console.log(Exalumnos)
            this.setState({
                Exalumnos: Exalumnos.data
            })
            console.log(this.state.Exalumnos)
        })
        .catch(err => console.log(err))

    }

    renderExalumnos(){
        if(this.state.Exalumnos.length !== 0){
            const exalumno = this.state.Exalumnos.map((alumno,index) =>{
                return(
                    <CardAlumno alumno={alumno}/>
                )
            })
            return exalumno
        }else{
            return(
                <div>
                    <label htmlFor="">No tienes exalumnos que mostrar</label>
                </div>
            )
            
        }
    }

    onInputCheck = (e) =>{
        let name = e.target.name
        let value = e.target.value
        
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.nombre !== ""){
            axios.post('https://devf33.herokuapp.com/create/graduate',this.state)
                .then(response => {
                    console.log(response)
                    alert("El alumno fue registrado <3")
                    window.location.reload()
                })
        }else{
            alert("El nombre no fue ingresado")
        }
    }

    render(){
        return(
            <div >
                <div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h3>Registrar un nuevo exalumno</h3>
                            <form onSubmit={this.onFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">Nombre:</label>
                                    <input type="text" className="form-control" name="nombre" value={this.state.nombre}  onChange={this.onInputCheck} id=""/>
                                </div>
                                <div className="form-group">
                                <label htmlFor="">Carrera:</label>
                                    <input type="text" className="form-control" name="carrera" value={this.state.carrera}  onChange={this.onInputCheck} id=""/>
                                </div>
                                <div className="form-group">
                                <label htmlFor="">Edad:</label>
                                    <input type="text" className="form-control" name="age" value={this.state.age}  onChange={this.onInputCheck} id=""/>
                                </div>
                                <div className="form-group">
                                <label htmlFor="">Generacion:</label>
                                    <input type="text" className="form-control" name="generation" value={this.state.generation}  onChange={this.onInputCheck} id=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Puesto:</label>
                                    <input type="text" className="form-control" name="current_job" value={this.state.current_job}  onChange={this.onInputCheck} id=""/>
                                </div>
                                <div className="form-group">
                                <label htmlFor="">Sueldo:</label>
                                    <input type="text" className="form-control" name="income" value={this.state.income}  onChange={this.onInputCheck} id=""/>
                                </div>
                                <button type="submit" className="btn-success btn-block">Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <h3>Exalumnos registrados</h3><br/>            
                <div className="row">
                    {this.renderExalumnos()}
                </div>
            </div>
        )
    }
}

export default Exalumnos;