import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Cards from "./Cards";

const Intro = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full max-h-72 flex flex-col lg:flex-row gap-4">
        <h1 className="sm:w-full md:w-full lg:max-w-md text-4xl md:text-6xl font-bold italic tracking-tight text-zinc-100 dark:text-white">
          Where creativity becomes lines of code.
        </h1>
        <Cards />
      </div>

      {/* Buttons */}
      {/* <div className="flex gap-4">
        <button
          type="button"
          className="text-white bg-zinc-900 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm p-5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
        >
          <Image
            src="/svgs/linkedin.svg"
            alt="Vercel Logo"
            width={32}
            height={32}
            priority
          />
          <span className="sr-only">Icon description</span>
        </button>
      </div> */}
    </section>
  );
};

export default Intro;
