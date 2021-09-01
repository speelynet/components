Feature: Toggle Switch component

  Background:
    Given I render a <toggle-switch> component

  @wip
  Scenario: 'toggled' event
    Given I register an event watcher for the "toggled" event
    When I click the <input> child element
    Then the "toggled" event should have been fired
    And the "toggled" event data should contain the details
      """
      {
        "checked": true
      }
      """
    When I click the <input> child element
    Then the "toggled" event data should contain the details
      """
      {
        "checked": false
      }
      """
