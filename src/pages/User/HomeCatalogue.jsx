import { useState, useEffect } from 'react';
import HomeHeader from '../../components/Header/HomeHeader';
import SearchBar from '../../components/SearchBar';
import ProductGroup from '../../components/Product/ProductsGroup';

const HomeCatalogue = () => {
  const [stores, setStores] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/data`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 1|xwi8t61ZmswGB9RhrNkbyhaf3FBeozuttJuIGuMM',
        'Content-Type': 'application/json',
      },
      signal: abortCont.signal,
    })
      .then(res => {
        if (!res.ok) {
          // console.log(res);
          throw Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        setStores(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        if (!err.name === 'AbortError') {
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, []);

  return (
    <>
      <HomeHeader
        path={{ cart: '/cart', profile: '/profile', order: '/order' }}
      />

      <SearchBar
        placeholder={'Cari Menu Favoritmu ...'}
        handleInput={e => setSearchQuery(e.target.value.toLowerCase())}
      />

      {error && <div className="text-base font-bold text-red-600">{error}</div>}
      {isLoading && (
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ borderTopColor: 'transparent' }}
            className="w-8 h-8 border-4 mt-4 mb-2 border-indigo-500 border-solid rounded-full animate-spin"
          ></div>
        </div>
      )}
      {stores && (
        <ProductGroup stores={stores.stores} inputQuery={searchQuery} />
      )}
    </>
  );
};

export default HomeCatalogue;
