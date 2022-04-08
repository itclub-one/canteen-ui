import { CartState } from '../../context/CartContext';
import { useState } from 'react';
import { formatPrice } from '../../Utils/Utils';
import Sheet from 'react-modal-sheet';

const ProductCard = ({ product, handler }) => {
  const { cart, dispatch } = CartState();
  const [isOpen, setOpen] = useState(false);
  const [noteIsOpen, setNoteOpen] = useState(false);

  const matchProd = item => cart.find(prod => item.id === prod.id);

  return (
    <>
      <div className="h-64 w-40 bg-white rounded-lg border border-gray-200 shadow-md my-4">
        {/* // * Image */}
        <img
          className="rounded-t-lg w-full h-28 cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
          src={
            product.image
              ? product.image
              : require('../../assets/img/no-image.png')
          }
          alt="Gambar Produk"
        />
        {/* // * Title, Desc, Price */}
        <div className="px-2 pt-2 h-24">
          <h4 className="text-sm font-bold text-gray-900 tracking-tight">
            {product.name}
          </h4>
          <p className="text-xs font-normal text-gray-700">
            {product.description.slice(0, 37) +
              (product.description.length > 37 ? '...' : '')}
          </p>
          <h6 className="pt-2 text-sm font-semibold text-gray-900">
            {formatPrice(product.user_price_rounded)}
          </h6>
        </div>

        {/* // * Button to add, remove, change notes */}
        {!cart?.some(p => p.id === product.id) ? (
          <div className="my-2 mx-4 transition delay-300 ease-in-out">
            <button
              className="py-1 px-6 border rounded-md border-indigo-700 text-indigo-600 text-center text-xs font-semibold shadow-sm"
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: product });
              }}
            >
              Pesan
            </button>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap items-center justify-between">
            {/* // * increase and decrease amount of item */}
            <div className="flex flex-row p-2 h-10 w-24 rounded-lg justify-between">
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
                value={matchProd(product)?.amount}
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
              {/* // * Change Notes item */}
              <button
                className="cursor-pointer my-2 mx-3 active:text-indigo-200 active:bg-indigo-600 rounded-md"
                onClick={() => setNoteOpen(true)}
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
            </div>
          </div>
        )}
      </div>

      {/* // * Modal sheet for add notes */}
      <Sheet
        className="max-w-lg m-auto"
        isOpen={noteIsOpen}
        onClose={() => setNoteOpen(false)}
        snapPoints={[250, 150, 0]}
        initialSnap={0}
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
                value={matchProd(product)?.customer_notes}
                onChange={handler.changeNote}
              ></textarea>
              <span className="text-sm text-right text-gray-700">
                {matchProd(product)?.customer_notes?.length}
                /250
              </span>
              <button
                className="py-2 mt-5 border shadow-sm rounded-md bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 text-white"
                onClick={() => setNoteOpen(false)}
              >
                Simpan
              </button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setNoteOpen(false)} />
      </Sheet>

      {/* // * Modal sheet for product description */}
      <Sheet
        className="max-w-lg m-auto"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[525, 0]}
        initialSnap={0}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="mx-4 flex flex-col text-gray-900">
              <img
                src={
                  product.image
                    ? product.image
                    : require('../../assets/img/no-image.png')
                }
                alt="Product"
                className="w-full max-h-64"
              />
              <div className="py-4">
                <h3 className="text-lg font-bold leading-loose">
                  {product.name}
                </h3>
                <h4 className="font-semibold leading-loose">
                  {formatPrice(product.user_price_rounded)}
                </h4>
                <p className="leading-normal">{product.description}</p>
              </div>
              <div className="my-4 transition delay-300 ease-in-out">
                {!cart?.some(p => p.id === product.id) ? (
                  <button
                    className="w-full py-3 border rounded-md border-indigo-700 text-indigo-600 text-center font-semibold shadow-sm"
                    onClick={() => {
                      dispatch({ type: 'ADD_TO_CART', payload: product });
                    }}
                  >
                    Pesan
                  </button>
                ) : (
                  <button
                    className="w-full py-3 border-2 rounded-md text-red-600 border-red-600 text-center font-semibold shadow-sm"
                    onClick={() => {
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: product,
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span className="inline px-1">Hapus</span>
                  </button>
                )}
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setOpen(false)} />
      </Sheet>
    </>
  );
};

export default ProductCard;
