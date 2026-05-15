import { Router } from 'express';
import Vocabulary from '../models/Vocabulary.model.js';
const router = Router();

// 1. Fixed Paths: Added leading slashes (/)
// 2. GET Vocabulary by userId

router.get('/:userId', async (req, res) => {
  try {
    const vocab = await Vocabulary.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(vocab);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch vocabulary' });
  }
});

// 3. POST Vocabulary
router.post('/', async (req, res) => {
  try {
    const newVocabulary = new Vocabulary(req.body);
    const savedVocab = await newVocabulary.save();
    res.status(201).json(savedVocab);
  } catch (error) {
    // If validation fails (e.g. wrong enum), 400 is more accurate than 500
    res.status(400).json({ message: error.message || 'Failed to create vocabulary' });
  }
});

// 4. PATCH Vocabulary
router.patch('/:id', async (req, res) => {
  try {
    const updatedVocabulary = await Vocabulary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }, // runValidators ensures the update follows your Schema rules
    );
    if (!updatedVocabulary) return res.status(404).json({ message: 'Word not found' });
    res.json(updatedVocabulary);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update vocabulary' });
  }
});

// 5. DELETE Vocabulary (Changed from .patch to .delete)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Vocabulary.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Word not found' });
    res.json({ message: 'Vocabulary is deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete vocabulary' });
  }
});

export default router;
