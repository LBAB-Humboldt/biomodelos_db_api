import express from 'express';
import * as controller from './model.controller';

const router = express.Router();

// STA8
router.get('/stats/', controller.generalModelStats);
router.get('/:taxID', controller.read); // MOD1
router.get('/metadata/:modelID', controller.readModelMetadata); // MOD2
router.get('/approved/eoo/:taxID', controller.occurrenceEooStatsModel); // MOD3
router.get('/approved/rpa/:taxID', controller.occurrenceRepStatsModel); // MOD4
router.get(
  '/approved/forest_loss/:taxID',
  controller.occurrenceForestLossStatsModel
); // MOD5
router.get('/approved/covers/:taxID', controller.occurrenceCoversStatsModel); // MOD6

export default router;
