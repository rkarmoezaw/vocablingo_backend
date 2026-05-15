import { Router } from 'express';
import VocabularyRouter from './Vocabulary.routes.js';

const router = Router();
router.use('/api/v1', VocabularyRouter);

export default router;
