import { ReactComponent as NetWarn } from '../../assets/img/network-alert.svg';

const NetProblem = ({ error }) => {
  return (
    <div className="text-center m-auto text-gray-900 opacity-80 my-28">
      <NetWarn className="mx-auto text-gray-500" />
      <h5 className="text-lg font-bold pb-1 mt-3">Tidak dapat memuat Data</h5>
      <div className="text-sm font-medium px-10">
        Ada masalah dalam jaringan. Silahkan coba beberapa saat lagi atau{' '}
        <span
          onClick={() => window.location.reload()}
          className="font-medium underline decoration-1 underline-offset-1"
        >
          muat ulang halaman ini.
        </span>
        <p className="text-xs p-1 font-thin italic">(Err: {error.message})</p>
      </div>
    </div>
  );
};

export default NetProblem;
