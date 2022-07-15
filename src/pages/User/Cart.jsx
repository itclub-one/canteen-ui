import { useState, useEffect } from 'react';
import { CartState } from '../../context/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header/Header';
import EmptyCart from '../../layouts/static/EmptyCart';
import ProductCart from '../../components/Product/ProductCart';
import FooterCart from '../../layouts/FooterCart';

const Cart = () => {
  const { cart, dispatch } = CartState();

  let navigate = useNavigate();

  const [total, setTotal] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + parseInt(curr.user_price_rounded) * curr.amount,
        0
      )
    );
  }, [cart]);

  const sendData = toastId => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/orders`,
        {
          items: cart.map(c => {
            return {
              product_id: c.product_id,
              amount: c.amount,
              customer_notes: c.customer_notes,
            };
          }),
        },
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        console.log('post res', res);
        setLoading(false);
        toast.success('Berhasil dipesan', {
          id: toastId,
        });
        dispatch({ type: 'CLEAR_CART' });
        setTimeout(() => {
          navigate('/order');
        }, 3000);
        return res;
      })
      .catch(err => {
        setLoading(false);
        toast.error('Gagal dipesan', {
          id: toastId,
        });
        console.error(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const toastLoading = toast.loading('Sedang memesan...');

    sendData(toastLoading);
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
                    amount: parseInt(e.target.value),
                  },
                }),
              changeNote: e =>
                dispatch({
                  type: 'CHANGE_CART_NOTE',
                  payload: {
                    id: prod.id,
                    customer_notes: String(e.target.value),
                  },
                }),
              increase: () =>
                dispatch({
                  type: 'CHANGE_CART_QTY',
                  payload: {
                    id: prod.id,
                    amount: prod.amount + 1,
                  },
                }),
              decrease: () => {
                prod.amount < 1
                  ? dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: prod,
                    })
                  : dispatch({
                      type: 'CHANGE_CART_QTY',
                      payload: {
                        id: prod.id,
                        amount: prod.amount - 1,
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
