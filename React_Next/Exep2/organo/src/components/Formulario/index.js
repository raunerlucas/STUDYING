import CampoTexto from '../CampoTexto'
import './Fomulario.css'
import React, {useState} from 'react'
import {ListaSuspensa} from "../LIstaSuspensa";
import {Botao} from "../Botao";

export const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-end',
        'Back-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCtd({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio
                    nome="Nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio
                    nome="Cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto
                    nome="Imagem"
                    placeholder="Digite o endereço da sua Imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

