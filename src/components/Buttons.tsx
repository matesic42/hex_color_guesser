const Buttons = ({ answers, check }: any) => (
  <div className="flex flex-row items-center justify-center gap-5">
    {answers.map((answer: string,id:string) => (
      <div
        key={id}
        onClick={() => {
          check(answer);
        }}
        className="rounded bg-[#31748f] p-3 text-sm font-medium text-[#e0def4] shadow-md shadow-black lg:transition lg:delay-150 lg:duration-300 lg:ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:cursor-pointer lg:hover:bg-[#f6c177] lg:hover:text-[#26233a] lg:hover:shadow-lg lg:hover:shadow-black"
      >
        {answer}
      </div>
    ))}
  </div>
);

export default Buttons;
