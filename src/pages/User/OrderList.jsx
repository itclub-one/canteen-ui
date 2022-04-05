import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { formatPrice, convertDate } from '../../Utils/Utils';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter';
import InvoiceCard from '../../components/Invoice/InvoiceCard';

// * Create query client
const queryClient = new QueryClient();

// * Func for fetching data
const fetcher = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/orders`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data;
};

// * Integrating with React Query state
const OrderList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <OrderListUI />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// * Render UI with dynamic values from API
const OrderListUI = () => {
  // * Fetch data using react query
  const { data, status, error } = useQuery('orders', fetcher);

  return (
    <>
      <Header title="Pesanan Saya" path={`/`} subTitle={null} rightBtn={null} />

      <Filter />

      {status === 'loading' && (
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ borderTopColor: 'transparent' }}
            className="w-8 h-8 border-4 mt-4 mb-2 border-indigo-500 border-solid rounded-full animate-spin"
          ></div>
        </div>
      )}

      {status === 'error' && <div>Error: {error.message}</div>}

      {status === 'success' &&
        (data || data.order).map(order => (
          <InvoiceCard
            key={order.order_code}
            title={order.order_code}
            subTitle={convertDate(order.created_at)}
            statusHeader={null}
            body={
              <>
                <ul className="px-1 mt-1">
                  <li className="flex flex-row justify-between">
                    <p>Status Pesanan: </p>
                    <p className="font-bold">{order.status?.name}</p>
                  </li>
                  <li className="flex flex-row justify-between">
                    <p>Status Pembayaran: </p>
                    <p className="font-bold">Dibayar</p>
                  </li>
                  <li className="flex flex-row justify-between">
                    <p>Total Harga: </p>
                    <p className="font-bold">
                      {formatPrice(order.total_user_price_rounded)}
                    </p>
                  </li>
                  <li className="flex flex-row justify-between">
                    <p>Jumlah Barang: </p>
                    <p className="font-bold">
                      {order.order_details?.length}{' '}
                      {order.order_details?.length > 1 ? 'items' : 'item'}
                    </p>
                  </li>
                </ul>
              </>
            }
            footer={
              <>
                <Link
                  to={`/order/${order.order_code}`}
                  className="mx-2 my-1 font-medium border bg-indigo-200 text-indigo-700 rounded-md py-1 px-4 active:bg-indigo-500 active:text-white hover:bg-indigo-500 hover:text-white"
                >
                  Lihat Detail
                </Link>
              </>
            }
          />
        ))}

      <Outlet />
    </>
  );
};

export default OrderList;
