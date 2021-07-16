Feature: Header component

  @wip
  Scenario: Override default sub-header
    Given I render a <custom-header> component
    When I append a <span> element connected to slot "sub" with the content "Hello, World!"
    Then I should see a <span> element reading "Hello, World!"
