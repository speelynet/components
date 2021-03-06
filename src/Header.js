const template = document.createElement("template");
template.innerHTML = `
<style>
  *, ::slotted(*) {
    font-family: "cooper-black-std", sans-serif !important;
  }
  h1 span {
    --c1: var(--dark-mode) black;
    --c2: var(--dark-mode) white;
    text-shadow: 0 0 3px var(--c1, white), 0 0 7px var(--c2, black);
  }
</style>
<div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.67em; margin-bottom: 0.67em; border-bottom: 1px solid;">
  <h1 style="margin: 0; flex-shrink: 1;"><i>Welcome to</i> <span>SpeelyNet</span></h1>
  <div style="display: flex; align-items: center; flex-shrink: 2;">
    <span style="font-style: italic; margin-right: 5px;"><slot name="sub"></slot></span>
  </div>
</div>
`.trim();

class Header extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("custom-header", Header);

// Import external CSS
const e = document.createElement("link");
e.setAttribute("rel", "stylesheet");
e.setAttribute("href", "https://use.typekit.net/qbg6wve.css");
document.head.appendChild(e);
