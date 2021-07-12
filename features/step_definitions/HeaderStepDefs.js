import {Then} from "@cucumber/cucumber";
import fs from "fs";
import path from "path";
import assert from "assert";

Then("I should see a sub-heading from subheadings.json", function() {
  for (let s of JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../src/subheadings.json")).toString())) {
    if (this.shadowRoot.textContent.includes(s + "!")) {
      return;
    }
  }

  assert.fail("could not find any valid sub-headings in rendered component");
});
