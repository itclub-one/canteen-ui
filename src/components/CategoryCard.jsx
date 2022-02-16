const CategoryCard = ({ name, quantity }) => {
  return (
    <div className="mx-6 my-4 p-4 flex flex-row flex-wrap justify-between items-center rounded-md border-2 border-gray-900">
      <div className="text-gray-900 font-medium text-lg">{name}</div>
      <div className="flex flex-row items-center">
        <div className="py-1 px-2 bg-gray-300 rounded-md text-sm text-gray-600 font-medium">
          {quantity}
        </div>
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategoryCard;
