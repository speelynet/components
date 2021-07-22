

const template = document.createElement("template");
template.innerHTML = `
<custom-header>
    <slot name="sub" slot="sub"></slot>
</custom-header>
<slot></slot>
`.trim();

class Page extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));

    import("./subheadings.js")
      .then(subheadings => subheadings.default)
      .then(subheading => {
        this.shadowRoot.querySelector("custom-header slot").innerHTML = subheading();
      });
  }
}

window.customElements.define("custom-page", Page);
