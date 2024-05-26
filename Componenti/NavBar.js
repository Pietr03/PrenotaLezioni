{
  const template = `<link rel="stylesheet" href="./Stili/NavBar.css">
<div class="navbar">
<img class="logo" src="./Media/logo.png" alt="logo" width="25px" height="25px">
<ul>
    <li id="index"><a href="./index.html">Home</a></li>
    <li id="pag1"><a href="./pag1.html">Pag 1</a></li>
    <li id="pag2"><a href="./pag2.html">Pag 2</a></li>
</ul>
</div>`;

  class NavBar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = template;
    }
  }
  customElements.define("nav-bar", NavBar);
}
