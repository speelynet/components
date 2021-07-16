const template = document.createElement("template");
template.innerHTML = `
<style>
  * {
    font-family: "cooper-black-std", sans-serif;
  }
  
  span#subheading {
    font-style: italic;
  }
  
  @media (prefers-color-scheme: dark) {
    * {
      color: white;
    }
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
<div style="display: flex; align-items: center; justify-content: space-between; padding: 0.67em; margin-bottom: 0.67em; border-bottom: 1px solid;">
  <h1 style="margin: 0;"><i>Welcome to</i> <span>SpeelyNet</span></h1>
  <span id="subheading"></span>
</div>
`.trim();

class Header extends HTMLElement {
  subheadings = [
    "Crust included",
    "The speeliest of nets",
    `Now ${Math.floor(Math.random() * 899 + 101)}% more speely`,
    "It's dot com"
  ];

  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById("subheading").innerText = this.subheadings[Math.floor(Math.random() * this.subheadings.length)] + "!";
  }
}

customElements.define("custom-header", Header);

// Import external CSS
const e = document.createElement("link");
e.setAttribute("rel", "stylesheet");
e.setAttribute("href", "https://use.typekit.net/qbg6wve.css");
document.head.appendChild(e);
