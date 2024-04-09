import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholder = props.placeholder === undefined ? `Digite seu ${props.nome}` : props.placeholder

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className='campo-texto'>
            <label>
                {props.nome}
            </label>
            <input
                value={props.valor}
                onChange={aoDigitar}
                // Caso a propriedade obrigatório seja passada, o campo será obrigatório
                required={!!props.obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto;