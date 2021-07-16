Feature: Page component

  @wip
  Scenario: content slot
    Given I render a <custom-page> component
    When I append a <div> element connected to slot "content" with the content "<p>Hello, World!</p>"
    Then I should see a <p> element reading "Hello, World!"

  @wip
  Scenario: override default sub-heading
    Given I render a <custom-page> component
    When I append a <span> element connected to slot "sub" with the content "Hello, World!"
    Then I should see a <span> element reading "Hello, World!"
