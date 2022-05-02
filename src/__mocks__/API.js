const mockLatestBlock = {
  "code": 0,
  "message": "success",
  "data": [{
    "hash": "0000000000000000000706e761a0e9ed96caba1657220af69e929215085a4e2c",
    "height": 717599,
    "time": 1641568091,
    "block_index": 717599
  }, {
    "hash": "000000000000000000004c953a604c65434d14a01200c83cc1a165b39a4ba853",
    "height": 717590,
    "time": 1641564135,
    "block_index": 717590
  }]
};

const mockOneBlock = {
  "code": 0,
  "message": "success",
  "data": {
    "block_index": 717678,
    "hash": "00000000000000000004490806dd81f3a6fe7d386a79b1de5f54cbd3bbab5e3b",
    "time": 1641615983,
    "ver": 1073676292,
    "prev_block": "00000000000000000003fc1f94c9992706bb2cbb781dcec38ac16d61b4a2ba57",
    "size": 973543,
    "tx": [
      {
        "hash": "5cf0617cfa8bfe99c2b2fd823ad58cda9e287c745f83572dac4c312e2116267a",
        "ver": 1,
        "vin_sz": 1,
        "vout_sz": 5,
        "size": 415,
        "weight": 1552,
        "fee": 0,
        "relayed_by": "0.0.0.0",
        "lock_time": 1024381021,
        "tx_index": 4297727955813929,
        "double_spend": false,
        "time": 1641615983,
        "block_index": 717678,
        "block_height": 717678,
        "inputs": [
          {
            "sequence": 0,
            "witness": "01200000000000000000000000000000000000000000000000000000000000000000",
            "script": "036ef30a2cfabe6d6dda72d1e3003a1d80118c9b45005cea72ca6e4c234ec644e11195e26707adec9410000000f09f909f092f4632506f6f6c2f6b00000000000000000000000000000000000000000000000000000000000000000000000500970b0000",
            "index": 0,
            "prev_out": {
              "spent": true,
              "script": "",
              "spending_outpoints": [
                {
                  "tx_index": 4297727955813929,
                  "n": 0
                }
              ],
              "tx_index": 0,
              "value": 0,
              "n": 4294967295,
              "type": 0
            }
          }
        ],
        "out": [
          {
            "type": 0,
            "spent": true,
            "value": 631032039,
            "spending_outpoints": [
              {
                "tx_index": 2031316697067748,
                "n": 12
              }
            ],
            "n": 0,
            "tx_index": 4297727955813929,
            "script": "76a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac",
            "addr": "1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY"
          },
          {
            "type": 0,
            "spent": false,
            "value": 0,
            "spending_outpoints": [],
            "n": 1,
            "tx_index": 4297727955813929,
            "script": "6a24aa21a9ed991e0fc072fe4b548ba3dc4f4bda2fc16136ab36fe525aba5fc1b438a7aa3b62"
          },
          {
            "type": 0,
            "spent": false,
            "value": 0,
            "spending_outpoints": [],
            "n": 2,
            "tx_index": 4297727955813929,
            "script": "6a244861746824058dfe6ecaf2e6f1b2da7921a6d90872df7101966affe28f1338c4b05d0f75"
          },
          {
            "type": 0,
            "spent": false,
            "value": 0,
            "spending_outpoints": [],
            "n": 3,
            "tx_index": 4297727955813929,
            "script": "6a4c2952534b424c4f434b3ae29e7158db9bb5cf0d3bc77d87ae1550d40bcc941877d033254a3725003c7276"
          },
          {
            "type": 0,
            "spent": false,
            "value": 0,
            "spending_outpoints": [],
            "n": 4,
            "tx_index": 4297727955813929,
            "script": "6a24b9e11b6dc0ba4064d8679b1e99068c77a5fdc3d01293f0274fe5f8a8cd049ac4f2e1a562"
          }
        ]
      },
      {
        "hash": "302bccf464ba8505b80d75ce7e2a3b50d70482dbd77fd61d4fe0dde1b882096e",
        "ver": 1,
        "vin_sz": 1,
        "vout_sz": 1,
        "size": 188,
        "weight": 752,
        "fee": 50000,
        "relayed_by": "0.0.0.0",
        "lock_time": 0,
        "tx_index": 3871588061297596,
        "double_spend": false,
        "time": 1641615451,
        "block_index": 717678,
        "block_height": 717678,
        "inputs": [
          {
            "sequence": 4294967295,
            "witness": "",
            "script": "4730440220614ce91d6500053c8dba1813dbf906052b19f15986ca2fe8f0462fa06a776fdd022037ee08c777c8642bea81e2692a11ae80204aecabeee4c41244e6aafd5eea2b2c012102173385757e45d25d3b08e469442aeb7eccbf614f531bff5d20214e809c1ae574",
            "index": 0,
            "prev_out": {
              "spent": true,
              "script": "76a914eba5176d18c8b2192643f730ed0f599716a35eeb88ac",
              "spending_outpoints": [
                {
                  "tx_index": 3871588061297596,
                  "n": 0
                }
              ],
              "tx_index": 1264285399202722,
              "value": 1116000,
              "addr": "1NUyZqgEsBTwvmHkcYAFNhNnNYX2Sryyai",
              "n": 2,
              "type": 0
            }
          }
        ],
        "out": [
          {
            "type": 0,
            "spent": true,
            "value": 1066000,
            "spending_outpoints": [
              {
                "tx_index": 2210196105991699,
                "n": 6
              }
            ],
            "n": 0,
            "tx_index": 3871588061297596,
            "script": "0014631b21700a7901c89091f8ecdc17152b8149c922",
            "addr": "bc1qvvdjzuq20yqu3yy3lrkdc9c49wq5njfzml2pqg"
          }
        ]
      }
    ]
  }
}

export default {

  getLatestBlocks: jest.fn().mockResolvedValue(mockLatestBlock),
  getOneBlock: jest.fn().mockResolvedValue(mockOneBlock)

};
