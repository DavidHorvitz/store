import React, { useState } from "react";

import buttonCount from './ButtonCount.scss';

const ButtonCount = props => {
   
    const [count, setCount] = useState(0);

    
    // function countUp() {
    //     if (count === 5) {
    //         alert('Limited to 10 products')
    //         setCount(count = 10);

    //     } else
    //         setCount(count + 1);
    // }
    // function countDown() {
    //     if (count === 0) {
    //         setCount(0)
    //     } else
    //         setCount(count - 1);
    // }

    return (
        <div className="button_Continer">

            {/* <button onClick={countUp}>+</button> */}
            <button onClick={() => props.clicked()} className="add_to_cart_button">Add to cart {count}</button>
            {/* <button onClick={countDown}>-</button> */}

        </div>
    );
}



export default ButtonCount;


