import * as HttpResponse from "../utils/http-helper";
import * as ClubsRepo from "../repositories/clubs-repository"; 

let response = null

export const getClubsService = async() => {
  const data =  await ClubsRepo.listClubs();
  
  (data) ? response = HttpResponse.ok(data) : response = HttpResponse.noContent();
  
  return response;
}