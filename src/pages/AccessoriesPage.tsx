import { useParams } from 'react-router-dom';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';

import accessoriesFromServer from '../../public/api/accessories.json'; // Data for test

export const AccessoriesPage = () => {
  const { productId } = useParams();

  const accessory = accessoriesFromServer.find(
    (currentAccessory) => currentAccessory.id === productId
  );

  if (!accessory) {
    return <></>; // Here you need to turn the page "Product not found"
  }

  return <ProductInfo product={accessory} />;
};
