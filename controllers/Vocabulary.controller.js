import Vocabulary from '../models/Vocabulary.model.js';

export async function getVocabulary(req, res) {
  try {
    const { cefr, wordForm, isDifficult, page = 1, limit = 10 } = req.query;

    const query = {};

    if (cefr) query.cefr = cefr;
    if (wordForm) query.wordForm = wordForm;
    if (isDifficult) query.isDifficult = isDifficult === 'true';

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [vocab, totalItems] = await Promise.all([
      Vocabulary.find(query).skip(skip).limit(parseInt(limit)).exec(),
      Vocabulary.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      data: vocab,
      pagination: {
        totalItems,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalItems / limit),
        itemsPerPage: parseInt(limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch vocabulary',
      error: error.message,
    });
  }
}

export async function createVocabulary(req, res) {
  try {
    const savedVocab = await Vocabulary.create(req.body);
    res.status(201).json(savedVocab);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to create vocabulary' });
  }
}

export async function updateVocabulary(req, res) {
  try {
    const updatedVocabulary = await Vocabulary.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });

    if (!updatedVocabulary) {
      return res.status(404).json({ message: 'Word not found' });
    }

    res.status(200).json(updatedVocabulary);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update vocabulary' });
  }
}

export async function deleteVocabulary(req, res) {
  try {
    const deleted = await Vocabulary.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Word not found' });
    }
    res.status(200).json({ message: 'Vocabulary is deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete vocabulary' });
  }
}
