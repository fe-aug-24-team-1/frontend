import { Link } from 'react-router-dom';
import './PageNotFound.scss';

function PageNotFound() {
  return (
    <>
      <article className="page-not-found">
        <h1 className="page-not-found__title">Page not found.</h1>
        <img
          src="img\page-not-found.png"
          alt="Page not found."
          className="page-not-found__photo"
        />
        <div className="page-not-found__button">
          <Link
            to="/"
            className="page-not-found__link">
            Go to the home page
          </Link>
        </div>
      </article>

      <h2>Shop by category</h2>
    </>
  );
}

export default PageNotFound;
