import { Link, Outlet } from 'react-router-dom';
import HomeHeader from '../../components/Header/HomeHeader';
import OrderCard from '../../components/OrderCard';

const menuItems = [
  { id: 1, path: '/store/profile', name: 'Informasi Toko' },
  { id: 2, path: '/store/category', name: 'Menu Saya' },
  { id: 3, path: '/store/order', name: 'Daftar Pesanan' },
];

const HomeStore = () => {
  return (
    <>
      <HomeHeader menuItems={menuItems} cart={null} />

      {/* Notification if Store not open yet */}
      <div className="mx-6 my-4 py-3 text-sm flex flex-row items-center font-medium bg-yellow-100 rounded-md border-2 border-amber-300">
        <span className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <div className="text-yellow-700">
          <h6 className="font-semibold">Tokomu Belum Buka!</h6>
          <p className="text-xs">
            Buka tokomu di pengaturan atau{' '}
            <Link to="/store/profile" className="text-amber-400">
              klik disini
            </Link>
          </p>
        </div>
      </div>

      {/* Filter Orders */}

      {/* List of Orders */}
      <h4 className="px-4 pt-2 text-lg text-gray-900 font-bold">
        Pesanan Masuk
      </h4>
      <OrderCard />

      <Outlet />
    </>
  );
};

export default HomeStore;
