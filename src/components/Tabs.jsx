import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Tabs = ({ tabCategories, children }) => {
  return (
    <div className="w-full px-2">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2 text-sm leading-5 font-medium text-indigo-600 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            {tabCategories.left}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2 text-sm leading-5 font-medium text-indigo-600 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            {tabCategories.right}
          </Tab>
        </Tab.List>
        <Tab.Panels>{children}</Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
