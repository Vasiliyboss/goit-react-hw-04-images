import css from './Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
export const Modal = ({ onClose, modalImage }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handelBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={handelBackdrop}>
      <div className={css.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};
