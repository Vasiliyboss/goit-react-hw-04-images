import css from './ImageGalleryItems.module.css';
import PropTypes from 'prop-types';
export const ImageGalleryItems = ({ image, open }) => {
  return (
    <img
      className={css.ImageGalleryItemImage}
      src={image.webformatURL}
      alt={image.tags}
      onClick={() => open(image.largeImageURL)}
    />
  );
};

ImageGalleryItems.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  open: PropTypes.func.isRequired,
};
