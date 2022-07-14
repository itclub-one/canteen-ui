import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs';
import { Tab } from '@headlessui/react';
import ProductCategory from '../../components/Product/ProductCategory';
import Sheet from 'react-modal-sheet';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormMenu from '../../components/FormMenu';

const DetailsCategory = () => {
  const params = useParams();

  const {
    register,
    unregister,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: '',
      name: '',
      description: '',
      price: '',
      statusMenu: true,
    },
    mode: 'onChange',
  });

  setInterval(console.log(watch()), 2000);

  const onSubmit = data => {
    console.log(data);
  };

  console.log('errors', errors, Object.keys(errors).length === 0);

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Header
        title="Kategori"
        path={'/store/category'}
        subTitle="Makanan"
        rightBtn={{ type: 'add', handler: () => setOpen(true) }}
      />
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

      {/* Modal Sheet for Timeline */}
      {/*
      // ! NEED TO BE FIXED !
       */}
      <Sheet
        className="max-w-lg m-auto"
        isOpen={isOpen}
        onClose={() => {
          reset();
          setOpen(false);
        }}
        snapPoints={[0.9325, 0]}
        initialSnap={0}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="mx-4 flex flex-col text-slate-700 overflow-auto">
              {/* Header Timeline */}
              <div className="p-1 border-b-2 border-gray-300 mb-4">
                <h6 className="font-bold text-lg">Tambah Menu</h6>
              </div>

              <FormMenu
                register={register}
                unregister={unregister}
                watch={watch}
                errors={errors}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                onClose={() => {
                  reset();
                  setOpen(false);
                }}
                addMenu={true}
              />
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default DetailsCategory;
