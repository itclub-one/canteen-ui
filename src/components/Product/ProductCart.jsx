const ProductCart = ({ items, handleChange, increase, decrease }) => {
  const formatPrice = price => {
    const rupiah = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return `${rupiah}`;
  };

  return (
    <div className="w-full rounded bg-slate-50">
      {/* Store Name */}
      <h2 className="mt-6 px-3 text-lg font-semibold">Toko Kripto</h2>
      <div className="my-2 mx-4 flex bg-white shadow-md rounded-lg">
        {/* Product Cart */}
        <div className="w-1/3 p-2 self-center">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="Product"
          />
        </div>
        <div className="w-2/3 px-4 py-2">
          <h3 className="font-medium text-lg text-gray-900">Burger</h3>
          <h4 className="font-bold text-sm text-gray-900">
            Rp{formatPrice(15000)}
          </h4>
          <p className="text-gray-600 text-sm">
            <b>catatan:</b> Extra cheese, without garlic Lorem ipsum dolor sit
            amet
          </p>
          <div className="flex flex-row flex-wrap items-center justify-between">
            <div className="flex flex-row p-2 h-10 w-28 rounded-lg justify-between">
              <button
                onClick={decrease}
                className="bg-gray-200 text-indigo-700 hover:bg-gray-300 h-full w-12 rounded-l cursor-pointer"
              >
                <span className="m-auto text-lg">−</span>
              </button>
              <input
                type="number"
                className="appearance-none outline-none focus:outline-none text-center w-full bg-gray-200 font-medium text-sm flex items-center text-gray-900"
                min={0}
                value={parseInt(items.count)}
                onChange={handleChange}
              ></input>
              <button
                onClick={increase}
                className="bg-gray-200 text-indigo-700 hover:bg-gray-300 h-full w-12 rounded-r cursor-pointer outline-none"
              >
                <span className="m-auto text-lg">+</span>
              </button>
            </div>
            <div className="text-indigo-600 h-full">
              <button className="cursor-pointer my-2 mx-3 active:text-indigo-200 active:bg-indigo-600 rounded-md">
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
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
