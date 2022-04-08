import { useState } from 'react';
import { formatPrice } from '../../Utils/Utils';
import Sheet from 'react-modal-sheet';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ProductCart = ({ product, handler }) => {
  const [isOpen, setOpen] = useState(false);

  const submitDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="border-2 rounded-md p-5 bg-white">
            <span className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </span>
            <h1 className="text-md font-medium pt-4 pb-2 text-gray-900">
              Hapus Item dari Keranjang?
            </h1>
            <button
              className="border border-red-600 text-red-600 text-sm rounded-md px-3 py-1 mr-2"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              className="bg-red-600 text-white text-sm rounded-md px-3 py-1"
              onClick={() => {
                handler.delete();
                onClose();
              }}
            >
              Ya, Hapus!
            </button>
          </div>
        );
      },
    });
  };

  return (
    <div className="w-full rounded bg-slate-50">
      {/* // * Store Name */}
      {/* <h2 className="mt-6 px-3 text-lg font-semibold">{product.store.name}</h2> */}

      <div className="my-2 mx-4 flex bg-white shadow-md rounded-lg">
        {/* // * Product Cart */}
        <div className="w-1/3 p-2 self-center">
          <img
            className="rounded-lg"
            src={
              product.image
                ? product.image
                : require('../../assets/img/no-image.png')
            }
            alt="Product"
          />
        </div>

        <div className="w-2/3 px-4 py-2">
          <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
          <h4 className="font-bold text-sm text-gray-900">
            {formatPrice(product.user_price_rounded)}
          </h4>
          <p className="text-gray-600 text-sm text-left">
            <b>catatan:</b>{' '}
            {product.customer_notes
              ? product.customer_notes.slice(0, 60) +
                (product.customer_notes.length > 60 ? '...' : '')
              : '-'}
          </p>

          {/* // * Button to add, remove, change notes */}
          <div className="flex flex-row flex-wrap items-center justify-between">
            {/* // * increase and decrease amount of item */}
            <div className="flex flex-row p-2 h-10 w-28 rounded-lg justify-between">
              <button
                onClick={handler.decrease}
                className="bg-gray-200 text-indigo-700 hover:bg-gray-300 h-full w-12 rounded-l cursor-pointer disabled:text-gray-400 disabled:cursor-default disabled:bg-gray-200"
                disabled={product.amount <= 1}
              >
                <span className="m-auto text-lg">−</span>
              </button>
              <input
                type="number"
                className="appearance-none outline-none focus:outline-none text-center w-full bg-gray-200 font-medium text-sm flex items-center text-gray-900"
                min={1}
                value={product.amount}
                onChange={handler.change}
              ></input>
              <button
                onClick={handler.increase}
                className="bg-gray-200 text-indigo-700 hover:bg-gray-300 h-full w-12 rounded-r cursor-pointer outline-none"
              >
                <span className="m-auto text-lg">+</span>
              </button>
            </div>

            <div className="text-indigo-600 h-full">
              {/* //* Delete item from cart */}
              <button
                onClick={submitDelete}
                className="my-2 rounded-md active:text-indigo-200 active:bg-indigo-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>

              {/* // * Change Notes item */}
              <button
                className="cursor-pointer my-2 mx-3 active:text-indigo-200 active:bg-indigo-600 rounded-md"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>

              {/* // * Modal sheet for cart */}
              <Sheet
                className="max-w-lg m-auto"
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={[500, 300, 100, 0]}
                initialSnap={1}
              >
                <Sheet.Container>
                  <Sheet.Header />
                  <Sheet.Content>
                    <div className="mx-4 flex flex-col">
                      <span className="font-medium text-gray-900 pb-1">
                        Tambahkan catatan
                      </span>
                      <textarea
                        className="px-3 py-1 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Gak pake topping ya..."
                        maxLength={250}
                        value={product.customer_notes}
                        onChange={handler.changeNote}
                      ></textarea>
                      <span className="text-sm text-right text-gray-700">
                        {product.customer_notes.length}/250
                      </span>
                      <button
                        className="py-2 mt-5 border shadow-sm rounded-md bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 text-white"
                        onClick={() => setOpen(false)}
                      >
                        Simpan
                      </button>
                    </div>
                  </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onTap={() => setOpen(false)} />
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
