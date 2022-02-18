import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs';
import { Tab } from '@headlessui/react';
import ProductCategory from '../../components/Product/ProductCategory';

const DetailsCategory = () => {
  return (
    <>
      <Header title="Kategori" subTitle="Makanan" rightBtn="add" />
      <Tabs
        tabCategories={{
          left: 'Aktif',
          right: 'Nonaktif',
        }}
      >
        <Tab.Panel>
          <ProductCategory />
        </Tab.Panel>
        <Tab.Panel>
          <ProductCategory />
        </Tab.Panel>
      </Tabs>
    </>
  );
};

export default DetailsCategory;
