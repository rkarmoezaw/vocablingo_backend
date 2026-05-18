import { Router } from 'express';
import {
  createVocabulary,
  deleteVocabulary,
  getVocabulary,
  updateVocabulary,
} from '../controllers/Vocabulary.controller.js';
const router = Router();

// 1. GET Vocabulary
router.get('/', getVocabulary);

// 3. POST Vocabulary
router.post('/', createVocabulary);

// 4. PATCH Vocabulary
router.patch('/:id', updateVocabulary);

// 5. DELETE Vocabulary
router.delete('/:id', deleteVocabulary);

export default router;
