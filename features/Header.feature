Feature: Header component

  @wip
  Scenario: content
    Given I render a <custom-header> component
    Then I should see "Welcome to SpeelyNet!"
    And I should see a sub-heading from subheadings.json
