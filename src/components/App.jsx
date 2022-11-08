import { useState, useEffect } from 'react';
import { Serchbar } from './Serchbar/Serchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import hitsApi from '../services/hits-api';
import { Spinner } from './Spinner/Spinner';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [page, setPage] = useState(1);
  const [photoHits, setPhotoHits] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!name) {
      return;
    }
    setStatus('pending');

    hitsApi
      .galleryApi(name, page)
      .then(responsePhotoHits =>
        setPhotoHits(
          prevPhotoHits => [...prevPhotoHits, ...responsePhotoHits.hits],
          setStatus('resolved')
        )
      )
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [modalImage, name, page]);

  const handleSubmit = firstName => {
    if (firstName !== name) {
      setName(firstName);
      setPage(1);
      setPhotoHits([]);
    }
  };

  const togleModal = modalImage => {
    setShowModal(showModal => !showModal);
    setModalImage(modalImage);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Serchbar onSubmit={handleSubmit} />

      {photoHits && <ImageGallery items={photoHits} openModal={togleModal} />}
      {photoHits.length > 0 && status !== 'pending' && (
        <LoadMore onLoadClick={loadMore}>Load more</LoadMore>
      )}
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h1>{error.message}</h1>}
      {showModal && (
        <Modal image={photoHits} modalImage={modalImage} onClose={togleModal} />
      )}
    </div>
  );
};
