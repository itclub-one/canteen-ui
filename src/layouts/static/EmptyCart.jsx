import { ReactComponent as NoCart } from '../../assets/img/empty-cart.svg';
import { Link } from 'react-router-dom';

const EmptyCart = ({ path }) => {
  return (
    <div className="flex flex-col justify-center items-center my-28 text-gray-400">
      <NoCart className="text-center" />
      <h5 className="pt-5 font-bold text-lg text-gray-600">
        Keranjangmu masih Kosong!
      </h5>
      <Link
        to={path}
        className="py-1 px-4 mt-3 bg-indigo-500 text-gray-100 rounded-md shadow-md outline-none"
      >
        Mulai Belanja
      </Link>
    </div>
  );
};

export default EmptyCart;
