import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import Products from './pages/Products';
import ProductInfoPage from './pages/ProductInfoPage';


function App() {
  return (
    <div>
      <Router basename='/react_practice_4'>
        <Routes>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductInfoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
