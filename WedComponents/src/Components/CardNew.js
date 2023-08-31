class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

            // cria o espaçodo autor
            const autor = document.createElement("span");  
            autor.textContent = "By " + (this.getAttribute("author") || "Anonymous");
            cardLeft.appendChild(autor);
            
            //cria o Titulo
            const title = document.createElement("a");
            title.textContent = this.getAttribute("title");
            title.href = this.getAttribute("link-url");
            title.target = "_blank";
            cardLeft.appendChild(title);

            
            //cria o conteudo
            const conteudo = document.createElement("p");
            conteudo.textContent = this.getAttribute("newconteudo")
            cardLeft.appendChild(conteudo);


        const cardRight = document.createElement("div");
        cardRight.getAttribute("class", "card__right");

            const img = document.createElement("img")
            img.src = this.getAttribute("srcPoto") || "./imgs/default.png"
            img.alt = this.getAttribute("alt")
            cardRight.appendChild(img);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style")
        style.textContent=`
                                
                        .card{
                            width: 80%;
                            -webkit-box-shadow: 8px 10px 20px 0px rgba(0,0,0,0.75);
                            -moz-box-shadow: 8px 10px 20px 0px rgba(0,0,0,0.75);
                            box-shadow: 8px 10px 20px 0px rgba(0,0,0,0.75);;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            margin: 1em auto;
                        }


                        .card__left{
                            display: flex;
                            flex-direction: column;
                            padding-left: 10px;
                            justify-content: center;
                        }

                        .card__right{

                        }

                        h1 {
                            margin-top: 15px;
                            font-size: 30px;
                        }

                        p{
                            color: gray;
                        }

                        span{
                            font-weight: 700;
                        }
        `

        return style
    }
}


customElements.define("card-news",CardNews)