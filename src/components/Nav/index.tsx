const buttons = [
  'home.',
  'about.',
  'projects.',
  'contact.'
]
const Nav = ()=> {
  return (
    <div className="flex gap-4">
      {buttons.map((button,idx)=>(
        <button key={`${button}-${idx}`} type="button" className="px-4 py-2 text-xs font-semibold text-center 
        text-zinc-100  bg-zinc-800 hover:bg-zinc-700 focus:outline-none 
        focus:ring-4 focus:ring-zinc-300 rounded-lg dark:bg-zinc-900 
        dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700 ease-in duration-150" 
        >
          {button}
        </button>
      ))}
    </div>
  )
}

export default Nav