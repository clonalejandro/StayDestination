import HttpClient from './HttpClient';
import { HttpEstablishmentNodeRepository } from './repositories/HttpEstablishmentNodeRepository';

const httpClient = new HttpClient();
export const establishmentNodeService = new HttpEstablishmentNodeRepository(httpClient);
