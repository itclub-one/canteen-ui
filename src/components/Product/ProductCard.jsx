import { CartState } from '../../context/Context';

const ProductCard = ({ products }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

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
              src={
                product.image
                  ? product.image
                  : require('../../assets/img/no-image.png')
              }
              alt="Product"
            />
          </a>
          {/* // Title, Desc, Price */}
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
          {/* // Button add to cart and notes */}
          {!cart.some(p => p.id === product.id) ? (
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
            <div className="my-2 mx-4 transition delay-300 ease-in-out">
              <button
                className="py-1 px-6 border rounded-md bg-red-600 text-white text-center text-xs font-semibold shadow-sm"
                onClick={() => {
                  dispatch({ type: 'REMOVE_FROM_CART', payload: product });
                }}
              >
                Hapus
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ProductCard;
