import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Call from "./Cards/Call";
const Intro = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="max-w-lg p-6 bg-zinc-900  rounded-xl shadow dark:bg-zinc-700 dark:border-zinc-700">
          <div>
            <Avatar className="min-w-32  min-h-32 mb-4">
              <AvatarImage src="https://github.com/Rochx7.png" alt="@Rochx7" />
              <AvatarFallback className="bg-zinc-600">
                <strong>GR</strong>
              </AvatarFallback>
            </Avatar>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-zinc-100 dark:text-white">
              Hello, my name is Guilherme H. Rocha
            </h1>
          </div>

          <p className="mb-3 font-normal text-zinc-100 dark:text-zinc-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <Call />
        <Call />
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
