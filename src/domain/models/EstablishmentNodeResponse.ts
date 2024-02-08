import EstablishmentNode from './EstablishmentNode';

class EstablishmentNodeResponse {
  success: boolean;
  errors: string[];
  data?: EstablishmentNode[];

  constructor(success: boolean, errors: string[], data?: EstablishmentNode[]) {
    this.success = success;
    this.errors = errors;
    this.data = data;
  }
}

export default EstablishmentNodeResponse;
