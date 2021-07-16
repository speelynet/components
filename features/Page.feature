Feature: Page component

  @wip
  Scenario:
    Given I render a <custom-page> component
    When I append a <div> element connected to slot "content" with the content "<p>Hello, World!</p>"
    Then I should see a <p> element reading "Hello, World!"
