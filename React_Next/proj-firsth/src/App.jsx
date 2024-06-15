import React from "react";
import "./styles/App.css";
import imgLogo from "./assets/images/logo.png";

// Isso é um componete baseado em classe
class App extends React.Component {
    // O construtor pode ser colocado, mas não é obrigatório
    constructor() {
        super();
    }

    // O método render é obrigatório
    render() {
        // O que ele retorna é o que será renderizado na tela
        return (<header>
            <nav id={"navbar"}>
                <div className={"div-nav"}>
                    <img src={imgLogo} alt={"logo's of proj a space nave"}/>
                    <h1>Space Flight Newsletter</h1>
                </div>
                <div>
                    <ul>
                        <li><a href={"#"}>Home</a></li>
                        <li><a href={"#"}>Trending</a></li>
                        <li><a href={"#"}>Categories</a></li>
                        <li><a href={"#"}>About us</a></li>
                    </ul>
                </div>
            </nav>
        </header>)
    }
}

export default App;
