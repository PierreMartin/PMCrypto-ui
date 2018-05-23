import { getPublicFromWallet } from '../../logic/wallet';

/**
 * GET /api/getaddress
 */
export function address(req, res) {
	res.status(200).json({ address: getPublicFromWallet(), messageServer: 'Public address fetched' });
}

export default {
	address
};
