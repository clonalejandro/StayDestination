import EstablishmentNode from '../models/EstablishmentNode';
import { EstablishmentNodeRepository } from '../repositories/EstablishmentNodeRepository';

export class EstablishmentNodeService {
  private repository: EstablishmentNodeRepository;

  constructor(repository: EstablishmentNodeRepository) {
    this.repository = repository;
  }

  getAllNodes(): Promise<EstablishmentNode[]> {
    return this.repository.getAllNodes();
  }
}
