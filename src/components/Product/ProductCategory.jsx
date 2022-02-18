const ProductCategory = () => {
  return (
    <div className="mx-6 my-4 flex flex-row flex-wrap justify-between items-center rounded-md border-2 border-gray-900">
      <div className="flex flex-row items-center">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="gambar makanan"
          className="w-20 h-16 rounded-sm"
        />
        <span className="px-4">
          <h5 className="font-bold pb-1">Burger Sapi</h5>
          <p className="text-sm">Rp20.000</p>
        </span>
      </div>
      <div className="py-2 px-4">
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductCategory;
