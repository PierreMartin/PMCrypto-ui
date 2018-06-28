// import { } from '../../logic/blockchain';
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

export default {
  all
};
