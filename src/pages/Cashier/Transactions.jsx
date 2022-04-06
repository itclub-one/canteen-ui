import { Tab } from '@headlessui/react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header/Header';
import CategoryCard from '../../components/CategoryCard';

const Transactions = () => {
  return (
    <>
      <Header title="Transaksi" subTitle={null} path={'/cashier'} />

      <Tabs
        tabCategories={{
          left: 'Transaksi Hari Ini',
          right: 'Daftar Transaksi',
        }}
      >
        <Tab.Panel>
          <h4 className="m-4 text-gray-900  ">
            Total transaksi hari ini: <b>29</b>
          </h4>

          <CategoryCard name={'Toko Rafles'} quantity={10} />
        </Tab.Panel>
        <Tab.Panel>
          <CategoryCard name={'Toko Rafles'} quantity={10} />
        </Tab.Panel>
      </Tabs>
    </>
  );
};

export default Transactions;
