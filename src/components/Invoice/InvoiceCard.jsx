const InvoiceCard = ({ title, subTitle, statusHeader, body, footer }) => {
  return (
    <div className="h-40 mx-6 my-3 py-1 px-2 bg-white rounded-lg border border-gray-200 shadow-md text-gray-900">
      {/* // * Header Invoice, option: [success, pending, canceled, null] */}
      <div className="border-b-2 flex flex-row wrap justify-between items-center">
        <div>
          <h4 className="text-sm font-bold">{title}</h4>
          <h5 className="text-xs font-medium">{subTitle}</h5>
        </div>
        <div>
          {statusHeader === 'canceled' && (
            <span className="px-2 py-1 text-xs rounded-full text-red-600 bg-red-200">
              Dibatalkan
            </span>
          )}
          {statusHeader === 'pending' && (
            <span className="px-2 py-1 text-xs rounded-full text-yellow-600 bg-yellow-200">
              Diproses
            </span>
          )}
          {statusHeader === 'success' && (
            <span className="px-2 py-1 text-xs rounded-full text-green-600 bg-green-200">
              Berhasil
            </span>
          )}
        </div>
      </div>
      {/* // * Body Invoice */}
      <div className="text-xs h-20 pt-1 px-3">
        {/* // Example for Body content
        <ul>
          <li>Baso Tahu</li>
          <li>Batagor</li>
          <li>Air mineral 600ml</li>
          <li>Jus Jambu</li>
        </ul> */}
        {body}
      </div>
      {/* // * Footer Invoice */}
      <div className="text-xs flex flex-row-reverse wrap justify-between items-center">
        {/* // Example for footer content
        <div>
        <button className="mx-2 border bg-indigo-200 text-indigo-700 rounded-md py-1 px-5">
        Lihat Detail
        </button>
          <button className="border bg-indigo-200 text-indigo-700 rounded-md py-1 px-6">
            Lacak
          </button>
          </div>
        <div className="flex flex-col">
          <p className="font-light">Total</p>
          <p className="font-medium">20.000</p>
        </div> */}
        {footer}
      </div>
    </div>
  );
};

export default InvoiceCard;
