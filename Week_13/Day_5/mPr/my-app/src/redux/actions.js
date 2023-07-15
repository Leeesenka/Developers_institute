

export const setPhotos = (users) => {
  return (dispatch) => {
    // setTimeout(() => {
      dispatch({
        type: 'SET_PHOTOS',
        payload: users
      });
    // }, 1000);
  };
};

export const getPhotos = () => {
  return (dispatch) => {
    const categories = 'mountain';
    const perPage = 32;
    const apiKey = 'hn1SFO7B0eSciDh4UlBfB0nKZuWF0RIrb3xrsdM64oiYdZ96Ps3JS7Fi';

    const headers = new Headers();
    headers.append('Authorization', apiKey);

    return fetch(`https://api.pexels.com/v1/search?query=${categories}&per_page=${perPage}`, {
      headers: headers
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setPhotos(data.photos));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
};

// export const searchPhotos = (inputsearch) => {
//   console.log('in search photo', inputsearch);
//   return {
//     type: 'SEARCH',
//     inputsearch: inputsearch
//   };
// };
