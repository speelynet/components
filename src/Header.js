const template = document.createElement("template");
template.innerHTML = `
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));
  }
}

customElements.define("custom-header", Header);
