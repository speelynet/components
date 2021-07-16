Feature: Header component

  Background:
    Given I render a <custom-header> component

  @wip
  Scenario: default sub-header
    Then I should see a <span#subheading> element

  @wip
  Scenario: override default sub-header
    When I append a <span> element connected to slot "sub" with the content "Hello, World!"
    Then I should see a <span> element reading "Hello, World!"
