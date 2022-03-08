import { Route, Routes } from 'react-router-dom';
import HomeCatalogue from '../pages/User/HomeCatalogue';
import ProfileUser from '../pages/User/ProfileUser';
import Cart from '../pages/User/Cart';
import OrderList from '../pages/User/OrderList';
import OrderDetails from '../pages/User/OrderDetails';
import Category from '../pages/Store/Category';
import ProfileStore from '../pages/Store/ProfileStore';
import DetailsCategory from '../pages/Store/DetailsCategory';
import HomeStore from '../pages/Store/HomeStore';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeCatalogue />} />
      <Route path="profile" element={<ProfileUser />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<OrderList />} />
      <Route path="order/details" element={<OrderDetails />} />
      <Route path="store" element={<HomeStore />} />
      <Route path="store/profile" element={<ProfileStore />} />
      <Route path="store/category" element={<Category />} />
      <Route path="store/category/details" element={<DetailsCategory />} />
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
