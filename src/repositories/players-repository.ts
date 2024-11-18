import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1, 
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
]

export const listAllPlayers = async():Promise<PlayerModel[]> => {
  return database;
}

export const findPlayerById = async(id: number):Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id);
}

export const createPlayer = async(player: PlayerModel) => {
  database.push(player);

  return {message: "Successful"};
}

export const deletePlayer = async(id: number) => {
  const index = database.findIndex(player => player.id === id);

  if(index !== -1) {
    database.splice(index, 1);
    return {message: "Deleted"};
  } else {
    return 
  }

}

export const updatePlayer = async(id: number, statistics: StatisticsModel):Promise<PlayerModel | undefined> => {
  const playerIndex = database.findIndex(player => player.id === id);

  if(playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}