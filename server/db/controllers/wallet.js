import { getPublicFromWallet } from '../../logic/wallet';
import { getAccountBalance } from '../../logic/blockchain';
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

export default {
	address,
	balance,
	transactionPool
};
