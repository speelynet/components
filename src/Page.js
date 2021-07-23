

const template = document.createElement("template");
template.innerHTML = `
<div style="padding: 0.67em; position: relative;">
  <custom-header>
      <slot name="sub" slot="sub"></slot>
  </custom-header>
  <slot></slot>
  <footer style="padding-top: 0.5em; border-top: 1px solid; position: absolute; top: calc(100vh - 2.17em - 1px); width: calc(100vw - 1.34em)">&copy; 2021 Noah Friedman | <a href="/LICENSE">Eclipse Public License version 2.0</a></footer>
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
* {
    font-family: Arial, sans-serif;
}

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
