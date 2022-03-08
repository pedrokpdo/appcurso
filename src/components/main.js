import React, { Component } from "react";
//form
import {FaPlus} from 'react-icons/fa'
import './main.css'
export default class Main extends Component {
    state = {
        novaTarefa: '',

    };
    handleChange =  (e)=> {
        this.setState({
            novaTarefa: e.target.value,
        })

    }
    render() {

        const { novaTarefa } = this.state;
        return (
            <div className="main">
                <h1>lista de tarefas</h1>
                
                <form className="form" action="#">
                    <input value={novaTarefa} className="inp" onChange={this.handleChange} type='text'/>

                    <button className="btn" type="submit"><FaPlus/></button>

                </form>
                </div>
        )
    }

} 