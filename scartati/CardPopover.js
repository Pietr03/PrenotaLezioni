const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./Stili/CardPopover.css">
  <button class="card" popovertarget="popover-testo">
    <h3><slot name="titolo">Chi sono</slot></h3>
  </button>
  <div id="popover-testo" popover>
    <p><slot name="contenuto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, dignissimos.</slot></p>
  </div>
`;

class CardPopover extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.popoverButton = shadowRoot.getElementById('popover-button');
    this.popoverText = shadowRoot.getElementById('popover-testo');
    
    this.popoverButton.addEventListener('click', () => {
      this.togglePopover();
    });
  }

  togglePopover() {
    this.popoverText.classList.toggle('visible');
  }

}

customElements.define('card-popover', CardPopover);
