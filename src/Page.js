const template = document.createElement("template");
template.innerHTML = `
<custom-header>
    <slot name="sub" slot="sub"></slot>
</custom-header>
<slot name="content"></slot>
`.trim();

class Page extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("custom-page", Page);
