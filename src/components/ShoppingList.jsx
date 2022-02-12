import InvoiceCard from './Invoice/InvoiceCard';

const ShoppingList = () => {
  return (
    <div className="w-full">
      <InvoiceCard
        title={'#ORD2020120300001'}
        subTitle={'13 Februari 2022'}
        statusHeader="success"
        body={
          <div className="h-16 flex flex-row">
            <div>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="basis-1/3 rounded-lg w-20"
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
            <button className="mx-2 mb-2 font-medium border bg-indigo-200 text-indigo-700 rounded-md py-1 px-5 active:bg-indigo-500 active:text-white hover:bg-indigo-500 hover:text-white">
              Lacak
            </button>
            <div className="flex flex-col flex-wrap items-start justify-start mx-2 mb-1 text-xs font-mediums">
              <p>Total Bayar</p>
              <b>Rp12.000</b>
            </div>
          </>
        }
      />
    </div>
  );
};

export default ShoppingList;
