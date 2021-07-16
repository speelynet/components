import {Given, When, Then} from "@cucumber/cucumber";
import assert from "assert";

Given("I render a(n) <{word}> component", function(word) {
  document.body.innerHTML = "";

  this.component = document.createElement(word);
  this.shadowRoot = this.component.shadowRoot;
  document.body.appendChild(this.component);
});

When("I append a(n) <{word}> element connected to slot {string} with the content {string}", function(element, slot, content) {
  const e = document.createElement(element);
  e.setAttribute("slot", slot);
  e.innerHTML = content;

  this.component.appendChild(e);
});

Then("I should see a(n) <{word}> element reading {string}", function(word, string) {
  for (const e of this.shadowRoot.querySelectorAll(word)) {
    if (e.textContent === string) {
      return;
    }
  }

  assert.fail(`found no <${word}> elements reading "${string}"`);
});
