import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  id: { type: String, unique: true },
	// hash: { type: String, default: '' }
});

export default mongoose.model('Block', BlockSchema);
