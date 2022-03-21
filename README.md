

<p align="center">
    <h1 align="center">
      <img width="40" src="https://github.com/DecentraWorldDEWO/DeMix_Subgraph/blob/main/logo.png">  
      DeMix Subgraph - by DecentraWorld
    </h1>
    <p align="center">A decentralized protocol for indexing and querying data from DeMix contracts across all supported blockchains.</p>
</p>


<div align="center">
    <h4> Supported Chains: 
    <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/bsc-demix-Subgraph">
            😁 BSC
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/mainnet-demix-subgraph">
            😄 ETH
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/fantom-demix-subgraph">
            😃 FTM
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/avalanche-demix-subgraph">
            😀 AVAX
        </a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/arbitrum-demix-subgraph">
            😇 ARB
        </a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/xdai-demix-subgraph">
            🙂 xDai
        </a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/cronos-demix-subgraph">
            🙃 CRO
        </a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/matic-demix-subgraph">
            🤩 MATIC
        </a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/avalanche-demix-subgraph">
            😝 OPTIMISM
        </a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/bsc-testnet-demix-subgraph">
            😗 Testnet
        </a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://thegraph.com/hosted-service/subgraph/decentraworlddewo/goerli-demix-subgraph">
            😙 Goerli
        </a>
    </h4>
</div>



| DeMix is a zero-knowledge DApp which allows a variety of Blockchain users to prove send & receive crypto currencies without revealing their original identity. At the same time, it allows users to collect their note without using a wallet with funds for gas (using relayers). It is designed to be a simple and useful privacy motivated DAPP for DecentraWorld's community and users. It's time to bring freedom to the people |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |




⚠️ This repositories is still being worked on [`version/0.0.1`](https://github.com/DecentraWorldDEWO/DeMix_Subgraph). We will update this repo with the final versio as soon as DeMix is launched across all supported blockchains mentioned above, and we`re done testing & stressing the beta version of DeMix. 






## Requirements

1. `node v16.14.2(LTS)`
2. `yarn 1.22.18`






## Create a "Hosted-Service" For Each Subgraph

1. Sign up with [`The Graph`](https://thegraph.com/hosted-service/)
2. Add a `subgraph` under hosted service.
3. The name of each subgraph needs to match the name on the script `package.json`.






## Deploy DeMix's Subgraphs

1. `yarn install`
2. `node ./create-yaml-file create-yaml -e chapel | mustache - mustache/yaml.mustache > subgraphs/demix-subgraph-chapel.yaml` replace the `chapel.yaml` with any other blockchain `.yaml` file. 
3. `yarn run generate-<blockchain_name_here>`
E.g: `yarn run generate-bsc`
4. replace `$TOKEN (line 52 in package.json)` with an access token
5. `yarn run deploy:demix-<blockchain_name_here>`
E.g: `yarn run deploy:demix-bsc`

Optional: `yarn run lint` to fix code and implement prettier






## Deployed subgraphs

The following is a list of our deployed subgraphs. Each `subgraph.yaml` file can be used with a `thegraph.com` hosted service. It helps our smart contracts to verify notes on the blockchain even when there is many transactions to look through.

| Chain ID | Subgraph                                                                                                                |   Status   |
| -------- | ----------------------------------------------------------------------------------------------------------------------- | ---------- |
| 97       | [Testnet-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/bsc-testnet-demix-Subgraph)     |  Deployed  |
| 1        | [Mainnet-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/mainnet-demix-Subgraph)         | Undeployed |
| 56       | [BSC-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/bsc-demix-Subgrapxh)                | Undeployed |
| 43114    | [Avalanche-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/avalanche-demix-Subgraph)     | Undeployed |
| 250      | [Fantom-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/fantom-demix-Subgraph)           | Undeployed |
| 137      | [Matic-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/matic-demix-Subgraph)             | Undeployed |
| 25       | [Cronos-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/cronos-demix-Subgraph)           | Undeployed |
| 42161    | [Arbitrum-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/arbitrum-demix-Subgraph)       | Undeployed |
| 10       | [Optimism-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/optimism-demix-Subgraph)       | Undeployed |
| 100      | [xDai-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/xdai-demix-Subgraph)               | Undeployed |
| 5        | [Goerli-DeMix-Subgraph](https://thegraph.com/hosted-service/subgraph/decentraworlddewo/goerli-demix-Subgraph)           | Undeployed |






## How to adjust this subgraph to your needs

We encourage everyone to use subgraphs for complicated indexing on the blockchain.
If you would like to use this repo for your own code, make sure to adjust the following files.

Example subgraph by The Graph: [`@graphprotocol/example-subgraph`](https://github.com/graphprotocol/example-subgraph)

1. The schema file [`schema.graphql`](https://github.com/DecentraWorldDEWO/DeMix_Subgraph/blob/main/schema.graphql) needs to match your contract`s query and indexing needs.
2. Create a new `subgraph.yaml` file in the `/subgraphs/subgraph.yaml` folder, and name it as you wish. You can use existing .yaml files as a referance, or the [`create-yaml-file.js`](https://github.com/DecentraWorldDEWO/DeMix_Subgraph/blob/main/create-yaml-file.js) file as a .yaml generator script.
3. Adjust mapping `.ts` files according to your needs, I'd suggest to follow TheGraph's documentation to learn how to initiate, build, and deploy your subgraphs properly. Always run the `yarn deploy` command above again to deploy the updated version of your subgraph. Mappings are AssemblyScript code called whenever the Graph Node finds an event or a call specified in the manifest.
4. In the mustache folder you will find templates to DeMix's subgraph, as we use multiple blockchain this makes the deployment process of each subgraph much easier. You can adjust the templates according to your need. The [`yaml.mustache`](https://github.com/DecentraWorldDEWO/DeMix_Subgraph/blob/main/mustache/yaml.mustache) file contains the `schema.graphql` template, that will need to watch the indexing schema that you need. 
5. The [`abis`](https://github.com/DecentraWorldDEWO/DeMix_Subgraph/blob/main/abis) folder contains abis of each contract that is needed for DeMix's indexing. Change the current files with the abi files of your contracts that will be indexed. These ABI files are being pulled by the `subgraph.yaml` file that is used to deploy your subgraph. 
6. The scripts in [`package.json`](https://github.com/DecentraWorldDEWO/DeMix_Subgraph/blob/main/package.json) are made to make the build & deployment process easy. Simply add/adjust the `generate`, `yaml`, `codegen`, `build`, and `deploy` scripts according to your new `subgraph.yaml` file name and other changes. 
