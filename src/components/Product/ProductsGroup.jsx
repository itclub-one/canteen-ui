import ProductCard from './ProductCard';

const ProductsGroup = ({ stores, inputQuery }) => {
  // const filteredData = stores.products.filter(el =>
  //   inputQuery === '' ? el : el.name.toLowerCase().includes(inputQuery)
  // );

  return (
    <>
      {stores.map(store => (
        <div
          className="w-full rounded-sm bg-gradient-to-b from-white to-slate-50"
          key={store.id}
        >
          {/* Product Store */}
          <div className="flex flex-wrap flex-row items-center h-10 px-4 rounded-b-md border border-gray-50 bg-white text-gray-900 sticky top-16 z-30">
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <h4 className="text-sm font-semibold px-2">{store.name}</h4>
          </div>
          {/* List Products */}
          <div className="flex flex-row justify-evenly flex-wrap">
            <ProductCard products={store.products} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsGroup;
