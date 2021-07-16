const template = document.createElement("template");
template.innerHTML = `
`.trim();

class Page extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));
  }
}

customElements.define("custom-page", Page);
