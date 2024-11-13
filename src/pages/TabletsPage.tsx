import { useParams } from 'react-router-dom';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';

import tabletsFromServer from '../../public/api/tablets.json'; // Data for test

export const TabletsPage = () => {
  const { productId } = useParams();

  const tablet = tabletsFromServer.find(
    (currentTablet) => currentTablet.id === productId
  );

  if (!tablet) {
    return <></>; // Here you need to turn the page "Product not found"
  }

  return <ProductInfo product={tablet} />;
};
