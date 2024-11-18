import { clubModel } from "../models/club-model";
import fs from 'fs/promises';

export const listClubs = async():Promise<clubModel[]> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: clubModel[] = JSON.parse(data);

  return clubs;
}