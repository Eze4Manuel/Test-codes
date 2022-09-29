import Loader from '../Loader';

const FullPageLoader = () => {
  return (
    <div className="fixed top-0 left-0 grid h-screen w-screen place-items-center bg-black/60">
      <Loader />
    </div>
  );
};

export default FullPageLoader;
