import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const filters = [
  {
    name: 'Semua',
  },
  {
    name: 'Belum Dibayar',
  },
  {
    name: 'Selesai',
  },
  {
    name: 'Hari ini',
  },
];
const Filter = () => {
  const [selected, setSelected] = useState(filters[0]);

  return (
    <div className="mx-2 my-4">
      {/* <div className="border rounded-lg border-sky-400 text-gray-700 px-3 py-1 m-1 hover:bg-sky-300 hover:text-gray-700">
        Toko
      </div>
      <div className="border rounded-lg border-sky-400 text-gray-700 px-3 py-1 m-1 hover:bg-sky-300 hover:text-gray-700">
        Kategori
      </div>
      <div className="border rounded-lg border-sky-400 text-gray-700 px-3 py-1 m-1 hover:bg-sky-300 hover:text-gray-700">
        Termurah
      </div>
      <div className="border rounded-lg border-sky-400 text-gray-700 px-3 py-1 m-1 hover:bg-sky-300 hover:text-gray-700">
        Termahal
      </div> */}
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Filter</RadioGroup.Label>
        <div className="flex flex-row flex-nowrap items-center scrollbar-hide overflow-x-scroll touch-pan-x snap-x">
          {filters.map(filter => (
            <RadioGroup.Option
              key={filter.name}
              value={filter}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-2 ring-offset-2 ring-offset-indigo-300 ring-white ring-opacity-60'
                    : ''
                }
                  ${
                    checked
                      ? 'bg-indigo-700 bg-opacity-75 text-white'
                      : 'bg-slate-100'
                  }
                    snap-end rounded-lg shadow-sm mx-2 px-2 py-1 cursor-pointer flex focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex items-center text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={`font-medium  ${
                        checked ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {filter.name}
                    </RadioGroup.Label>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default Filter;
