import { Router } from 'express';

const router = Router();
router.use('api/v1/', AuthRouter);

export default router;
