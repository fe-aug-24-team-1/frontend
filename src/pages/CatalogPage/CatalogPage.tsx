import style from './CatalogPage.module.scss';
import { Dropdown } from '../../components/Dropdown';
import { ProductCard } from '../../modules/ProductCard';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Pagination } from '../../components/Pagination';
import { getSortedList } from '../../utils/getSortedList';
import { useAppSelector } from '@/app/store/hooks';
import { useTranslation } from 'react-i18next';
import prodNotFound from '@/assets/images/EmptyFavorite/product-not-found.png';

type Props = {
  category: 'phones' | 'tablets' | 'accessories';
};

const CatalogPage: React.FC<Props> = ({ category }) => {
  const { t } = useTranslation();

  const getLocalizationType = () => {
    switch (category) {
      case 'phones':
        return 'phonesPage';
      case 'tablets':
        return 'tabletsPage';
      case 'accessories':
        return 'accessoriesPage';
    }
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const { products, loaded, error } = useAppSelector((state) => state.products);

  const sort = searchParams.get('sort') || '';
  const perPage = searchParams.get('perPage') || '';
  const query = searchParams.get('query') || '';

  const [currentPage, setCurrentPage] = useState(1);

  const [visibleList, setVisibleList] = useState<Product[]>([]);

  const navigate = useNavigate();

  const correctPerPage = perPage ? +perPage : visibleList.length;

  useEffect(() => {
    const sortedList = getSortedList(products, sort).filter((item) => {
      const matchesCategory = item.category === category;
      const matchesQuery = query
        ? item.name.toLowerCase().includes(query.toLowerCase())
        : true;

      return matchesCategory && matchesQuery;
    });

    setVisibleList(sortedList);
    setCurrentPage(1);
  }, [category, perPage, sort, products, query]);

  const handleChangePage = (nextPage: number) => {
    const params = new URLSearchParams(searchParams);

    if (nextPage === 1) {
      params.delete('page');
    } else {
      params.set('page', nextPage.toString());
    }

    setCurrentPage(nextPage);
    setSearchParams(params);
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    if (!event.target.value) {
      params.delete('query');
    } else {
      params.set('query', event.target.value);
    }

    setSearchParams(params);
  };

  return (
    <div className={style.catalogPage}>
      <div className={style.breadcrumbs}>
        <Breadcrumbs />
      </div>

      {error && !loaded && (
        <div className={style.error}>
          <span className={style.error__text}>Something went wrong</span>
          <button
            type="button"
            className={style.error__button}
            onClick={() => navigate('/home')}>
            Go to home page
          </button>
        </div>
      )}

      {!!products.length && loaded && !error && (
        <>
          <h1 className={style.title}>
            {category === 'phones' ? t('phonesPage.title.text') : category}
          </h1>
          <p className={style.countModels}>
            {t('phonesPage.title.count', { count: visibleList.length })}
          </p>

          <div className={`${style.sortField} ${style['sortField--1']}`}>
            <Dropdown dropdownName={'sort'} />
          </div>

          <div className={`${style.sortField} ${style['sortField--2']}`}>
            <Dropdown dropdownName={'perPage'} />
          </div>

          <div className={style.query}>
            <label
              htmlFor="query"
              className={style.query__label}>
              Search
            </label>
            <input
              id="query"
              className={style.query__input}
              type="text"
              value={query || ''}
              onChange={handleQuery}
              placeholder="I want to find ..."
            />
          </div>
          {!visibleList.length ? (
            <div className={style.wrapper}>
              {/*<h1 className={style.title}>{t('favoritesPage.title.empty')}</h1>*/}
              <h1 className={style.title}>
                {t(`${getLocalizationType()}.notFoundProduct.${category}`)}
              </h1>
              <img
                className={style.emptyImage}
                src={prodNotFound}
                alt="No favourites yet"
              />
            </div>
          ) : (
            <ul className={style.cards}>
              {visibleList
                .slice(
                  currentPage * correctPerPage - correctPerPage,
                  currentPage * correctPerPage
                )
                .map((prod) => (
                  <li
                    key={prod.id}
                    className={style.card}>
                    <ProductCard prod={prod} />
                  </li>
                ))}
            </ul>
          )}
          {correctPerPage < visibleList.length && (
            <div className={style.pagination}>
              <Pagination
                currentPage={currentPage}
                visibleList={visibleList}
                perPage={correctPerPage}
                onPageChange={handleChangePage}
              />
            </div>
          )}
        </>
      )}

      {!visibleList.length && !loaded && !error && (
        <h1 className={style.noData}>There are no {category} yet</h1>
      )}
    </div>
  );
};

export default CatalogPage;
