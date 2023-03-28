import axios from 'axios';
const BASE_URL = 'https://www.googleapis.com/customsearch/v1';

const params = {
  key: 'AIzaSyBodPeyD_koeK5GrBdgZDVdol5yxCRlcFQ',
  cx: '753928b82395c4139',
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
