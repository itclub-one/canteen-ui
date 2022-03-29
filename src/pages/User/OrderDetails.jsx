import Tabs from '../../components/Tabs';
import { Tab } from '@headlessui/react';
import Header from '../../components/Header/Header';
import ShoppingDetails from '../../layouts/ShoppingDetails';
import ShoppingList from '../../layouts/ShoppingList';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const params = useParams();

  return (
    <>
      <Header
        path={`/order`}
        title="Detail Pesanan"
        subTitle={params.orderId}
        rightBtn={null}
      />
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
