import css from './Modal.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handelBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { modalImage } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handelBackdrop}>
        <div className={css.Modal}>
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};
