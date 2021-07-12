import {Given, When, Then} from "@cucumber/cucumber";
import assert from "assert";

Given("I render a(n) <{word}> component", function(word) {
  document.body.innerHTML = "";
  this.component = document.createElement(word);
  this.shadowRoot = this.component.shadowRoot;
  document.body.appendChild(this.component);
});

Then("I should see {string}", function(string) {
  assert.match(this.shadowRoot.textContent, new RegExp(string, "g"));
});
