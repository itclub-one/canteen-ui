import { useState } from 'react';
import Sheet from 'react-modal-sheet';

const OrderCard = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="max-h-48 mx-6 my-3 py-1 px-2 bg-white rounded-lg border border-gray-200 shadow-sm text-gray-900">
        {/* Header */}
        <div className="border-b-2 px-2 pb-1 flex flex-row flex-wrap justify-between items-center">
          <div className="pt-1">
            <h4 className="text-sm font-bold leading-0">Muhammad Fajri</h4>
            <time className="text-xs font-medium leading-0">
              10.20 - 17 Maret 2022
            </time>
          </div>
          <div className="text-sm font-medium text-gray-500 w-20">
            <button
              className="px-1 py-4  w-full rounded-md"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 float-right"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Body Invoice */}
        <div className="text-sm  py-2 px-3 leading-6">
          <p>3 x Seblak Baso</p>
          <p>1 x Baso aci</p>
          <p>2 x Es Jeruk</p>
        </div>
      </div>

      <Sheet
        className="max-w-lg m-auto"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[500, 0]}
        initialSnap={0}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="mx-4 flex flex-col h-full justify-between text-gray-900">
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
                <h5 className="font-semibold">Total Item: 4</h5>
              </div>
              <div className="mb-auto py-4 px-1 border-b-2">
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
              <div className="flex flex-row mb-3 justify-evenly">
                <button className="w-full px-4 py-2 mr-3 border-2 border-red-500 rounded-md shadow-sm text-red-500 font-medium active:text-white active:bg-red-500 hover:text-white hover:bg-red-500">
                  Tolak
                </button>
                <button className="w-full px-6 py-2 bg-indigo-500 text-indigo-50 font-medium rounded-md shadow-sm active:opacity-75 hover:opacity-75">
                  Terima
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

export default OrderCard;
