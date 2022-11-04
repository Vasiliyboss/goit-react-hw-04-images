import React from 'react';
import { Serchbar } from './Serchbar/Serchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import hitsApi from '../services/hits-api';
import { Spinner } from './Spinner/Spinner';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    page: 1,
    photoHits: [],
    name: '',
    loading: false,
    error: null,
    showModal: false,
    modalImage: null,
    status: 'idle',
  };

  componentDidUpdate(_, prevState) {
    const { name, page, modalImage } = this.state;
    if (prevState.page !== page || prevState.name !== name) {
      this.setState({ status: 'pending' });

      hitsApi
        .galleryApi(name, page)
        .then(photoHits => {
          if (modalImage === 0) {
            this.setState({ error: `images ${name} not found` });
          }
          this.setState(state => ({
            photoHits: [...state.photoHits, ...photoHits.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleSubmit = name => {
    if (this.state.name !== name) {
      this.setState({ name, page: 1, photoHits: [] });
    }
  };

  togleModal = modalImage => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ modalImage });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { photoHits, error, status, showModal, modalImage } = this.state;

    return (
      <div>
        <Serchbar onSubmit={this.handleSubmit} />

        <ImageGallery items={photoHits} openModal={this.togleModal} />
        {photoHits.length > 0 && status !== 'pending' && (
          <LoadMore onLoadClick={this.loadMore}>Load more</LoadMore>
        )}
        {status === 'pending' && <Spinner />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {showModal && (
          <Modal
            image={photoHits}
            modalImage={modalImage}
            onClose={this.togleModal}
          />
        )}
      </div>
    );
  }
}
