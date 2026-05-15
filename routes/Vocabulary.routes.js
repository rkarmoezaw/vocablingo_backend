import { Router } from 'express';
import Vocabulary from './models/Vocabulary.model.js';
const router = Router();

//GET Vocabulary by userId
router.get('vocabulary/:userId', async (req, res) => {
  try {
    const vocab = await Vocabulary.find({ userId: req.params.userId });
    res.json(vocab);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch vocabulary' });
  }
});

//POST Vocabulary
router.post('vocabulary', async (req, res) => {
  try {
    const newVocabulary = new Vocabulary(req.body);
    await newVocabulary.save();
    res.status(201).json(newVocabulary);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create vocabulary' });
  }
});

//PATCH Vocabulary
router.patch('vocabulary/:id', async (req, res) => {
  try {
    const updatedVocabulary = await Vocabulary.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedVocabulary);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update vocabulary' });
  }
});

//DELETE Vocabulary
router.patch('vocabulary/:id', async (req, res) => {
  try {
    await Vocabulary.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vocabulary is deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete vocabulary' });
  }
});
