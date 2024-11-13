import { useParams } from 'react-router-dom';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';

import phonesFromServer from '../../public/api/phones.json'; // Data for test

export const PhonesPage = () => {
  const { productId } = useParams();

  const phone = phonesFromServer.find(
    (currentPhone) => currentPhone.id === productId
  );

  if (!phone) {
    return <>sdafsad</>; // Here you need to turn the page "Product not found"
  }

  return <ProductInfo product={phone} />;
};
