

const template = document.createElement("template");
template.innerHTML = `
<style>
    :any-link {
        --dark-link: var(--dark-mode) #2196F3;
        --dark-visited: var(--dark-mode) #B388FF;
    }
    :link {
        color: var(--dark-link, #0000EE);
    }
    :visited {
        color: var(--dark-visited, #551A8B); 
    }
    footer > * {
        margin-bottom: 0.5em;
    }
</style>
<div style="padding: 0.67em; display: flex; flex-direction: column; justify-content: space-between; min-height: calc(100vh - 1.34em);">
    <div>
        <custom-header>
            <slot name="sub" slot="sub"></slot>
        </custom-header>
        <slot></slot>
    </div>
    <footer style="padding-top: 0.5em; border-top: 1px solid; position: relative; bottom: 0; display: flex; justify-content: space-between; flex-wrap: wrap;">
        <span>&copy; 2021 Noah Friedman | <a href="/LICENSE">Eclipse Public License version 2.0</a></span>
        <div style="display: flex; align-items: center;">
            <span style="margin-right: 0.5em;">Dark Mode</span>
            <toggle-switch></toggle-switch>
        </div>
    </footer>
</div>
`.trim();

class Page extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
      .appendChild(template.content.cloneNode(true));

    // Generate a subheading for Header
    import("./subheadings.js")
      .then(subheadings => subheadings.default)
      .then(subheading => {
        this.shadowRoot.querySelector("custom-header slot").innerHTML = subheading();
      });

    // Set up dark mode toggle switch and event handler
    const darkToggle = this.shadowRoot.querySelector("toggle-switch");
    const docStyle = document.documentElement.style;
    if (docStyle.getPropertyValue("--dark-mode") !== "initial") {
      darkToggle.shadowRoot.querySelector("input").checked = true;
    }
    darkToggle.addEventListener("toggled", ({detail}) => {
      docStyle.setProperty("--dark-mode", detail.checked ? " " : "initial");
      document.cookie = `dark-mode=${detail.checked};`;
    });
  }
}

window.customElements.define("custom-page", Page);

// Add global styles
const s = document.createElement("style");
s.innerHTML = `
* {
    font-family: Arial, sans-serif;
    --dark: var(--dark-mode) white;
    color: var(--dark, initial);
}

body {
    margin: 0;
    --dark: var(--dark-mode) #333;
    background: var(--dark, white);
}
`.trim();
document.head.appendChild(s);
