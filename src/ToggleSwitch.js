const template = document.createElement("template");
template.innerHTML = `
<style>
    :host {
        display: inline-flex;
    }

    input {
        visibility: hidden;
        position: relative;
    }
    
    :host, input, input:before {
        width: 2em;
        height: 1em; 
    }
    
    input:before, input:after {
        content: "";
        visibility: visible;
        position: absolute;
        transition: transform 0.4s;
    }
    
    input:before {
        top: 0;
        left: 0;
        width: 2em;
        height: 1em;
        border-radius: 1em;
        --dark: var(--dark-mode) white;
        background-color: var(--dark, #333);
    }
    
    input:after  {
        top: 0.125em;
        left: 0.13em;
        width: 0.8em;
        height: 0.8em;
        border-radius: 1em;
        --dark: var(--dark-mode) #333;
        background-color: var(--dark, white);
    }
    
    input:checked:after {
        transform: translateX(1em);
    }
</style>
<input type="checkbox" />
`.trim();

class ToggleSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));

    // Dispatch 'toggled' event on click
    this.shadowRoot.querySelector("input").onclick = e => {
      this.dispatchEvent(new CustomEvent("toggled", {detail: {checked: e.target.checked}, bubbles: true, composed: true}));
    };
  }
}

window.customElements.define("toggle-switch", ToggleSwitch);
