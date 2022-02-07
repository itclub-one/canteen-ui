// import CardList from './components/CardList';
// import Filter from './components/Filter';
// import SearchBar from './components/SearchBar';
// import Header from './components/Header';
// import HomeHeader from './components/HomeHeader';
// import Tabs from './components/Tabs';
// import { Tab } from '@headlessui/react';
// import InvoiceCard from './components/InvoiceCard';
// import ProductsList from './components/product/ProductsList';

import PesananSaya from './pages/User/pesanan-saya';

function App() {
  return (
    <div className="max-w-md min-h-screen my-0 m-auto bg-slate-50">
      {/* <HomeHeader /> */}
      {/* <Header title="Pesanan Saya" subTitle={null} rightBtn={null} /> */}
      {/* <Tabs
        tabCategories={{
          left: 'Detail Belanja',
          right: 'Daftar Pesanan',
        }}
      >
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tabs> */}
      {/* <SearchBar placeholderProp="Cari Menu Favoritmu" /> */}
      {/* <Filter /> */}

      {/* <CardList /> */}
      {/* <ProductsList /> */}

      <PesananSaya />
    </div>
  );
}

export default App;
