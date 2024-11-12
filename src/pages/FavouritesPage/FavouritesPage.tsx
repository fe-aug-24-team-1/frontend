import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/modules/ProductCard';
import { Product } from '../../types/Product';
import style from './FavouritesPage.module.scss';
import { useAppSelector } from '@/app/store/hooks';
import { FC } from 'react';

export const FavouritesPage: FC = () => {
  const favourites = useAppSelector((state) => state.wishlist.products);

  return (
    <div className={style.favouritesPage}>
      <div className={style.breadcrumbs}>
        <Breadcrumbs />
      </div>

      {!favourites.length && (
        <>
          <h1 className={style.title}>
            You haven&apos;t favourite products =(
          </h1>
        </>
      )}

      {!!favourites.length && (
        <>
          <h1 className={style.title}>Favourites</h1>

          <p className={style.countItems}>{favourites.length} items</p>

          <div className={style.cards}>
            {favourites.map((item: Product) => (
              <div
                className={style.card}
                key={item.id}>
                <ProductCard prod={item} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};