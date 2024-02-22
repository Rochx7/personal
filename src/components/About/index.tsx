import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const About = () => {
  return (
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
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
};

export default About;
