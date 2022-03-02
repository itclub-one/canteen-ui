const UserInfo = () => {
  return (
    <div className="flex flex-col flex-wrap px-5 my-4">
      {/* Title */}
      <h5 className="text-lg font-semibold mb-3 text-gray-900">
        Informasi Pengguna
      </h5>
      {/* Information */}
      <div className="text-gray-900">
        <div className="px-4 mb-2">
          <p className="font-semibold">Nama Pengguna</p>
          <p className="">Eren Yeager</p>
        </div>
        <div className="px-4 mb-2">
          <p className="font-semibold">NIS / NISN</p>
          <p className="">123333 / 12301213</p>
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
      </div>
      {/* Button for change password */}
      <div className="mt-4">
        <button className="font-medium underline underline-offset-2 decoration-1">
          Ubah kata sandi
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
