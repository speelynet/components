

const template = document.createElement("template");
template.innerHTML = `
<div style="padding: 0.67em;">
  <custom-header>
      <slot name="sub" slot="sub"></slot>
  </custom-header>
  <slot></slot>
</div>
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

// Add global styles
const s = document.createElement("style");
s.innerHTML = `
@media(prefers-color-scheme: dark) {
    body {
        background: #333;
    }
    * {
        color: white;
    }
}
`.trim();
document.head.appendChild(s);
