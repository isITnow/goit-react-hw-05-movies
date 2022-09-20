import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import s from '../SharedLayout/sharedLayout.module.css';
import { ThreeDots } from 'react-loader-spinner';

const SharedLayout = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };
  return (
    <>
      <div className={s.header}>
        <NavLink to="/" end className={getActiveClassName}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getActiveClassName}>
          Movies
        </NavLink>
      </div>
      <Suspense
        fallback={
          <ThreeDots color="#ff6347" wrapperStyle={{ margin: 'auto' }} />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
