import { useState, useEffect } from 'react';
import '../styles/styles.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import response from '../services/api';

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [searchQueryPicture, setSearchQueryPicture] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);

  useEffect(() => {
    if (searchQueryPicture === '') {
      return;
    }

    response(searchQueryPicture, page)
      .then(data => {
        setGallery(prevState => [...prevState, ...data.hits]);
        setLoading(false);
      })

      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [searchQueryPicture, page]);

  const onSubmit = searchQueryPicture => {
    setGallery([]);
    setSearchQueryPicture(searchQueryPicture);
    setLoading(true);
  };

  const onLoadMoreBtn = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  const isShowModal = () => {
    setShowModal(prevState => !prevState);
  };

  const onClickGalleryImage = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader />}
      <ImageGallery>
        <ImageGalleryItem
          galleryItems={gallery}
          onClick={onClickGalleryImage}
          url={largeImageURL}
        />
      </ImageGallery>
      {gallery.length > 0 && <Button onClick={onLoadMoreBtn} />}
      {showModal && <Modal onClose={isShowModal} url={largeImageURL} />}
    </div>
  );
};

export default App;
