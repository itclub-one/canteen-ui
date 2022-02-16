const SearchBar = ({ placeholder, handleInput }) => {
  return (
    <div className="text-gray-700 flex justify-center">
      <div className="border rounded-lg overflow-hidden flex mx-3 my-2 outline-none w-4/5 bg-white">
        <button className="flex items-center justify-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <input
          type="text"
          className="px-2 py-2 focus:outline-none focus:border-none text-sm "
          placeholder={placeholder}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default SearchBar;
