import { useState } from 'react';
import InvoiceCard from '../components/Invoice/InvoiceCard';
import Sheet from 'react-modal-sheet';

const ShoppingList = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <InvoiceCard
          title={'#ORD2020120300001'}
          subTitle={'13 Februari 2022'}
          statusHeader="success"
          body={
            <div className="h-14 flex flex-row">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="basis-1/3 rounded-lg h-12 w-16 self-center"
                />
              </div>
              <div className="basis-2/3 px-2">
                <h6 className="text-base font-medium">Toko Kripto</h6>
                <p className="text-gray-700">
                  <b>Order: </b>Burger sapi M, nasi padang, kupat tahu, akua
                  gelas, freshtea
                </p>
              </div>
            </div>
          }
          footer={
            <>
              <button
                className="mx-2 my-4 font-medium border bg-indigo-200 text-indigo-700 rounded-md self-start py-1 px-4 active:bg-indigo-500 active:text-white hover:bg-indigo-500 hover:text-white"
                onClick={() => setOpen(true)}
              >
                Lacak
              </button>
              <div className="flex flex-col self-end flex-wrap items-start justify-start mx-2 my-2 text-xs font-mediums pb-2">
                <p>Total Bayar</p>
                <b>Rp12.000</b>
              </div>
            </>
          }
        />
      </div>
      {/* Modal Sheet for Timeline */}
      <Sheet
        className="max-w-lg m-auto"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[600, 400, 100, 0]}
        initialSnap={0}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="mx-4 flex flex-col text-gray-900 overflow-auto">
              {/* Header Timeline */}
              <div className="p-1 border-b-2 border-gray-300 mb-4">
                <h6 className="font-bold inline">#ORD2020120300001</h6>
                <p className="text-sm inline float-right font-medium">
                  7 Maret 2022
                </p>
              </div>
              {/* Timeline */}
              <ol className="relative border-l border-gray-400 border-dashed mx-6">
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 outline outline-1 outline-offset-1 outline-gray-300"></div>
                  <time className="text-sm font-normal leading-none text-gray-400">
                    10.25
                  </time>
                  <h3 className="font-semibold text-gray-900">
                    Pesanan Selesai
                  </h3>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 outline outline-1 outline-offset-1 outline-gray-300"></div>
                  <time className="text-sm font-normal leading-none text-gray-400">
                    10.25
                  </time>
                  <h3 className="font-semibold text-gray-900">
                    Pesanan Diambil
                  </h3>
                  <p className="text-xs font-normal italic text-gray-500">
                    Diambil oleh Arya XII SIJ-2
                  </p>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-1.5 outline outline-1 outline-offset-1 outline-indigo-300"></div>
                  <time className="text-sm font-normal leading-none text-gray-400">
                    10.22
                  </time>
                  <h3 className="font-semibold text-indigo-500">
                    Pesanan Dibayar
                  </h3>
                  <p className="text-xs font-normal italic text-gray-500">
                    Dibayar oleh Arya XII SIJ-2
                  </p>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 outline outline-1 outline-offset-1 outline-gray-300"></div>
                  <time className="text-sm font-normal leading-none text-gray-400">
                    10.16
                  </time>
                  <h3 className="font-semibold text-gray-900">
                    Pesanan Siap Diambil
                  </h3>
                  <p className="text-xs font-normal italic text-gray-500">
                    Lakukan pembayaran terlebih dahulu di kasir
                  </p>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 outline outline-1 outline-offset-1 outline-gray-300"></div>
                  <time className="text-sm font-normal leading-none text-gray-400">
                    10.02
                  </time>
                  <h3 className="font-semibold text-gray-900">
                    Pesanan sedang Disiapkan
                  </h3>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 outline outline-1 outline-offset-1 outline-gray-300"></div>
                  <time className="text-sm font-normal leading-none text-gray-400">
                    10.01
                  </time>
                  <h3 className="font-semibold text-gray-900">
                    Pesanan Diterima oleh Toko
                  </h3>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 outline outline-1 outline-offset-1 outline-gray-300"></div>
                  <time className="text-sm font-normal leading-none text-gray-400">
                    10.00
                  </time>
                  <h3 className="font-semibold text-gray-900">
                    Pesanan Dibuat oleh Sistem
                  </h3>
                </li>
              </ol>
              {/* Footer Timeline */}
              <div className="mt-6 p-2 text-gray-900 border-t-2 border-gray-300">
                <h6 className="text-sm pb-3">
                  Status Pesanan: <b>Selesai</b>
                </h6>
                <p className="italic text-xs">
                  Jika status pesanan <b>Siap Diambil</b> segera lakukan
                  pembayaran di kasir, agar pesanan bisa segera diambil di toko.
                  Jika tidak, pesanan akan otomatis dibatalkan dalam waktu 1
                  jam.
                </p>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setOpen(false)} />
      </Sheet>
    </>
  );
};

export default ShoppingList;
