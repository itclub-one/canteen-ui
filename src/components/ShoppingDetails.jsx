import QRCode from 'qrcode.react';

const ShoppingDetails = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-fit my-4 p-2 border-2 rounded-md border-gray-300">
          <QRCode
            value="https://www.google.com/"
            size={192}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            renderAs={'canvas'}
            imageSettings={{
              src: 'https://img.icons8.com/officel/344/react.png',
              x: null,
              y: null,
              height: 28,
              width: 28,
              excavate: true,
            }}
          />
        </div>
        <div className="w-full p-2 text-base flex flex-row flex-wrap justify-between">
          <p className="font-bold">#PQ102010382932</p>
          <p>10 Februari 2022</p>
        </div>
      </div>
      {/* // * Order List */}
      <div className="pt-2 mb-4 mx-2 border-t-2 border-gray-300">
        <h5 className="text-lg font-bold py-1">Daftar Pesanan</h5>
        <ol className="list-disc list-inside">
          {/* Order by Store Name */}
          <li className="pb-2">
            <div className="inline font-medium">
              <span>Tukang Minuman</span>
              <span className="float-right">#ORD102031023</span>
            </div>
            <ol className="pl-4 list-inside list-decimal text-sm">
              {/* Order by Products */}
              <li>
                <div className="inline">
                  <span>
                    Jus Jeruk <b>(x1)</b>
                  </span>
                  <span className="float-right">3000</span>
                </div>
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* // * End of Order List */}
      {/* // * Payment Details */}
      <div className="pt-2 mx-2 mb-4 border-t-2 border-gray-300">
        <h5 className="text-lg font-bold py-1">Detail Pembayaran</h5>
        <ul className="mb-3 pb-2 pl-4 border-b-2 border-dotted border-black">
          <li className="flex flex-row justify-between">
            Biaya Admin
            <b>Rp.500</b>
          </li>
          <li className="flex flex-row justify-between">
            PPN 10%
            <b>Rp2.300</b>
          </li>
          <li className="flex flex-row justify-between font-medium">
            Total Harga
            <b>Rp23.000</b>
          </li>
        </ul>
        <ul className="text-base px-2 mb-4">
          <li>
            Jumlah Pesanan: <span className="font-semibold">9 Barang</span>
          </li>
          <li>
            Status Pembayaran: <span className="font-semibold">Dibayar</span>
          </li>
          <li>
            Tanggal Pembayaran:{' '}
            <span className="font-semibold">10 Februari 2022 10.20</span>
          </li>
          <li>
            Kasir: <span className="font-semibold">Novita</span>
          </li>
          <li>
            Dibayar oleh: <span className="font-semibold">Arya 12 SIJ 2</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShoppingDetails;
