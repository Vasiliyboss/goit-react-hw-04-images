import css from './LoadMore.module.css';
import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadClick, children }) => {
  return (
    <button type="button" onClick={onLoadClick} className={css.Button}>
      {children}
    </button>
  );
};

LoadMore.propTypes = {
  onLoadClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
