import { Outlet } from 'react-router-dom';
// import Header from './widgets/Header/Header';
// import Footer from './widgets/Footer/Footer';

function Root() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Root;
