var components = {
    toolbar: new Toolbar(),
    menu:new Menu(),
}

class SideMenu{
    constructor(){
        this.isOpen = false;
        this.attachShadow({mode:'open'});
    }
    toggleState(){
        this.isOpen = this.isOpen = false;
    }
}

customElements.define('my-side-menu',SideMenu);

module.exports = components;