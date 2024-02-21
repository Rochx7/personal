import { league_spartan } from "@/utils/fonts";

const Logo = () => {
  return (
    <strong className={`text-3xl ${league_spartan.className}`}>
      G<span className="text-green-500">.</span>
    </strong>
  );
};

export default Logo;
