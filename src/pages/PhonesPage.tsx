import { useLocation } from 'react-router-dom';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';

import phonesFromServer from '../../public/api/phones.json'; // Data for test
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/store/hooks';
import { getCurrentProduct } from '@/features/currentProduct/currentProduct';

export const PhonesPage = () => {
  // const { productId } = useParams();

  const location = useLocation();

  const dispatch = useAppDispatch();

  const [category, productId] = location.pathname
    .split('/')
    .filter((chunk) => chunk.length);

  useEffect(() => {
    dispatch(getCurrentProduct({ category, productId }));
  }, [category, dispatch, productId]);

  const phone = phonesFromServer.find(
    (currentPhone) => currentPhone.id === productId
  );

  if (!phone) {
    return <>sdafsad</>; // Here you need to turn the page "Product not found"
  }

  return <ProductInfo product={phone} />;
};
