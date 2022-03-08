import React from "react";
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({handleChange, handleSubmit, novaTarefa}) {
    return (
        <form onSubmit={handleSubmit} className="form" action="#">
            <input value={novaTarefa} 
            className="inp" 
            onChange={handleChange} 
            type='text' />

            <button className="btn" type="submit"><FaPlus /></button>

        </form>
    )
}

}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
    