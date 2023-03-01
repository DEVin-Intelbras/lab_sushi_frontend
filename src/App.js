import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CartProvider } from './contexts/CartContext';

import './App.css';
import Menu from './components/Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Menu />
        <AppRoutes />
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
