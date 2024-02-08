import EstablishmentNodeService from '../application/services/EstablishmentNodeService';
import HttpClient from './HttpClient';

const httpClient = new HttpClient();
export const establishmentNodeService = new EstablishmentNodeService(httpClient);
