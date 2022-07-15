import { Link } from 'react-router-dom';

const Header = ({ title, path, subTitle, rightBtn }) => {
  return (
    <header className="h-18 sticky top-0 mb-2 bg-slate-50 shadow-sm z-40">
      <div className="h-16 flex flex-row items-center px-3 py-2">
        {/* // * Back Button */}
        <div className="basis-2/8 text-center mx-3">
          <Link to={path} className="text-slate-900">
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </div>
        {/* //* Header Title */}
        <div className="basis-5/8 grow text-slate-900 px-2">
          <h1 className="text-xl font-extrabold">{title}</h1>
          {!null && <h4 className="text-sm font-semibold">{subTitle}</h4>}
        </div>
        {/* //* Right Button [option: add, more, null] */}
        <div className="basis-1/8 text-center mx-3">
          {rightBtn?.type === 'add' && (
            <button onClick={rightBtn?.handler} className="text-slate-900">
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          )}
          {rightBtn?.type === 'more' && (
            <button onClick={rightBtn?.handler} className="text-slate-900">
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
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
