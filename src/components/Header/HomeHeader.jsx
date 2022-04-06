import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      fill="#F3F4F6"
      viewBox="0 0 24 24"
      stroke="#111827"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      fill="#818cf8"
      viewBox="0 0 24 24"
      stroke="#e0e7ff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}

function MyLink({ href, children, ...rest }) {
  return (
    <Link to={href}>
      <p {...rest}>{children}</p>
    </Link>
  );
}

const HomeHeader = ({ menuItems, cart }) => {
  return (
    <header className="h-18 sticky top-0 mb-2 bg-slate-50 shadow-sm z-40">
      <div className="h-16 flex flex-row-reverse items-center px-3">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-2 top-12 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {menuItems?.map(menu => (
                  <Menu.Item key={menu.id}>
                    {({ active }) => (
                      <MyLink
                        href={menu.path}
                        className={`${
                          active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm active:bg-indigo-500 active:text-white`}
                      >
                        {menu.name}
                      </MyLink>
                    )}
                  </Menu.Item>
                ))}
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <MyLink
                      href="/"
                      className={`${
                        active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm active:bg-indigo-500 active:text-white`}
                    >
                      {active ? (
                        <DeleteActiveIcon
                          className="w-5 h-5 mr-2 text-indigo-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <DeleteInactiveIcon
                          className="w-5 h-5 mr-2 text-indigo-400"
                          aria-hidden="true"
                        />
                      )}
                      Keluar
                    </MyLink>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {cart && (
          <div className="relative text-white">
            <Link to={cart.path}>
              {cart.length >= 1 && (
                <span
                  className="w-4 h-4 rounded-full absolute left-4 bottom-4 text-center leading-4 bg-red-600"
                  style={{ fontSize: '0.6rem' }}
                >
                  {cart.length <= 9 ? cart.length : '9+'}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-900 active:bg-indigo-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
