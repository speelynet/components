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

Then("I should see a(n) <{word}> element", function(word) {
  if (this.shadowRoot.querySelector(`${word}:not(slot ${word})`) === null) {
    for (const s of this.shadowRoot.querySelectorAll("slot")) {
      const assigned = s.assignedNodes();
      if (assigned.length === 0 && s.querySelector(word) !== null) {
        return;
      }
      for (const e of s.assignedNodes()) {
        if (e.nodeName === word.toUpperCase()) {
          return;
        }
      }
    }
  } else {
    return;
  }

  assert.fail(`found no <${word}> elements`);
});

Then("I should see a(n) <{word}> element reading {string}", function(word, string) {
  const elements = [...this.shadowRoot.querySelectorAll(`${word}:not(slot ${word})`)];
  this.shadowRoot.querySelectorAll("slot").forEach(s => elements.push(...s.assignedNodes().filter(v => v.nodeName === word.toUpperCase())));

  for (const e of elements) {
    if (e.textContent === string) {
      return;
    }
  }

  assert.fail(`found no <${word}> elements reading "${string}"`);
});
