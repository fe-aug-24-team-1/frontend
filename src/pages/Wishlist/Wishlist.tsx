import { useAppSelector } from '@/app/store/hooks';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FC } from 'react';
import { Product } from './../../types/Product';
import { ProductCard } from '@/components/ProductCard/ProductCard';

import styles from './Wishlist.module.scss';

export const Wishlist: FC = () => {
  const { products } = useAppSelector((store) => store.wishlist);

  return (
    <div className={styles.wishlist}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>

      {!products.length && (
        <>
          <h1 className={styles.title}>empty</h1>
        </>
      )}

      {!!products.length && (
        <>
          <h1 className={styles.title}>Favorites</h1>

          <p className={styles.count}>{products.length} items</p>

          <div className={styles.cards}>
            {products.map((item: Product) => (
              <div key={item.id}>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
