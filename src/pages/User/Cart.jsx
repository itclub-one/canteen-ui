import { useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCart from '../../components/Product/ProductCart';

const Cart = () => {
  const [items, setItems] = useState({
    count: 0,
  });

  const handleChange = e => {
    setItems({
      count: parseInt(e.target.value),
    });
  };

  const decrease = () => {
    if (items.count <= 1) {
      return;
    }
    setItems({ count: items.count - 1 });
  };

  const increase = () => setItems({ count: items.count + 1 });

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header
        title="Keranjang Saya"
        subTitle={null}
        path={`/`}
        rightBtn={null}
      />

      <main className="mb-auto">
        <ProductCart
          items={items}
          handleChange={handleChange}
          increase={increase}
          decrease={decrease}
        />
      </main>

      <footer className="h-48 sticky inset-x-0 bottom-0 rounded-t-lg bg-white border-t z-40 flex flex-col justify-evenly">
        <div className="mx-4 border-t-2 border-indigo-200">
          <h4 className="font-bold pt-4 pb-1">Detail Pembayaran</h4>
          <ul className="text-sm text-gray-900">
            <li className="flex flex-row justify-between">
              <p>Jumlah Pesanan</p>
              <b>{items.count} barang</b>
            </li>
            <li className="flex flex-row justify-between">
              <p>Total Harga</p>
              <b>Rp12.000</b>
            </li>
          </ul>
        </div>
        <div className="mx-4 mb-2">
          <button className=" w-full py-2 rounded-md shadow-md text-base font-medium text-white  bg-indigo-500 active:bg-indigo-600 hover:bg-indigo-600 focus:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
            Pesan
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
