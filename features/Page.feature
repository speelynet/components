Feature: Page component

  Background:
    Given I render a <custom-page> component

  Scenario: default slot
    When I append a <p> element with the content "Hello, World!"
    Then I should see a <p> element containing "Hello, World!"
                            # in the Shadow DOM

  Scenario: override default sub-heading
    When I append a <span> element connected to slot "sub" with the content "Hello, World!"
    Then I should see a <span> element containing "Hello, World!"
