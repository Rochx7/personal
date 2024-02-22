const StretchedCard = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="max-w-full p-4 bg-zinc-900 rounded-xl shadow dark:bg-zinc-700 dark:border-zinc-700">
      <h5 className=" text-xl font-bold text-zinc-600">{title}</h5>
      <p className=" text-xl font-semibold text-zinc-100">{body}</p>
    </div>
  );
};

export default StretchedCard;
