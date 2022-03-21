module.exports = {
  yaml: [
    {
      specVersion: '0.0.2',
      repository: 'https://github.com/DecentraWorldDEWO/DeMix_Subgraph',
      dataSourceKind: 'ethereum/contract',
      mapping: {
        kind: 'ethereum/events',
        version: '0.0.5',
        language: 'wasm/assemblyscript',
      },
    },
  ],
};
