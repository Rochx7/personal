"use client";

import {
  IconExpo,
  IconFigma,
  IconFireBase,
  IconGit,
  IconGitLab,
  IconJavascript,
  IconNextjs,
  IconNode,
  IconPgsql,
  IconPrisma,
  IconReact,
  IconRedux,
  IconSass,
  IconSequelize,
  IconStoryBook,
} from "../../../public/svgs";
import IconTailwind from "../../../public/svgs/IconTailwind";
import IconTypescript from "../../../public/svgs/IconTypescript";
import IconVue from "../../../public/svgs/IconVue";
import { CarouselIcons } from "./CarouselIcons";

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
  expo: () => <IconExpo {...svgStyles} />,
  redux: () => <IconRedux {...svgStyles} />,
  tailwind: () => <IconTailwind {...svgStyles} />,
  sass: () => <IconSass {...svgStyles} />,
  storyBook: () => <IconStoryBook {...svgStyles} />,
  git: () => <IconGit {...svgStyles} />,
  gitLab: () => <IconGitLab {...svgStyles} />,
  figma: () => <IconFigma {...svgStyles} />,
  fireBase: () => <IconFireBase {...svgStyles} />,
  prisma: () => <IconPrisma {...svgStyles} />,
  sequelize: () => <IconSequelize {...svgStyles} />,
  postgress: () => <IconPgsql {...svgStyles} />,
};

const SkillsSection = () => {
  return (
    <div className="flex justify-center items-start gap-9">
      <div className="md:w-4/6 flex flex-col items-center justify-center border-solid border-2 border-zinc-800 shadow rounded-xl overflow-hidden">
        <CarouselIcons content={Object.values(listSvgs)} />
        <h1 className="w-full text-center p-1 text-lg font-light italic tracking-tight text-zinc-100 dark:text-white rounded-b-lg shadow bg-zinc-800 dark:bg-zinc-800 dark:border-zinc-800">
          {"Languages, frameworks and tools"}
        </h1>
      </div>
    </div>
  );
};

export default SkillsSection;
