# PMCrypto UI
A simple cryptocurrency written in javascript

Implementation of :
- A defined block and blockchain structure
- A Proof-of-Work scheme (mining)
- Transactions (Public-key cryptography and signatures)
- Wallets

Not Implemented
- Fees
- Private-key file no encrypted


### Install :
`$ [sudo] npm i`

`$ [sudo] mongod`

`$ npm run dev | start | lint`

If you have a error at installation of node-sass, run `$ [sudo] npm i -D node-sass sass-loader --unsafe-perm`


##### Get blockchain
```
curl http://localhost:3000/blocks
```

##### Mine a block
```
curl -X POST http://localhost:3000/mineBlock
``` 

##### Send transaction
```
curl -H "Content-type: application/json" --data '{"address": "04bfcab8722991ae774db48f934ca79cfb7dd991229153b9f732ba5334aafcd8e7266e47076996b55a14bf9913ee3145ce0cfc1372ada8ada74bd287450313534b", "amount" : 35}' http://localhost:3000/sendTransaction
```

##### Query transaction pool
```
curl http://localhost:3000/transactionPool
```

##### Mine transaction
```
curl -H "Content-type: application/json" --data '{"address": "04bfcab8722991ae774db48f934ca79cfb7dd991229153b9f732ba5334aafcd8e7266e47076996b55a14bf9913ee3145ce0cfc1372ada8ada74bd287450313534b", "amount" : 35}' http://localhost:3000/mineTransaction
```

##### Get balance
```
curl http://localhost:3000/balance
```

#### Query information about a specific address
```
curl http://localhost:3000/address/04f72a4541275aeb4344a8b049bfe2734b49fe25c08d56918f033507b96a61f9e3c330c4fcd46d0854a712dc878b9c280abe90c788c47497e06df78b25bf60ae64
```

##### Add peer
```
curl -H "Content-type:application/json" --data '{"peer" : "ws://localhost:6001"}' http://localhost:3000/addPeer
```
#### Query connected peers
```
curl http://localhost:3000/peers
```
