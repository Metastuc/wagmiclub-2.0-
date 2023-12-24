// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2;

import "./extensions/VRC725Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./libraries/Strings.sol";

contract Badge is VRC725Enumerable {
    using Strings for uint256;
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _badgeCount; // Counter for badges minted

    string public baseURI_;

    constructor(string memory name, string memory symbol, address issuer, string memory uri)  {
        __VRC725_init(name, symbol, issuer);
        baseURI_ = uri;
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
        return baseURI_;
    }

    function _updateURI(string memory uri) external onlyOwner {
        baseURI_ = uri;
    }
}