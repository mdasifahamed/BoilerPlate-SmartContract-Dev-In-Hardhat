// Write You Contract From Here
// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0

// First Define version
pragma solidity ^0.8.20;

// Import
import "ImportFiles";

// Custom Errors
error SomeError();

// Define Contract
contract DummyContract {
    /**
     * Follow The below order to declare states and functions.
     */
    // 1. Declare Enum
    // 2. Declare Custom Type
    /** 3.
     * Declare State Variables
     * First Decalare immutable and constant ones
     * Then Delare Other State Variables
     * */
    // 4. Declare Events
    // 5. Define Modifiers
    // 6. Declare Constructor
    // 7. Declare Fallback And Recieve Functions First
    //Within a group place the view and pure functions last.
    /** 8. Declare External Functions
        Follow below order for function modifier
                1.Visibility
                2.Mutability
                3.Virtual
                4.Override
                5.Custom modifiers
    */
    // 9.  Decalare Public Functions
    // 10. Declare Internal Functions
    // 11. Declare Pure Functions
}
