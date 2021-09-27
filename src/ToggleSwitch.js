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
        width: 9.75vmin;
        height: 5.25vmin; 
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
        width: 9.75vmin;
        height: 5.25vmin;
        border-radius: 5.25vmin;
        --dark: var(--dark-mode) white;
        background-color: var(--dark, #333);
    }
    
    input:after  {
        top: 0.25vmin;
        left: 0.275vmin;
        width: 4.75vmin;
        height: 4.75vmin;
        border-radius: 4.75vmin;
        --dark: var(--dark-mode) #333;
        background-color: var(--dark, white);
    }
    
    input:checked:after {
        transform: translateX(4.325vmin);
    }
    
    @media (min-width: 800px), (min-height: 800px) and (orientation: portrait) {
        :host, input, input:before {
            width: 5.5vmin;
            height: 3vmin;
        }
        input:before {
            border-radius: 3vmin;
        }
        input:after {
            top: 0.14vmin;
            left: 0.2vmin;
            width: 2.75vmin;
            height: 2.75vmin;
            border-radius: 2.75vmin;
        }
        input:checked:after {
            transform: translateX(2.45vmin);
        }
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
