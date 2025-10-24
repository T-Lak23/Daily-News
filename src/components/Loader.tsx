import { LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="bg-main dark:bg-dark-main w-screen pt-5 flex justify-center items-center">
      <LoaderIcon className="animate-spin w-6 h-6 text-gray-500" />
    </div>
  );
};

export default Loader;
