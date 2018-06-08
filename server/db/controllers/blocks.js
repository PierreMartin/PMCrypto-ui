import { sendTransaction } from '../../logic/blockchain';
import Block from '../models/block';

/**
 * Get All
 */
export function all(req, res) {
	Block.find({}).exec((err, courses) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.status(200).json(courses);
  });
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

export default {
  all,
	sendTx
};
