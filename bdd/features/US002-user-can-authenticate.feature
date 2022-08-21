@US002
Feature: User can authenticate himself

    In order to access task management
    A new User is able to authenticate himself

    [RULE01] an email is required in order to authenticate
    [RULE02] a password is required in order to authenticate
    [RULE03] provided email should be registered
    [RULE04] provided password should match with the password the user gave at registration

    Background: Setup for registration test cases
        Given A User that is not yet registered tagged as "Jordan"
        And A User that is already registered tagged as "Mary"

     @nominal
    Scenario: Nominal authentication flow
        When When "Mary" makes an authentication request
        Then "Mary" receives a successful response, with status "Ok" and we tag the response as "maryAuthenticationResponse"
        And In "maryAuthenticationResponse" response, "Mary" is only able to see his account ID and authentication token

