import { GoodDescription } from '@/types/GoodDescription.ts';

export interface TypePhone {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: GoodDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
