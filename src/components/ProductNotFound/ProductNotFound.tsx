import { Link, useSearchParams } from 'react-router-dom';
import './ProductNotFound.scss';

function ProductNotFound() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <>
      <article className="no-product-page">
        <img
          src="img\product-not-found.png"
          alt="Product not found"
          className="no-product-page__photo"
        />
        <div className="no-product-page__description">
          <div>
            <h1 className="no-product-page__title">
              Nothing was found for the product{' '}
              <span className="no-product-page__query">"{query}"</span>.
            </h1>
            Check the correctness of the name.
          </div>

          <div className="no-product-page__button">
            <Link
              to="/"
              className="no-product-page__link">
              Go to the home page
            </Link>
          </div>
        </div>
      </article>

      <h2>Shop by category</h2>
    </>
  );
}

export default ProductNotFound;
