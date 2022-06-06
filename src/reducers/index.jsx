import { combineReducers } from 'redux';
import productData from './productData';
import cartDate from './CartDate';
export default combineReducers({
    productData: productData,
    cartDate: cartDate,
});