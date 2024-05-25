const template = `<link rel="stylesheet" href="./Stili/NavBar.css">
<div class="navbar">
<img class="logo" src="./Media/logo.png" alt="logo" width="25px" height="25px">
<ul>
    <li><a href="./index.html">Home</a></li>
    <li><a href="">Pag 1</a></li>
    <li><a href="">Pag 2</a></li>
</ul>
</div>`

class NavBar extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = template;
    }
}
customElements.define("nav-bar", NavBar);
