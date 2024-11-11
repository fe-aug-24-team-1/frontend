import { GeneralProduct } from './GeneralProduct';

export interface DescriptionProduct {
  title: string;
  text: string[];
}

export interface Product extends GeneralProduct {
  quantity: number;
  id: string;
  namespaceId: string;
  capacityAvailable: string[];
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  images: string[];
  description: DescriptionProduct[];
  resolution: string;
  processor: string;
  camera: string;
  zoom: string;
  cell: string[];
}
