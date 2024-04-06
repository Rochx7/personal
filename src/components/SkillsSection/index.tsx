import IconJavascript from "../../../public/svgs/IconJavascript";
import IconNextjs from "../../../public/svgs/IconNextjs";
import IconNode from "../../../public/svgs/IconNode";
import IconPgsql from "../../../public/svgs/IconPgsql";
import IconReact from "../../../public/svgs/IconReact";
import IconSequelize from "../../../public/svgs/IconSequelize";

import IconTailwind from "../../../public/svgs/IconTailwind";
import IconTypescript from "../../../public/svgs/IconTypescript";
import IconVue from "../../../public/svgs/IconVue";
import IconCard from "../Intro/Cards/IconCard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const svgStyles = {
  height: "42px",
  width: "42px",
};

const listSvgs = {
  javascript: () => <IconJavascript {...svgStyles} />,
  typescript: () => <IconTypescript {...svgStyles} />,
  react: () => <IconReact {...svgStyles} />,
  next: () => <IconNextjs {...svgStyles} />,
  vue: () => <IconVue {...svgStyles} />,
  node: () => <IconNode {...svgStyles} />,
  tailwind: () => <IconTailwind {...svgStyles} />,
  postgress: () => <IconPgsql {...svgStyles} />,
  sequelize: () => <IconSequelize {...svgStyles} />,
};

const SkillsSection = () => {
  return (
    <div className="flex justify-center items-start gap-9">
      <div className="md:w-4/6 flex flex-col items-center justify-center border-solid border-2 border-zinc-800 shadow rounded-xl">
        <div className="flex justify-between gap-4 p-8">
          {Object.values(listSvgs).map((icon, index) => (
            <div
              key={`icon-${index}`}
              className="p-3 bg-zinc-900 rounded-xl shadow dark:bg-zinc-700 dark:border-zinc-700 text-zinc-600"
            >
              {icon()}
            </div>
          ))}
        </div>
        <h1 className="w-full text-center p-1 text-lg font-light italic tracking-tight text-zinc-100 dark:text-white rounded-b-lg shadow bg-zinc-800 dark:bg-zinc-800 dark:border-zinc-800">
          {"Languages, frameworks and tools"}
        </h1>
      </div>
    </div>
  );
};

export default SkillsSection;
