import Settings from '../models/Settings.model.js';

export async function getSettings(req, res) {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create({});
    }

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch global settings' });
  }
}

export async function updateSettings(req, res) {
  try {
    const settings = await Settings.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update global settings' });
  }
}
