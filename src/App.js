import './App.scss';

import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from './action/getData';
import MainProduct from './components/Products/MainProduct/MainProduct';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ShoppingCartTemplate from './components/Products/ShoppingCart/ShoppingCartTemplate/ShoppingCartTemplate';
import ShoppingCart from './components/Products/ShoppingCart/ShoppingCart';

// function App() {
//   return (
//     <div >
//     <Layout/>
//     </div>
//   );
// }

// export default App;
const App = props => {
  const navigate = useNavigate();
  const handler_Go_to_cart = data => {
    Navigate('/shopping-cart-template', {
      state: {
        data: data,
      }
    });
  };
  useEffect(() => {

    props.getAllProducts();
  }, [])
  return (
    <div className="App">


      {/* <Link to="/shopping-cart-template">Shopping Cart Template</Link> */}
    
      <div className="button_Continer">
            <div  className="create_button" onClick={() => navigate("/shopping-cart-template")}>shopping Cart Template</div>
        </div>
      <Routes>
        <Route path="/" element={<MainProduct />} />
        {/* <Route path="products" element={<MainProduct />} /> */}
        <Route path="shopping-cart-template" element={<ShoppingCartTemplate />} />
        <Route path="/beyond_payment" element={<ShoppingCart/>} />
      </Routes>
    </div>
  );
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps, { getAllProducts })(App);