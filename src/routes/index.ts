import { Router } from 'express';
import crawlingRouter from '@routes/crawling.route';
const router: Router = Router();

router.use('/crawling', crawlingRouter);

export default router;
