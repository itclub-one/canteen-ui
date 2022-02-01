import { useState } from 'react';
import { PencilAltIcon } from '@heroicons/react/outline';

const Card = () => {
  const [products, setProducts] = useState({
    count: 0,
  });

  const handleChange = (e) => {
    setProducts({
      count: parseInt(e.target.value),
    });
  };

  const decrease = (e) => {
    if (products.count <= 0) {
      return;
    }
    setProducts({ count: products.count - 1 });
  };

  return (
    <div className="w-40 bg-white rounded-lg border border-gray-200 shadow-md m-1">
      {/* Image */}
      <a href="/">
        <img
          className="rounded-t-lg w-full h-40"
          src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Food"
        />
      </a>
      {/* Title, Desc, Price */}
      <div className="p-2">
        <h4 className="text-base font-bold text-gray-900 tracking-tight">
          Burger
        </h4>
        <p className="text-sm font-normal text-gray-700 ">
          Burger dengan daging sapi pilihan
        </p>
        <h6 className="mt-2 text-base font-semibold text-gray-900">Rp10.000</h6>
      </div>
      {/* Button add to cart and notes */}
      <div className="flex flex-row p-2 h-11 rounded-lg relative justify-between">
        <button
          onClick={decrease}
          className="basis-1/6 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-lg font-thin">−</span>
        </button>
        <input
          type="number"
          className="basis-2/6 outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-sm hover:text-black focus:text-black flex items-center text-gray-900"
          value={parseInt(products.count)}
          onChange={handleChange}
        ></input>
        <button
          onClick={() => setProducts({ count: products.count + 1 })}
          className="basis-1/6 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
        >
          <span className="m-auto text-lg font-thin">+</span>
        </button>
        <button className="basis-2/6 text-gray-900 h-full w-10 pr-1 rounded-r cursor-pointer">
          <PencilAltIcon className="ml-auto h-5 w-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default Card;
