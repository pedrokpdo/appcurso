import React, { Component } from "react";
//form
import { FaPlus } from 'react-icons/fa'
//tarefas
import { FaEdit , FaWindowClose } from 'react-icons/fa'

import './main.css'
export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [
            'fazer cafe', 'estudar js', 'estudar react',
        ]

    };
    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        })

    }
    render() {

        const { novaTarefa, tarefas } = this.state;
        return (
            <div className="main">
                <h1>lista de tarefas</h1>

                <form className="form" action="#">
                    <input value={novaTarefa} className="inp" onChange={this.handleChange} type='text' />

                    <button className="btn" type="submit"><FaPlus /></button>

                </form>
                <ul className="tarefas">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa}>
                            {tarefa}
                            <div>
                                <FaEdit className="edit"/>
                           <FaWindowClose className="delete"/>
                            </div>
                            </li>
                    ))}
                </ul>
            </div>
        );
    }

} 