import React from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholder = props.placeholder === undefined ? `Digite seu ${props.nome}` : props.placeholder

    return (
        <div className='campo-texto'>
            <label>
                {props.nome}
            </label>
            <input
                type={props.tipo}
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto;