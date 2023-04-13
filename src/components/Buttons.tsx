const Buttons = ({ answers, check }: any) => (
  <div className="flex flex-row items-center justify-center gap-5">
    {answers.map((answer: string) => (
      <div
        onClick={() => {
          check(answer);
        }}
        className="rounded bg-[#31748f] p-3 text-sm font-medium text-[#e0def4] shadow-md shadow-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-[#f6c177] hover:text-[#26233a] hover:shadow-lg hover:shadow-black"
      >
        {answer}
      </div>
    ))}
  </div>
);

export default Buttons;
