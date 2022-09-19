// import PropTypes from 'prop-types';

import s from '../Container/container.module.css';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;

// Container.propTypes = {};
