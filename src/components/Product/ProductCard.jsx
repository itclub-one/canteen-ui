import { useState } from 'react';

const ProductCard = ({ products }) => {
  const [items, setItems] = useState({
    id: products.id,
    count: 0,
  });

  const handleChange = e => {
    setItems({
      id: products.id,
      count: parseInt(e.target.value),
    });
  };

  const decrease = () => {
    if (items.count <= 0) {
      return;
    }
    setItems({ count: items.count - 1 });
  };

  const formatPrice = price => {
    const rupiah = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return `Rp${rupiah}`;
  };

  return (
    <>
      {products.map(product => (
        <div
          className="h-64 w-40 bg-white rounded-lg border border-gray-200 shadow-md my-4"
          key={product.id}
        >
          {/* // Image */}
          <a href="/">
            <img
              className="rounded-t-lg w-full h-28"
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              // src={product.img}
              alt="Product"
            />
          </a>
          {/* // Title, Desc, Price */}
          <div className="px-2 pt-2 h-24">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">
              {product.name}
            </h4>
            <p className="text-xs font-normal text-gray-700 truncate">
              {product.description}
            </p>
            <h6 className="pt-2 text-sm font-semibold text-gray-900">
              {formatPrice(product.user_price_rounded)}
            </h6>
          </div>
          {/* // Button add to cart and notes */}
          <div
            className="flex flex-row flex-wrap items-center justify-between"
            key={items.id}
          >
            {items.count === 0 ? (
              <div className="mx-4 my-2 transition delay-300 ease-in-out">
                <button
                  type="button"
                  className="py-1 px-2 w-16 border rounded-md border-indigo-700 text-indigo-600 text-center text-xs font-semibold shadow-sm"
                  onClick={() => setItems({ count: items.count + 1 })}
                >
                  Pesan
                </button>
              </div>
            ) : (
              <>
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
                    onClick={() => setItems({ count: items.count + 1 })}
                    className="bg-gray-200 text-indigo-700 hover:bg-gray-300 h-full w-12 rounded-r cursor-pointer outline-none"
                  >
                    <span className="m-auto text-lg">+</span>
                  </button>
                </div>
                <div className="text-indigo-600 h-full">
                  <button className="cursor-pointer my-2 mx-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
