import CartProvider from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import IndexRoutes from './routes/IndexRoutes';

function App() {
  return (
    <BaseLayout>
      <CartProvider>
        <BrowserRouter>
          <IndexRoutes />
        </BrowserRouter>
      </CartProvider>
    </BaseLayout>
  );
}

export default App;
