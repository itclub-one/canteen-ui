import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { CartState } from '../../context/CartContext';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomeHeader from '../../components/Header/HomeHeader';
import NetProblem from '../../layouts/static/NetProblem';
import SearchBar from '../../components/SearchBar';
import ProductGroup from '../../components/Product/ProductsGroup';

const queryClient = new QueryClient();

// * Func for fetch data
const fetcher = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/products`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};

// * Integrating components page with React Query Provider
const HomeCatalogue = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeCatalogueUI />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

// * Components page
const HomeCatalogueUI = () => {
  const { data, status, error } = useQuery('products', fetcher);

  const { cart } = CartState();

  const menuItems = [
    { id: 1, path: '/profile', name: 'Profil' },
    { id: 2, path: '/order', name: 'Pesanan Saya' },
  ];

  // status === 'success' && console.log('lorem', data.data.products);

  return (
    <>
      <HomeHeader
        menuItems={menuItems}
        cart={{ path: '/cart', length: cart.length }}
      />

      <SearchBar
        placeholder={'Cari Menu Favoritmu ...'}
        handleInput={e => e.target.value.toLowerCase()}
      />

      {status === 'loading' && (
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ borderTopColor: 'transparent' }}
            className="w-8 h-8 border-4 mt-4 mb-2 border-indigo-500 border-solid rounded-full animate-spin"
          ></div>
        </div>
      )}

      {status === 'error' && <NetProblem error={error} />}

      {status === 'success' && <ProductGroup products={data?.data?.products} />}

      <Outlet />
    </>
  );
};

export default HomeCatalogue;
