Feature: Header component

  Scenario: sub-heading
    Given I render a <custom-header> component
    When I append a <span> element connected to slot "sub" with the content "Hello, World!"
    Then I should see a <span> element containing "Hello, World!"
