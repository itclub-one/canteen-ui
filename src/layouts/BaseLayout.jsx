const BaseLayout = ({ children }) => {
  return (
    <div className="max-w-md min-h-screen my-0 m-auto pb-5 bg-slate-50">
      {children}
    </div>
  );
};

export default BaseLayout;
