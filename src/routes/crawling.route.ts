import { Router } from 'express';
import crawlingController from '@controllers/crawling.controller';

const router: Router = Router();

router.get('/inflearn', crawlingController.getInflearn);

export default router;
