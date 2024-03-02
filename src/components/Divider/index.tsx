import { CodeIcon, IdCardIcon, LayersIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";
type SectionHash = {
  [key: string]: {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
  };
};

const Divider = ({ section }: { section: keyof SectionHash }) => {
  const hashIcons: SectionHash = {
    about: {
      title: "ABOUT ME SECTION",
      icon: IdCardIcon,
    },
    skills: {
      title: "ABOUT ME SECTION",
      icon: CodeIcon,
    },
    project: {
      title: "ABOUT ME SECTION",
      icon: LayersIcon,
    },
  };
  const title = hashIcons[section].title;
  const CurrentIcon = hashIcons[section].icon;

  return (
    <div className="flex flex-col items-center mt-24 mb-14 text-zinc-600">
      <CurrentIcon className="w-9 h-9" />
      <h5 className=" text-xl  text-zinc-600">{title}</h5>
    </div>
  );
};

export default Divider;
