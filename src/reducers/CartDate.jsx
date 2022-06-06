import { ADD_TO_CART } from "../action/cartHeandler";

const defaultState = [
//     {
//         productName: '',
//         department: '',
//         price: '',
//         id: '',   
//         quantity: 0,   
//    }
]
export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(ADD_TO_CART);
            const newState = [...state];
            newState.push({...action.payload, quantity: 1});
            console.log(newState);
            return newState;
        default:
            return state;

    }
}