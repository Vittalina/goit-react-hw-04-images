import { Component } from 'react';
import '../styles/styles.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import response from '../services/api';

class App extends Component {
  state = {
    gallery: [],
    searchQueryPicture: '',
    page: 1,
    perPage: 12,
    total: '',
    loading: false,
    error: null,
    showModal: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchQueryPicture !== this.state.searchQueryPicture
    ) {
      response(
        this.state.searchQueryPicture,
        this.state.perPage,
        this.state.page
      )
        .then(data =>
          this.setState(prevState => {
            return { gallery: [...prevState.gallery, ...data.hits] };
          })
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onSubmit = searchQueryPicture => {
    this.setState({
      gallery: [],
      searchQueryPicture,
      loading: true,
    });
  };

  onLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };

  showModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // onCloseModal = () => {
  //   this.setState({
  //     showModal: '',
  //   });
  // };

  onClickGalleryImage = largeImageURL => {
    this.setState({ largeImageURL, showModal: true });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <Loader />}
        <ImageGallery>
          <ImageGalleryItem
            galleryItems={this.state.gallery}
            onClick={this.onClickGalleryImage}
            url={this.state.largeImageURL}
          />
        </ImageGallery>
        {this.state.gallery.length > 0 && (
          <Button onClick={this.onLoadMoreBtn} />
        )}
        {this.state.showModal && (
          <Modal onClose={this.showModal} url={this.state.largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
