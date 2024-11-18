import { Router } from 'express';
import * as PlayersController from './controllers/players-controller';
import * as ClubsController from './controllers/clubs-controller';

const router = Router();

router.get('/players', PlayersController.getPlayers);
router.get('/players/:id', PlayersController.getPlayersById);

router.post('/players', PlayersController.postPlayer);

router.delete('/players/:id', PlayersController.deletePlayer);
router.patch('/players/:id', PlayersController.updatePlayer);

router.get('/clubs', ClubsController.listClubs);

export default router;