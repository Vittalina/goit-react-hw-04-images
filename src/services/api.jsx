const BASE_URL = 'https://pixabay.com/api/';
const MY_API_KEY = '28384939-76d0db34094acd1949cd365d2';

const response = (searchQueryPicture, perPage, page) => {
  return fetch(
    `${BASE_URL}?key=${MY_API_KEY}&q=${searchQueryPicture}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
  ).then(response => response.json());
};

export default response;

// response = () => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const MY_API_KEY = '28384939-76d0db34094acd1949cd365d2';

//   fetch(
//     `${BASE_URL}?key=${MY_API_KEY}&q=${this.state.searchQueryPicture}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.page}`
//   )
//     .then(response => response.json())
//     .then(data =>
//       this.setState({
//         gallery: [...data.hits],
//         total: data.totalHits,
//       })
//     )
//     .finally(() => this.setState({ loading: false }));
// };
