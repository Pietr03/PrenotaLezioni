{
const template = `<link rel="stylesheet" href="./Stili/Footer.css">
<footer class="footer">
      <span>Email: example@mail.it</span>
      <span>Telefono: +39 123 456 7890</span>
</footer>`

class Footer extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = template;
    }
}
customElements.define("footer-custom", Footer);
}