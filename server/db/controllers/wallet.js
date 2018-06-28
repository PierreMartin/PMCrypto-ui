import { getPublicFromWallet } from '../../logic/wallet';
import { generateNextBlock, getAccountBalance, sendTransaction } from '../../logic/blockchain';
import { getTransactionPool } from '../../logic/transactionPool';

/**
 * GET /api/getaddress
 */
export function address(req, res) {
	res.status(200).json({ address: getPublicFromWallet(), messageServer: 'Public address fetched' });
}

/**
 * GET /api/getbalance
 */
export function balance(req, res) {
	res.status(200).json({ balance: getAccountBalance(), messageServer: 'Balance fetched' });
}

/**
 * GET /api/gettransactionpool
 */
export function transactionPool(req, res) {
	res.status(200).json({ transactionPool: getTransactionPool(), messageServer: 'Transaction Pool fetched' });
}

/**
 * POST api/sendTransaction
 * Creates a transaction to our local transaction pool based on the existing wallet
 */
export function sendTx(req, res) {
	try {
		const { address, amount } = req.body;
		if (address === undefined || amount === undefined) throw Error('invalid address or amount');

		res.status(200).json({ transactionSended: sendTransaction(address, amount), messageServer: 'Transaction successful' });
	} catch (e) {
		res.status(500).json({ transactionSended: e.message, messageServer: 'Transaction failed' });
	}
}

/**
 * POST api/mineBlock
 * mine - include a transaction in the blockchain
 */
export function mineOne(req, res) {
	const newBlock = generateNextBlock();

	if (newBlock === null) {
		res.status(400).json({messageServer: 'could not generate block'});
	}

	res.status(200).json({newBlock, messageServer: 'Mine block successful'});
}

export default {
	address,
	balance,
	transactionPool,
	sendTx,
	mineOne
};
