import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import NavBar from 'components/NavBar/NavBar';
import css from './sharedLayout.module.css'

const SharedLayout = () => {
  return (
    <>
   
      <NavBar />
       <Suspense fallback={<p className={css.loader}></p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
