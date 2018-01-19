class Toolbar extends HTMLElement{

    constructor(title){
        super();
        this.attachShadow({mode:'open'}).innerHTML = title;

        this.title = title;
    }
    connectedCallback(){console.log('toolbar connected')}
    disconnectedCallback(){}
    setTitle(title){
        this.title = title;
    }
}
customElements.define('my-toolbar',Toolbar);
