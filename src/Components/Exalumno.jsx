import React, {Component} from 'react';
import axios from 'axios';

class Exalumno extends Component{
    constructor(props){
        super(props);
        this.state={
            _id:props.match.params.id,
            nombre:"",
            generation:"",
            carrera:"",
            age:0,
            income:0,
            currente_job:""
        }
    }

    componentDidMount(){
        axios.get(`https://devf33.herokuapp.com/graduate/${this.state._id}`)
        .then((alumno) => {
            this.setState({
                nombre:alumno.data.nombre,
                generation:alumno.data.generation,
                carrera:alumno.data.carrera,
                age:alumno.data.age,
                income:alumno.data.income,
                current_job:alumno.data.current_job
            })
            console.log(this.state)
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div className="bg-success">
                <h1>{this.state.nombre}</h1>
                <label htmlFor="">Edad:{this.state.age}</label><br/>
                <label htmlFor="">Trabajo actual:{this.state.current_job}</label><br/>
                <label htmlFor="">salario:{this.state.salario}</label><br/>
                <label htmlFor="">Carrera:{this.state.carrera}</label><br/>
                <label htmlFor="">Generacion:{this.state.generation}</label><br/>
            </div>
        )
    }
}

export default Exalumno;