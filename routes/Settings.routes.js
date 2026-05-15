import { Router } from 'express';
import Settings from '../models/Settings.model.js';
const router = Router();

//Get Settings by userId
router.get('/:userId', async (req, res) => {
  try {
    let settings = await Settings.findOne({ userId: req.params.userId });
    if (!settings) {
      settings = await Settings.create({ userId: req.params.userId });
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

//Put Settings by userId
router.put('/:userId', async (req, res) => {
  try {
    const settings = await Settings.findOneAndUpdate({ userId: req.params.userId }, req.body, {
      new: true,
      upsert: true,
    });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

export default router;
