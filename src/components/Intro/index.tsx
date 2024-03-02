import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Cards from "./Cards";

const Intro = () => {
  return (
    <section className="h-full flex flex-col flex-wrap gap-4">
      <div className="w-full flex flex-col lg:flex-row md:flex-nowrap gap-4">
        <h1 className="sm:w-full md:w-full lg:max-w-md text-4xl md:text-6xl font-bold italic tracking-tight text-zinc-100 dark:text-white">
          Where creativity becomes lines of code.
        </h1>
        <Cards />
      </div>
    </section>
  );
};

export default Intro;
