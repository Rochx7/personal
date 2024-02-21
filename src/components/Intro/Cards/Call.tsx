import { MapPinIcon } from "@heroicons/react/24/solid";
const Call = () => {
  return (
    <div className="max-h-64 min-h-24 min-w-64  flex flex-col gap-7 justify-around items-center p-6 bg-zinc-900  rounded-xl shadow dark:bg-zinc-700 dark:border-zinc-700">
      <MapPinIcon className="min-h-12 w-14 text-zinc-600" />
      <h1 className="text-3xl text-center font-bold tracking-tight text-zinc-100 dark:text-white">
        {"Let's work together ?"}
      </h1>

      <button
        type="button"
        className="px-5 py-2 text-md font-semibold text-center
        text-zinc-100  bg-green-500 hover:bg-green-700 rounded-xl dark:bg-green-500 
        dark:hover:bg-green-700  dark:border-green-800 ease-in duration-150"
      >
        Send me a message
      </button>
    </div>
  );
};

export default Call;
