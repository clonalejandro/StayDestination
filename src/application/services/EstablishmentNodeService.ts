import EstablishmentNode from '../../domain/models/EstablishmentNode';
import EstablishmentNodeResponse from '../../domain/models/EstablishmentNodeResponse';
import HttpClient from '../../infrastructure/HttpClient';
import EstablishmentNodeRepository from '../repositories/EstablishmentNodeRepository';

class EstablishmentNodeService implements EstablishmentNodeRepository {
  private httpClient: HttpClient;
  private entityName = 'destinations';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getAllNodes(): Promise<EstablishmentNode[]> {
    try {
      const nodes = (await this.httpClient.get(this.entityName)) as EstablishmentNodeResponse;
      if (!nodes.success) {
        throw new Error('Failed to fetch nodes');
      } else {
        return nodes.data.map((node) => new EstablishmentNode(node));
      }
    } catch (error) {
      console.error('Error fetching nodes:', error);
      throw error;
    }
  }
}

export default EstablishmentNodeService;
