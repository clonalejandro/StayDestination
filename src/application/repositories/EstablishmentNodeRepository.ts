import EstablishmentNode from '../../domain/models/EstablishmentNode';

interface EstablishmentNodeRepository {
  getAllNodes(): Promise<EstablishmentNode[]>;
}

export default EstablishmentNodeRepository;
