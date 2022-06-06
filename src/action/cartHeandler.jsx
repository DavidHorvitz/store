export const ADD_TO_CART = 'ADD_TO_CART'
const serverUrl = process.env.REACT_APP_SERVER_URL;

export const addToCart = (data, navigate) => async dispatch => {
  dispatch({ type: ADD_TO_CART, payload: data });
  navigate('/shopping-cart-template');
}
