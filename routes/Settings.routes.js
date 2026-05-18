import { Router } from 'express';
import { getSettings, updateSettings } from '../controllers/Settings.controller.js';
const router = Router();

//Get Settings
router.get('/', getSettings);

//Put Settings
router.put('/', updateSettings);

export default router;
