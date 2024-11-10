import { useAppSelector } from '@/app/store/hooks';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CategoryType } from '@/types/CategoryType';
import { Product } from '@/types/Product';
import { FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface Props {
  category: CategoryType;
}

export const Catalog: FC<Props> = ({ category }) => {
  const { products, loaded, error } = useAppSelector((state) => state.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleList, setVisibleList] = useState<Product[]>([]);

  const navigate = useNavigate();

  const sort = searchParams.get('sort') || '';
  const perPage = searchParams.get('perPage') || '';
  const query = searchParams.get('query') || '';

  return (
    <div>
      <div>
        <Breadcrumbs />
      </div>

      {!loaded && 'Loading...'}

      {error && loaded && (
        <div>
          <span>Something went wrong</span>

          <button type="button">Go to home page</button>
        </div>
      )}

      {!!products.length && loaded && !error && (
        <>
          <h1></h1>
          <p>{} models</p>

          <div></div>

          <div></div>

          <div>
            <label>
              <input placeholder="I want to find ..." />
            </label>
          </div>

          <ul></ul>
        </>
      )}

      {!visibleList.length && loaded && !error && (
        <h1>There are no {category} yet</h1>
      )}
    </div>
  );
};
