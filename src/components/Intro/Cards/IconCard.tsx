import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";
type IconHash = {
  [key: string]: ForwardRefExoticComponent<
    IconProps & RefAttributes<SVGSVGElement>
  >;
};

const IconCard = ({ icon }: { icon: keyof IconHash }) => {
  const hashIcons: IconHash = {
    linkedin: LinkedInLogoIcon,
    github: GitHubLogoIcon,
    discord: DiscordLogoIcon,
    instagram: InstagramLogoIcon,
  };
  const CurrentIcon = hashIcons[icon];

  return (
    <div className="p-3 bg-zinc-900 rounded-xl shadow dark:bg-zinc-700 dark:border-zinc-700 text-zinc-600">
      <CurrentIcon className="w-9 h-9" />
    </div>
  );
};

export default IconCard;
