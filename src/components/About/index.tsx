import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const About = () => {
  return (
    <div className=" flex justify-center flex-col md:flex-row items-start gap-9">
      <div className="min-w-80 w-full md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center border-solid border-2 border-zinc-800 shadow rounded-xl">
        <img
          className="max-w-52 m-5 w-full object-cover rounded-xl"
          src="https://github.com/Rochx7.png"
          alt="@Rochx7"
        />
        <h1 className="w-full text-center p-1 text-lg font-light italic tracking-tight text-zinc-100 dark:text-white rounded-b-lg shadow bg-zinc-800 dark:bg-zinc-800 dark:border-zinc-800">
          {"Trying to do better :)"}
        </h1>
      </div>
      <div className="w-full md:w-3/6 lg:w-2/6">
        <h3 className="text-lg font-normal text-zinc-100 dark:text-zinc-400">
          {
            "I'm Guilherme H. Rocha, an experienced software developer with almost 3 years of experience. Passionate about good coffee, games, anime, soccer and movies. I'm from Minas Gerais and live in Rio de Janeiro."
          }
        </h3>
      </div>
    </div>
  );
};

export default About;
