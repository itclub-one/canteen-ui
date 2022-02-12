import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs';
import { Tab } from '@headlessui/react';
import ShoppingDetails from '../../components/ShoppingDetails';
import ShoppingList from '../../components/ShoppingList';

const OrderDetails = () => {
  return (
    <>
      <Header title="Belanja" subTitle={'#PQ102010382932'} rightBtn={null} />
      <Tabs
        tabCategories={{
          left: 'Detail Belanja',
          right: 'Daftar Pesanan',
        }}
      >
        <Tab.Panel>
          <ShoppingDetails />
        </Tab.Panel>
        <Tab.Panel>
          <ShoppingList />
        </Tab.Panel>
      </Tabs>
    </>
  );
};

export default OrderDetails;
