import './App.scss';

import MainProduct from './components/Products/MainProduct/MainProduct';

// function App() {
//   return (
//     <div >
//     <Layout/>
//     </div>
//   );
// }

// export default App;
const App = props => {

  return (
    <div className="App">
        <MainProduct />
   
    </div>
  );
}
export default App;
