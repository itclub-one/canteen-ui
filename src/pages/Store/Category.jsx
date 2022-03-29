import { Outlet } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/Header/Header';

const Category = () => {
  return (
    <>
      <Header title="Produk Saya" subTitle="Kategori" path={'/'} />

      <CategoryCard name="makanan" quantity="10" />

      <Outlet />
    </>
  );
};

export default Category;
