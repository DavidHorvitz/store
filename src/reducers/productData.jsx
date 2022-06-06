import { GET_ALL_PRODUCT } from '../action/getData';
const defaultState = [];
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return action.payload;
      
        default:
            return state;

    }
}