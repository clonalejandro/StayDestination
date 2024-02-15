import EstablishmentNode from '../models/EstablishmentNode';

export interface EstablishmentNodeRepository {
  getAllNodes(): Promise<EstablishmentNode[]>;
}
