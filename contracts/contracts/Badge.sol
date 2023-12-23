// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2;

import "./extensions/VRC725Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Badge is VRC725Enumerable, Ownable {
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _badgeCount; // Counter for badges minted

    string public _baseURI;
    address public

    constructor(string memory name, string memory symbol, address issuer, string memory uri)  {
        __VRC725_init(name, symbol, issuer);
        _baseURI = uri;
    }

    function mint(address owner) external {
        _safeMint(owner, _badgeCount.current());
        _badgeCount.increment();
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURI;
    }

    function _updateURI(string memory uri) external onlyOwner {
        return _baseURI;
    }
}