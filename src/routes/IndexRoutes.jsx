import { Route, Routes } from 'react-router-dom';
// * User Pages
import HomeCatalogue from '../pages/User/HomeCatalogue';
import ProfileUser from '../pages/User/ProfileUser';
import Cart from '../pages/User/Cart';
import OrderList from '../pages/User/OrderList';
import OrderDetails from '../pages/User/OrderDetails';
// * Store pages
import HomeStore from '../pages/Store/HomeStore';
import ProfileStore from '../pages/Store/ProfileStore';
import OrderListStore from '../pages/Store/OrderListStore';
import Category from '../pages/Store/Category';
import DetailsCategory from '../pages/Store/DetailsCategory';
import Transactions from '../pages/Cashier/Transactions';

const IndexRoutes = () => {
  return (
    <Routes>
      {/* // * Routes for users */}
      <Route path="/">
        <Route index element={<HomeCatalogue />} />
        <Route path="profile" element={<ProfileUser />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order">
          <Route index element={<OrderList />} />
          <Route path=":orderId" element={<OrderDetails />} />
        </Route>
      </Route>

      {/* // * Routes for cashier */}
      <Route path="cashier">
        <Route index element={<h1>Hello</h1>} />
        <Route path="transactions" element={<Transactions />} />
      </Route>

      {/* // * Routes for stores */}
      <Route path="store">
        <Route index element={<HomeStore />} />
        <Route path="profile" element={<ProfileStore />} />
        <Route path="order" element={<OrderListStore />} />
        <Route path="category">
          <Route index element={<Category />} />
          <Route path=":categoryId" element={<DetailsCategory />} />
        </Route>
      </Route>

      {/* // * No match route */}
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

export default IndexRoutes;
