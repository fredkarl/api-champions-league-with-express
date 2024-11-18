import {Request, Response} from 'express';
import * as service from '../services/players-service';
import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics-model';

export const getPlayers = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayersById = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const httpResponse = await service.getPlayersByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async(req: Request, res: Response) => {
  const player = req.body;
  const httpResponse = await service.createPlayerService(player);

  res.status(httpResponse.statusCode).json(httpResponse.body);  
}

export const deletePlayer = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const httpResponse = await service.deletePlayerService(id);
  
  res.status(httpResponse.statusCode).json(httpResponse.body);  
}

export const updatePlayer = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const statistics = req.body;

  const httpResponse = await service.updatePlayerService(id, statistics);

  res.status(httpResponse.statusCode).json(httpResponse.body);  
}