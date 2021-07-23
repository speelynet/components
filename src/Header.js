const template = document.createElement("template");
template.innerHTML = `
<style>
  * {
    font-family: "cooper-black-std", sans-serif;
  }
  
  @media (prefers-color-scheme: dark) {
    h1 span {
      text-shadow: 0 0 3px black, 0 0 7px white;
    }
  }
  @media (prefers-color-scheme: light) {
    h1 span {
      text-shadow: 0 0 3px white, 0 0 7px black;
    }
  }
 
</style>
<div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.67em; margin-bottom: 0.67em; border-bottom: 1px solid;">
  <h1 style="margin: 0;"><i>Welcome to</i> <span>SpeelyNet</span></h1>
  <span style="font-style: italic;"><slot name="sub"></slot></span>
</div>
`.trim();

class Header extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));

    const root = this.getRootNode();
    if (root.host === undefined || root.host.tagName !== "CUSTOM-PAGE") {
      import("./subheadings.js")
        .then(subheadings => subheadings.default)
        .then(subheading => {
          this.shadowRoot.querySelector("slot").innerHTML = subheading();
        });
    }
  }
}

window.customElements.define("custom-header", Header);

// Import external CSS
const e = document.createElement("link");
e.setAttribute("rel", "stylesheet");
e.setAttribute("href", "https://use.typekit.net/qbg6wve.css");
document.head.appendChild(e);
