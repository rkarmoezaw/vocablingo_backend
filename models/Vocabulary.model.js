import mongoose from 'mongoose';

const VocabularySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    meaning: { type: String, required: true, trim: true },
    cefr: {
      type: String,
      required: true,
      enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      default: 'A1',
    },
    wordForm: {
      type: String,
      required: true,
      enum: ['Noun', 'Verb', 'Adj', 'Adv', 'Prep', 'Conj', 'Interj', 'Pron'],
      default: 'Noun',
    },
    phonetics: String,
    isDifficult: { type: Boolean, default: false },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Vocabulary', VocabularySchema);
