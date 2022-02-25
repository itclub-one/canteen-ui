const FooterCart = ({ cart, total, handleSubmit, loading }) => {
  const formatPrice = price => {
    const rupiah = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return `Rp${rupiah}`;
  };

  return (
    <footer className="h-48 sticky inset-x-0 bottom-0 rounded-t-lg bg-white border-t z-40 flex flex-col justify-evenly">
      <div className="mx-4 border-t-2 border-indigo-200">
        <h4 className="font-bold pt-4 pb-1">Detail Pembayaran</h4>
        <ul className="text-sm text-gray-900">
          <li className="flex flex-row justify-between">
            <p>Jumlah Pesanan</p>
            <b>
              {cart.reduce((n, { qty }) => n + qty, 0) <= 0
                ? '-'
                : cart.reduce((n, { qty }) => n + qty, 0) === 1
                ? `${cart.reduce((n, { qty }) => n + qty, 0)} item`
                : `${cart.reduce((n, { qty }) => n + qty, 0)} items`}
            </b>
          </li>
          <li className="flex flex-row justify-between">
            <p>Total Harga</p>
            <b>{total ? formatPrice(total) : '-'}</b>
          </li>
        </ul>
      </div>
      {/* Button for checkout */}
      <form className="mx-4 mb-2" onSubmit={handleSubmit}>
        {total <= 100000 ? (
          <button
            className={`${
              loading
                ? 'opacity-50 cursor-not-allowed'
                : 'active:bg-indigo-600 hover:bg-indigo-600 focus:ring-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2'
            } w-full py-2 rounded-md shadow-md text-base font-medium text-white  bg-indigo-500`}
            disabled={loading}
          >
            Pesan
          </button>
        ) : (
          <>
            <button
              className="w-full py-2 rounded-md shadow-md text-base font-medium focus:ring-indigo-500 cursor-not-allowed text-white  bg-indigo-500 focus:ring-offset-2 opacity-50"
              disabled
            >
              Pesan
            </button>
            <span className="py-1 m-0 text-xs text-red-600 font-normal float-right">
              Pesananmu melebihi limit
            </span>
          </>
        )}
      </form>
    </footer>
  );
};

export default FooterCart;
