import { CartState } from '../../context/Context';
import { Outlet } from 'react-router-dom';
import HomeHeader from '../../components/Header/HomeHeader';
import NetProblem from '../../layouts/static/NetProblem';
import SearchBar from '../../components/SearchBar';
import ProductGroup from '../../components/Product/ProductsGroup';

const HomeCatalogue = () => {
  const {
    state: { data, cart, loading, error },
  } = CartState();

  return (
    <>
      <HomeHeader
        path={{ cart: '/cart', profile: '/profile', order: '/order' }}
        cartLength={cart.length}
      />

      {error && <NetProblem error={error} />}
      {loading && (
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ borderTopColor: 'transparent' }}
            className="w-8 h-8 border-4 mt-4 mb-2 border-indigo-500 border-solid rounded-full animate-spin"
          ></div>
        </div>
      )}
      {data && (
        <>
          <SearchBar
            placeholder={'Cari Menu Favoritmu ...'}
            handleInput={e => e.target.value.toLowerCase()}
          />

          {data.stores.map(store => (
            <ProductGroup store={store} key={store.id} />
          ))}
        </>
      )}

      <Outlet />
    </>
  );
};

export default HomeCatalogue;
