import axios from 'axios';
export const BEYOND_PAYMENT = 'BEYOND_PAYMENT'
// beyond_payment
const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getAllProducts = (obj,navigate) => async dispatch => {
  axios.get(`${serverUrl}/api/get-products`)
    .then(response => {
      navigate('/beyond_payment')
      dispatch({ type: BEYOND_PAYMENT, payload: response.data });
    })
    .catch(err => console.log(err));
}
