const StoreInfo = () => {
  return (
    <div className="flex flex-col flex-wrap px-5 my-4">
      {/* Store Name and location */}
      <div className="flex flex-row justify-between items-center mb-4">
        <div className="text-gray-900">
          <h5 className="text-lg font-semibold">Toko Minuman Enak</h5>
          <p className="text-sm">Kantin A, Belakang Masjid Belakang</p>
        </div>
        <button className="text-indigo-500 rounded-full p-1 active:bg-indigo-100 hover:bg-indigo-100 focus:bg-indigo-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </div>

      {/* Store Status */}
      <div className="flex flex-row justify-between items-center border-2 rounded border-indigo-200 mb-8 px-4 py-2">
        <div className="text-gray-900">
          <h5 className="text-lg font-semibold">Buka Toko</h5>
          <p className="text-sm">
            Ketika toko dibuka, menu dan tokomu akan ditampilkan di halaman
            katalog pembeli
          </p>
        </div>
        {/* Toggle */}
        <div className="px-2">
          <div className="relative inline-block w-10 align-middle select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggleStatus"
              className="checked:bg-indigo-500 outline-none focus:outline-none right-5 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggleStatus"
              className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>

      {/* Store Information */}
      <div className="flex flex-col text-gray-900">
        <h4 className="text-lg font-semibold mb-1">Informasi Pemilik Toko</h4>
        <div className="px-4 mb-2">
          <p className="font-semibold">Pemilik Toko</p>
          <p className="">Eren Yeager</p>
        </div>
        <div className="px-4 mb-2">
          <p className="font-semibold">Kontak</p>
          <p className="">0888-1231-2133</p>
        </div>
        <div className="px-4 mb-2">
          <p className="font-semibold">Email</p>
          <p className="">erenyeager@mail.com</p>
        </div>
        <div className="px-4 mb-2">
          <p className="font-semibold">Alamat</p>
          <p className="pr-6">
            Jl. Sudirman No. 4, kel. paminggir, Kec. Garut Kota, Kab. Garut
          </p>
        </div>
        <div className="mt-4">
          <button className="font-medium underline underline-offset-2 decoration-1">
            Ubah kata sandi
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
