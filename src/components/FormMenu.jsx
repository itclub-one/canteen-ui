const FormMenu = ({
  register,
  unregister,
  watch,
  errors,
  handleSubmit,
  onSubmit,
  onClose,
  addMenu,
}) => {
  return (
    <form className="px-1" onSubmit={handleSubmit(onSubmit)}>
      {/* // * Detail Information */}
      <h4 className="font-semibold pb-2">Detail Menu</h4>

      <fieldset className="px-2 mb-3">
        <label htmlFor="image" className="block mb-1">
          <span className="block font-medium">Foto</span>
          <span className="block text-sm text-slate-600">
            Upload foto menu-mu yang jelas dan menarik
          </span>
          <input
            type="file"
            id="image"
            {...register('image')}
            accept="image/png, image/jpeg, image/jpg"
            className="block text-sm text-slate-500 mt-1
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-xs file:font-semibold
          file:bg-indigo-50 file:text-indigo-600
          hover:file:bg-indigo-100"
          />
        </label>

        {/* Image preview */}
        {watch('image') && (
          <figure className="relative w-28 h-28 flex items-center mb-2">
            <img
              className="w-24 h-24 border border-indigo-100 rounded"
              src={URL.createObjectURL(watch('image')[0])}
              alt=""
              loading="lazy"
            />

            <button
              className="absolute top-0 right-1.5 bg-white shadow rounded-full text-pink-600 w-6 h-6"
              onClick={() => unregister('image', { keepDefaultValue: true })}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 opacity-80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </figure>
        )}

        <label htmlFor="name" className="block mb-2">
          <span className="block font-medium text-slate-700">Nama</span>
          <input
            {...register('name', {
              required: 'Nama tidak boleh kosong.',
              disabled: !addMenu,
            })}
            id="name"
            placeholder="Dodol Kacang"
            className={`${
              errors?.name
                ? 'border-pink-500 caret-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                : 'border-slate-300 caret-indigo-500 focus:border-indigo-500 focus:ring-indigo-500'
            } mt-1 block w-full px-3 py-2 focus:ring-1 bg-white focus:outline-none border rounded-md text-sm shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`}
          />
          {errors?.name && (
            <span className="block mt-1 text-sm font-light text-pink-600">
              {errors?.name?.message}
            </span>
          )}
        </label>

        <label htmlFor="desc" className="block mb-2">
          <span className="block font-medium text-slate-700">Deskripsi</span>
          <textarea
            {...register('description', {
              maxLength: {
                value: 250,
                message: 'Maksimal 250 karakter/huruf.',
              },
            })}
            id="desc"
            placeholder="Terbuat dari kacang pilihan dengan rasa manis yang pas..."
            className={`${
              errors?.description
                ? 'border-pink-500 caret-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                : 'border-slate-300 caret-indigo-500 focus:border-indigo-500 focus:ring-indigo-500'
            } mt-1 block w-full px-3 py-2 resize-none focus:ring-1 bg-white focus:outline-none border rounded-md text-sm shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`}
          />

          <div className="mt-1 flex flex-row-reverse justify-between text-sm font-light">
            <span
              className={`${
                errors?.description ? 'text-pink-600' : 'text-slate-500'
              } text-xs`}
            >
              {watch('description').length}/250
            </span>

            {errors?.description && (
              <span className="text-pink-600">
                {errors?.description?.message}
              </span>
            )}
          </div>
        </label>
      </fieldset>

      {/* // * Price Information */}
      {/* // NOTE: Need to format output */}
      <h4 className="font-semibold pb-2">Harga</h4>

      <fieldset className="px-2 mb-3">
        <label htmlFor="price" className="block font-medium">
          Harga Jual
        </label>

        <div className="mt-1 mb-2 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-slate-600 font-medium">Rp</span>
          </div>

          <input
            {...register('price', {
              required: 'Harga tidak boleh kosong.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Harga yang kamu masukan salah/tidak valid.',
              },
              validate: val =>
                (val > 0 && parseInt(val)) ||
                'Harga yang kamu masukan salah/tidak valid.',
              // valueAsNumber: true,
              // setValueAs: val => (isNaN(val) ? '' : parseInt(val)),
            })}
            inputMode="numeric"
            id="price"
            placeholder="5000"
            className={`${
              errors?.price
                ? 'border-pink-500 caret-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                : 'border-slate-300 caret-indigo-500 focus:border-indigo-500 focus:ring-indigo-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            } mt-1 block w-full pr-3 py-2 pl-10 bg-white focus:outline-none border rounded-md text-sm shadow-sm placeholder-slate-400 focus:ring-1 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
          />
        </div>
        {errors?.price && (
          <span className="block mt-1 text-sm font-light text-pink-600">
            {errors?.price?.message}
          </span>
        )}
      </fieldset>

      {/* // * Menu status */}
      <fieldset className="mb-3 py-4 border-y-2 border-slate-500 flex flex-row justify-between items-center">
        <div className="basis-3/4">
          <h4 className="font-semibold">Aktifkan Menu</h4>
          <p className="text-sm">
            Menu akan muncul dihalaman utama dan bisa dipesan oleh pelanggan
          </p>
        </div>

        <div className="basis-1/4 text-right px-4">
          <div className="relative inline-block w-10 align-middle select-none">
            <input
              type="checkbox"
              {...register('statusMenu')}
              id="statusMenu"
              className="checked:bg-indigo-500 outline-none focus:outline-none right-5 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="statusMenu"
              className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </fieldset>

      <div className="flex flex-row">
        <button
          className="w-full my-2 px-6 py-3 mr-4 bg-white text-gray-600 border border-slate-300 font-medium rounded-md shadow-sm active:opacity-80 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700"
          onClick={onClose}
        >
          Batal
        </button>

        <button
          type="submit"
          className="w-full my-2 px-6 py-3 bg-indigo-500 text-indigo-50 font-medium rounded-md shadow-sm active:bg-indigo-600 hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700 disabled:opacity-75 disabled:shadow-none disabled:cursor-not-allowed disabled:hover:bg-indigo-500 disabled:active:bg-indigo-500"
          disabled={Object.keys(errors).length !== 0}
        >
          {addMenu ? 'Tambah' : 'Ubah'}
        </button>
      </div>
    </form>
  );
};

export default FormMenu;
