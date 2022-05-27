import axios from 'axios';
export const SET_PRODUCT = 'SET_PRODUCT'
const serverUrl = process.env.REACT_APP_SERVER_URL;
export const editProduct = obj => async dispatch => {
  axios.post(`${serverUrl}/api/edit-product`,{
    data: obj
  })
    .then(response => {
      console.log(response);
      // dispatch({ type: SET_PRODUCT, payload: response.data });
    })
    .catch(err => console.log(err));
}