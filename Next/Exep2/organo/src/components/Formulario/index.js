import CampoTexto from '../CampoTexto'
import './Fomulario.css'
import React from 'react'

export const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto nome="Nome" />
                <CampoTexto nome="Cargo" />
                <CampoTexto nome="Imagem" placeholder="Digite o endereço da sua Imagem" />
            </form>
        </section>
    )
}

