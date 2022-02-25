import { useState, useEffect } from 'react';
import { CartState } from '../../context/Context';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header/Header';
import EmptyCart from '../../layouts/static/EmptyCart';
import ProductCart from '../../components/Product/ProductCart';
import FooterCart from '../../layouts/FooterCart';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + parseInt(curr.user_price_rounded) * curr.qty,
        0
      )
    );
  }, [cart]);

  const fetchData = toastId => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/accept`, cart, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer 1|xwi8t61ZmswGB9RhrNkbyhaf3FBeozuttJuIGuMM',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setLoading(false);
        toast.success('Berhasil dipesan', {
          id: toastId,
        });
        localStorage.clear('cart');
        setTimeout(() => window.location.reload(), 2200);
        console.log(res);
      })
      .catch(err => {
        setLoading(false);
        toast.error('Gagal dipesan', {
          id: toastId,
        });
        console.log('nya', err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const toastLoading = toast.loading('Sedang memesan...');

    setTimeout(() => {
      fetchData(toastLoading);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header
        title="Keranjang Saya"
        subTitle={null}
        path={`/`}
        rightBtn={null}
      />

      <main className="mb-auto">
        {/* Component below will render when there's no item in the cart */}
        {cart.length === 0 && <EmptyCart path="/" />}
        {/* Component below will render when there's item(s) in the cart */}
        {cart.map(prod => (
          <ProductCart
            key={prod.id}
            product={prod}
            handler={{
              change: e =>
                dispatch({
                  type: 'CHANGE_CART_QTY',
                  payload: {
                    id: prod.id,
                    qty: parseInt(e.target.value),
                  },
                }),
              changeNote: e =>
                dispatch({
                  type: 'CHANGE_CART_NOTE',
                  payload: {
                    id: prod.id,
                    note: String(e.target.value),
                  },
                }),
              increase: () =>
                dispatch({
                  type: 'CHANGE_CART_QTY',
                  payload: {
                    id: prod.id,
                    qty: prod.qty + 1,
                  },
                }),
              decrease: () => {
                prod.qty < 1
                  ? dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: prod,
                    })
                  : dispatch({
                      type: 'CHANGE_CART_QTY',
                      payload: {
                        id: prod.id,
                        qty: prod.qty - 1,
                      },
                    });
              },
              delete: () => {
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod,
                });
              },
            }}
          />
        ))}
      </main>
      {/* Detail information about items in the cart and total price */}
      {cart.length > 0 && (
        <FooterCart
          cart={cart}
          total={total}
          handleSubmit={handleSubmit}
          loading={isLoading}
        />
      )}
      <Toaster />
    </div>
  );
};

export default Cart;
