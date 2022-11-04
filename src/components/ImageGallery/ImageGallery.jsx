import { ImageGalleryItems } from 'components/ImageGalleryItems/ImageGalleryItems';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
export const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => (
        <li key={item.id} className={css.ImageGalleryItem}>
          <ImageGalleryItems image={item} open={openModal} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
