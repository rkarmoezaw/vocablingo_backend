import { Router } from 'express';
import SettingsRouter from './Settings.routes.js';
import VocabularyRouter from './Vocabulary.routes.js';

const router = Router();
router.use('/vocabulary', VocabularyRouter);
router.use('/settings', SettingsRouter);

export default router;
