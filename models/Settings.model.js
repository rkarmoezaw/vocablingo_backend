const SettingsSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  showPhonetics: { type: Boolean, default: true },
  order: {
    type: String,
    enum: ['alphabetical', 'random', 'chronological'],
    default: 'alphabetical',
  },
  onlyDifficult: { type: Boolean, default: false },
  cefrFilter: [String],
});

export default mongoose.model('Settings', SettingsSchema);
