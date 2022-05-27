import axios from 'axios';
export const CART_LIST = 'CART_LIST'
const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getAllProducts = (obj,navigate) => async dispatch => {
  axios.get(`${serverUrl}/api/get-products`)
    .then(response => {
      navigate('/')
      dispatch({ type: CART_LIST, payload: response.data });
    })
    .catch(err => console.log(err));
}

