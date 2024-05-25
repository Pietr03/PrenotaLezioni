{
const template = `<link rel="stylesheet" href="./Stili/NavBar.css">
<div class="navbar">
<img class="logo" src="./Media/logo.png" alt="logo" width="25px" height="25px">
<ul>
    <li id="index"><a href="./index.html">Home</a></li>
    <li id="pag1"><a href="./pag1.html">Pag 1</a></li>
    <li id="pag2"><a href="./pag2.html">Pag 2</a></li>
</ul>
</div>`

class NavBar extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = template;
        
        const path = window.location.pathname;
        const page = path.split("/").pop().replace(".html", '');

        // Spiegazione con aiuto della console
        console.log(path); // stampa l'intero indirizzo
        console.log(path.split("/")); // spezza l'indirizzo dopo ogni slash e li salva in un array
        console.log(path.split("/").pop()); // recupera l'ultimo elemento dell'array
        console.log(path.split("/").pop().replace(".html", '')); // sostituisce il pezzo ".html" con una stringa vuota, lasciando il nome puro della pagina

        const menuItem = this.querySelector(`#${page}`);
        if (menuItem) {
            menuItem.classList.add("active");
        }
    }
}
customElements.define("nav-bar", NavBar);


}