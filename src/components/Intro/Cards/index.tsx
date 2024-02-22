import Call from "./Call";
import IconCard from "./IconCard";
import StretchedCard from "./StretchedCard";

const icons = ["linkedin", "github", "discord", "instagram"];

const Cards = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
      <div className="w-full flex flex-col gap-4">
        <StretchedCard title="Title" body="Software developer" />
        <div className="flex justify-between gap-4">
          {icons.map((icon, idx) => (
            <IconCard key={`${icon}-${idx}`} icon={icon} />
          ))}
        </div>
        <StretchedCard title="Made in" body="B. horizonte - MG/BR" />
      </div>
      <Call />
    </div>
  );
};

export default Cards;
