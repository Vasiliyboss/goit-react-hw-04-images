function galleryApi(firsName, firstpage) {
  return fetch(
    `https://pixabay.com/api/?q=${firsName}&page=${firstpage}&key=28547826-2a3958dff886d94a7e7d0694c&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    // eslint-disable-next-line no-restricted-globals
    return Promise.reject(new Error(`Нет картинки с таким именим ${firsName}`));
  });
}
const api = { galleryApi };
export default api;
