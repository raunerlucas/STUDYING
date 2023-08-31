class TitleDinamic extends HTMLElement{
    constructor(){
        super();

        const titleDinamic = this.attachShadow({ mode: "open"})

        //base component
        const componentRoot = document.createElement("h1");
            //atribuindo um valor fixo.
        // componentRoot.textContent = "Felipe";

            //atribuindo um por um parametrog.
        componentRoot.textContent = this.getAttribute("title");

        //estiliza
        const style = document.createElement("style");
        style.textContent = `h1{color: red}`;

    
        //envia para shadow
        titleDinamic.appendChild(componentRoot);
        titleDinamic.appendChild(style);
    }
}

customElements.define("title-di",TitleDinamic);