import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepo from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

let response = null;

export const getPlayerService = async() => {
  const data =  await PlayerRepo.listAllPlayers();
  
  (data) ? response = HttpResponse.ok(data) : response = HttpResponse.noContent();
  
  return response;
}

export const getPlayersByIdService = async(id: number) => {
  const data = await PlayerRepo.findPlayerById(id);
  
  (data) ? response = HttpResponse.ok(data) : response = HttpResponse.noContent();
  
  return response;
} 

export const createPlayerService = async(player: PlayerModel) => {
  
  const data = await PlayerRepo.createPlayer(player);
  
  (data) ? response = HttpResponse.created(data) : response = HttpResponse.noContent();
  
  return response;
}

export const deletePlayerService = async(id: number) => {
  const data = await PlayerRepo.deletePlayer(id);

  (data) ? response = HttpResponse.created(data) : response = HttpResponse.badRequest();

  return response;
}

export const updatePlayerService = async(id: number, statistics:StatisticsModel) => {
  const data = await PlayerRepo.updatePlayer(id, statistics);

  (data) ? response = HttpResponse.ok(data) : response = HttpResponse.badRequest();

  return response;
}