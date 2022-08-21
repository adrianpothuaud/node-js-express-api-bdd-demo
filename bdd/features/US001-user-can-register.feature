@US001
Feature: User can register

    In order to access task management
    A new User is able to register

    [RULE01] an email is required in order to register
    [RULE02] a password is required in order to register
    [RULE03] an email cannot be registered twice

    Background: Setup for registration test cases
        Given A User that is not yet registered tagged as "Jordan"
        And A User that is already registered tagged as "Mary"

    @nominal
    Scenario: Nominal registration flow
        When When "Jordan" makes a registration request
        Then "Jordan" User account is created
        And "Jordan" receives a successful response, with status "Created" and we tag the response as "jordanRegistrationResponse"
        And In "jordanRegistrationResponse" response, "Jordan" is only able to see his new account ID

    @RULE01 @error
    Scenario: Error case where the email is not provided
        When When "Jordan" makes a registration request but forget to provide his email
        Then "Jordan" User account is not created
        And "Jordan" receives an unsuccessful response, with status "Bad Request" and we tag the response as "jordanRegistrationResponse"
        And In "jordanRegistrationResponse" response, "Jordan" is able to see that the email field is required

    @RULE02 @error
    Scenario: Error case where the password is not provided
        When When "Jordan" makes a registration request but forget to provide his password
        Then "Jordan" User account is not created
        And "Jordan" receives an unsuccessful response, with status "Bad Request" and we tag the response as "jordanRegistrationResponse"
        And In "jordanRegistrationResponse" response, "Jordan" is able to see that the password field is required

    @RULE03 @error
    Scenario: Error case where the email is a duplicate of already registered
        When When "Jordan" makes a registration request but provides the same email as "Mary"
        Then "Jordan" User account is not created
        And "Jordan" receives an unsuccessful response, with status "Conflict" and we tag the response as "jordanRegistrationResponse"
        And In "jordanRegistrationResponse" response, "Jordan" is able to see that the email is already registered
