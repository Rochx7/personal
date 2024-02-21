const buttons = ["Home.", "About.", "Projects.", "Contact."];
const Nav = () => {
  return (
    <div className="flex gap-4">
      {buttons.map((button, idx) => (
        <button
          key={`${button}-${idx}`}
          type="button"
          className="px-4 py-2 text-sm font-semibold text-center 
        text-zinc-100  bg-zinc-900 hover:bg-zinc-800 focus:outline-none 
        focus:ring-4 focus:ring-zinc-300 rounded-xl dark:bg-zinc-900 
        dark:hover:bg-zinc-800 dark:focus:ring-zinc-800 dark:border-zinc-800 ease-in duration-150"
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Nav;
