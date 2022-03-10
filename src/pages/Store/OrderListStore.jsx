import Header from '../../components/Header/Header';
import OrderCardStore from '../../layouts/OrderCardStore';

const OrderListStore = () => {
  return (
    <>
      <Header
        title={'Daftar Pesanan'}
        subTitle={null}
        path={'/store'}
        rightBtn={null}
      />

      <OrderCardStore />
    </>
  );
};

export default OrderListStore;
