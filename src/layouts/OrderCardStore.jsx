import InvoiceCard from '../components/Invoice/InvoiceCard';
import { useState } from 'react';
import Sheet from 'react-modal-sheet';

const OrderCardStore = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <InvoiceCard
        title={'Muhammad Fajri'}
        subTitle={'10.20 - 17 Maret 2022'}
        statusHeader={null}
        body={
          <>
            <ul className="text-gray-600">
              <li className="inline font-medium">ID Pesanan</li>
              <li className="inline float-right">#ORD3493423191</li>
            </ul>
            <ul className="text-gray-600">
              <li className="inline font-medium">Status Pesanan</li>
              <li className="inline float-right">Selesai</li>
            </ul>
            <ul className="text-gray-600">
              <li className="inline font-medium">Status Pembayaran</li>
              <li className="inline float-right">Dibayar</li>
            </ul>
            <ul className="text-gray-600">
              <li className="inline font-medium">Jumlah Item</li>
              <li className="inline float-right">4</li>
            </ul>
          </>
        }
        footer={
          <>
            <div className="self-end px-1">
              <button
                className="px-2 py-1 border bg-indigo-200 text-indigo-700 rounded-md font-medium"
                onClick={() => setOpen(true)}
              >
                Lihat Detail
              </button>
            </div>
            <div className="self-end mt-1 flex flex-col text-gray-800 px-2">
              <p className="font-light">Total Harga</p>
              <p className="font-medium">Rp20.000</p>
            </div>
          </>
        }
      />

      <Sheet
        className="max-w-lg m-auto"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[600, 0]}
        initialSnap={0}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="mx-4 flex flex-col justify-between text-gray-900 overflow-auto">
              <div className="pb-4 px-1 border-b-2">
                <h5 className="text-lg font-semibold">Detail Pesanan</h5>
                <div className="px-2">
                  <ul className="text-gray-600 pb-2">
                    <li className="inline font-medium">
                      Tahu Bulat <b>(x2)</b>
                    </li>
                    <li className="inline float-right">Rp10.000</li>
                    <li className="px-2 text-sm leading-4 w-4/5">
                      <b>Catatan: </b>Tambahin pedesnya, jangan pake kecap,
                      bumbu asinnya biasa aja, pake keju juga
                    </li>
                  </ul>
                  <ul className="text-gray-600 pb-2">
                    <li className="inline font-medium">
                      Kentang Goreng <b>(x1)</b>
                    </li>
                    <li className="inline float-right">Rp7.000</li>
                    <li className="px-2 text-sm leading-4 w-4/5">
                      <b>Catatan: </b>Pedes 2 sendok
                    </li>
                  </ul>
                  <ul className="text-gray-600 pb-2">
                    <li className="inline font-medium">
                      Air Mineral <b>(x1)</b>
                    </li>
                    <li className="inline float-right">Rp2.000</li>
                  </ul>
                </div>
                <h5 className="font-semibold">Jumlah Item: 4</h5>
                <h5 className="font-semibold">Total Harga: Rp20.000</h5>
              </div>
              <div className="py-4 px-1 border-b-2">
                <h5 className="text-lg font-semibold">Rincian</h5>
                <div className="px-2">
                  <ul className="text-gray-600">
                    <li className="inline font-medium">ID Pesanan</li>
                    <li className="inline float-right">#ORD12092029902</li>
                  </ul>
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Tanggal</li>
                    <li className="inline float-right">17 Maret 2022</li>
                  </ul>
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Waktu Pesanan</li>
                    <li className="inline float-right">10.20</li>
                  </ul>
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Nama Pembeli </li>
                    <li className="inline float-right">Muhammad Fajri</li>
                  </ul>
                </div>
              </div>
              <div className="py-4 px-1 border-b-2">
                <h5 className="text-lg font-semibold">Status</h5>
                <div className="px-2">
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Status Pesanan</li>
                    <li className="inline float-right">Selesai</li>
                  </ul>
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Status Pembayaran</li>
                    <li className="inline float-right">Dibayar</li>
                  </ul>
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Waktu Pembayaran</li>
                    <li className="inline float-right">10.22</li>
                  </ul>
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Dibayar Oleh</li>
                    <li className="inline float-right">M Arya XII SIJ-2</li>
                  </ul>
                  <ul className="text-gray-600">
                    <li className="inline font-medium">Kasir</li>
                    <li className="inline float-right">Novita</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row mb-3 justify-evenly my-3">
                <button className="w-full px-6 py-2 bg-indigo-500 text-indigo-50 font-medium rounded-md shadow-sm active:bg-indigo-600 hover:bg-indigo-600 disabled:opacity-75">
                  Pesanan Telah Diambil
                </button>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setOpen(false)} />
      </Sheet>
    </>
  );
};

export default OrderCardStore;
