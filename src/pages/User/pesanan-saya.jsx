import Filter from '../../components/Filter';
import Header from '../../components/Header';
import InvoiceCard from '../../components/Invoice/InvoiceCard';

const PesananSaya = () => {
  return (
    <>
      <Header title="Pesanan Saya" subTitle={null} rightBtn={null} />

      <Filter />

      <InvoiceCard
        statusHeader={null}
        body={
          <>
            <ul className="px-2">
              <li className="flex flex-row justify-between">
                <p>Status Pesanan: </p>
                <p className="font-bold">Siap Ambil</p>
              </li>
              <li className="flex flex-row justify-between">
                <p>Status Pembayaran: </p>
                <p className="font-bold">Dibayar</p>
              </li>
              <li className="flex flex-row justify-between">
                <p>Total Harga: </p>
                <p className="font-bold">
                  {'18000'
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
                </p>
              </li>
              <li className="flex flex-row justify-between">
                <p>Jumlah Barang: </p>
                <p className="font-bold">3 item</p>
              </li>
            </ul>
          </>
        }
        footer={
          <>
            <button className="mx-2 my-1 font-medium border bg-indigo-200 text-indigo-700 rounded-md py-1 px-4 active:bg-indigo-500 active:text-white hover:bg-indigo-500 hover:text-white">
              Lihat Detail
            </button>
          </>
        }
      />
    </>
  );
};

export default PesananSaya;
