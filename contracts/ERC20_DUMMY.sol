// Write You Contract From Here
// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0

// First Define version
pragma solidity ^0.8.20;

// Import
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Custom Errors
error SomeError();

contract MyToken is ERC20 {
    address public deployer;

    constructor(address _depolyer) ERC20("ASSET", "AST") {
        deployer = _depolyer;
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
