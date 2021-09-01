import {Given, When, Then, Before} from "@cucumber/cucumber";
import assert from "assert";

Before(function() {
  this.events = {};
});

Given("I render a(n) <{word}> component", function(word) {
  document.body.innerHTML = "";

  this.component = document.createElement(word);
  this.shadowRoot = this.component.shadowRoot;
  document.body.appendChild(this.component);
});

Given("I register an event watcher for the {string} event", function(string) {
  document.body.addEventListener(string, e => {
    this.events[string] = e;
  });
});

When("I append a(n) <{word}> element with the content {string}", function(word, string) {
  const e = document.createElement(word);
  e.innerHTML = string;
  this.component.appendChild(e);
});

When("I append a(n) <{word}> element connected to slot {string} with the content {string}", function(element, slot, content) {
  const e = document.createElement(element);
  e.setAttribute("slot", slot);
  e.innerHTML = content;

  this.component.appendChild(e);
});

When("I click the <{word}> child element", function(word) {
  const e = this.shadowRoot.querySelector(word);
  assert.notStrictEqual(e, null, `found no <${word}> elements`);
  e.click();
});

Then("I should see a(n) <{word}> element", function(word) {
  if ([...this.shadowRoot.querySelectorAll(word)].filter(e => !e.matches("slot *")).length === 0) {
    for (const s of this.shadowRoot.querySelectorAll("slot")) {
      for (const e of s.assignedNodes({flatten: true})) {
        if ([e, ...e.querySelectorAll(word)].filter(e => e.matches(word)).length !== 0) {
          return;
        }
      }
    }
  } else {
    return;
  }


  assert.fail(`found no <${word}> elements`);
});

Then("I should see a(n) <{word}> element containing {string}", function(word, string) {
  for (const e of [...this.shadowRoot.querySelectorAll(word)].filter(e => !e.matches("slot *"))) {
    if (e.innerHTML === string) {
      return;
    }
  }
  for (const s of [...this.shadowRoot.querySelectorAll("slot")]) {
    for (const e of s.assignedNodes({flatten: true}).filter(e => e.tagName !== undefined)) {
      for (const t of [e, ...e.querySelectorAll(word)].filter(e => e.matches(word))) {
        if (t.innerHTML === string) {
          return;
        }
      }
    }
  }

  assert.fail(`found no <${word}> elements reading "${string}"`);
});

Then("the {string} event should have been fired", function(string) {
  assert.notStrictEqual(this.events[string], undefined, `the "${string}" event was not fired`);
});

Then("the {string} event data should contain the details", function(string, details) {
  assert.deepStrictEqual(this.events[string].detail, JSON.parse(details));
});
