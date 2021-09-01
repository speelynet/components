const template = document.createElement("template");
template.innerHTML = `
<style>
    input {
        visibility: hidden;
    }
    
    input:before {
        content: "";
    }
</style>
<input type="checkbox" />
`.trim();

class ToggleSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("input").onclick = e => {
      this.dispatchEvent(new CustomEvent("toggled", {bubbles: true, composed: true}));
    };
  }
}

window.customElements.define("toggle-switch", ToggleSwitch);
