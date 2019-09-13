import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CardAlumno extends Component{
    constructor(props){
        super(props)
        this.state = {
            alumno: this.props.alumno
        }
    }

    render(){ 
        return(
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h2 onClick={()=> this.props.redirect(this.state.alumno._id)}>{this.state.alumno.nombre}</h2>
                    </div>
                    <div className="card-body">
                        <label htmlFor="">{this.state.alumno.carrera}</label><br/>
                        <label htmlFor="">{this.state.alumno.generation}</label><br/>
                        <label htmlFor="">{this.state.alumno.current_job}</label><br/>
                        <label htmlFor="">{this.state.alumno.age}</label><br/>
                        <label htmlFor="">{this.state.alumno.income}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardAlumno;