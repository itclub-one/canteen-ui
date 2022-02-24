import { Route, Routes } from 'react-router-dom';
import HomeCatalogue from '../pages/User/HomeCatalogue';
import Cart from '../pages/User/Cart';
import OrderList from '../pages/User/OrderList';
import OrderDetails from '../pages/User/OrderDetails';

const UserRoutes = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={<HomeCatalogue />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<OrderList />} />
      <Route path="order/details" element={<OrderDetails />} />
      {children}
      <Route
        path="*"
        element={
          <h1 className="font-bold text-lg text-center py-4">
            404 Page Not Found
          </h1>
        }
      />
    </Routes>
  );
};

export default UserRoutes;
