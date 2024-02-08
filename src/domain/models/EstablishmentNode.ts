interface TranslatableName {
  de: string;
  en: string;
  es: string;
  fr: string;
  pt: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface DestinationData {
  translatableName: TranslatableName;
  photographs: string[];
  coordinates: Coordinates;
}

interface IEstablishmentNode {
  id: string;
  childs: EstablishmentNode[];
  destinationData: DestinationData;
  fatherDestination: string;
  isTop: boolean;
  isFinalNode: boolean;
  numEstablishments: number;
}

export default class EstablishmentNode implements IEstablishmentNode {
  id: string;
  childs: EstablishmentNode[];
  destinationData: DestinationData;
  fatherDestination: string;
  isTop: boolean;
  isFinalNode: boolean;
  numEstablishments: number;

  constructor(data: IEstablishmentNode) {
    this.id = data.id;
    this.childs = data.childs;
    this.destinationData = data.destinationData;
    this.fatherDestination = data.fatherDestination;
    this.isTop = data.isTop;
    this.isFinalNode = data.isFinalNode;
    this.numEstablishments = data.numEstablishments;
  }
}
