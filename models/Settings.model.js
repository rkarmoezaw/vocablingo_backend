import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  showPhonetics: { type: Boolean, default: true },
  order: {
    type: String,
    enum: ['alphabetical', 'random', 'chronological'],
    default: 'alphabetical',
  },
  onlyDifficult: { type: Boolean, default: false },
  cefrFilter: [String],
});

SettingsSchema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model('Settings', SettingsSchema);
