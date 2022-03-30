import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useParams } from 'react-router-dom';
import Tabs from '../../components/Tabs';
import { Tab } from '@headlessui/react';
import Header from '../../components/Header/Header';
import ShoppingDetails from '../../layouts/ShoppingDetails';
import ShoppingList from '../../layouts/ShoppingList';

const queryClient = new QueryClient();

// * Func for fetching data
const fetcher = async id => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/orders/${id}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
        'Content-Type': 'application/json',
      },
    }
  );
  // ! use it when using json-server (dev mode)
  if (Array.isArray(res.data)) {
    return res.data[0];
  }

  return res.data;
};

const OrderDetails = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <OrderDetailsUI />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

const LoadingUI = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-8 h-8 border-4 mt-4 mb-2 border-indigo-500 border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
};

const OrderDetailsUI = () => {
  const params = useParams();

  const { data, status, error } = useQuery(['order', params.orderId], () =>
    fetcher(params.orderId)
  );

  if (status === 'success') {
    console.log('actual data', data);
  }

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
          {status === 'loading' && <LoadingUI />}
          {status === 'error' && error.message}
          {status === 'success' && <ShoppingDetails data={data} />}
        </Tab.Panel>
        <Tab.Panel>
          {status === 'loading' && <LoadingUI />}
          {status === 'error' && error.message}
          {status === 'success' && <ShoppingList />}
        </Tab.Panel>
      </Tabs>
    </>
  );
};

export default OrderDetails;
