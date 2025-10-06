# OpenArena

OpenArena is a PvP game where players can form squads with any NFTs, unleash unique auto-generated skills from each NFT trait, and battle others for staked $U2U.
https://openarena.cc/

# Demo material:
* Website: https://openarena.cc/
* Demo video: https://youtu.be/iWlqF__-ei4?si=BLtdTkDzTYUqRDkR
* Contract OpenArena: https://u2uscan.xyz/address/0xaF24cAd4ef87494774494E6fc265e7432236F7eC
* Full detail submission on Hackquest: https://www.hackquest.io/projects/OpenArena

# How to run
* Run npm install to install dependencies
* Execute npm run dev and visit http://localhost:5173/

# Utilizing U2U chain
* Use $U2U as stake for each battle, winner takes $U2U from loser
* Utilizing U2U chain's fast transaction speed with low gas fees ensures seamless and efficient interactions such as instantly creating matches and challenging others, greatly enhancing the gaming experience.

# Technical Workflow
* User chooses 3 NFTs then stakes $U2U to contract to create struct with unique battleID in contract
* Backend verifies on-chain data and creates a queue with that battleID and the NFT squad user chose
* Other user who joins that battleID must deposit the same amount of money to contract and choose 3 NFTs to battle
* After verifying on-chain, backend processes battle and returns the signature to address who won to withdraw the stake (the contract nonce prevents signature reuse and has rule that only defender or attacker can withdraw money)

# Team
* Quan Nguyen: Project Manager & Lead Developer - Oversees business model and overall architecture.

* Minh Nguyen: Full-Stack Developer - Develops and maintains game engine & smart contract

* Oanh Kim - Full-Stack Developer - Builds front-end interfaces and integrates game assets.


# Contact
**nguyenphuquan229@gmai.com** 



