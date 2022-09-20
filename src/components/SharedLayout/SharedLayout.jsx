import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import s from '../SharedLayout/sharedLayout.module.css';

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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
