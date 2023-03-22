const EduBox = ({ degree, year }) => {
  return (
    <div
      className={`mt-16 p-2 w-1/3 h-auto bg-gradient-to-b from-secondary to-primary  rounded-xl `}
    >
      <div className="p-8 h-full flex flex-col items-center justify-between bg-boxContainer rounded-xl text-text  space-y-10">
        <div className="text-xl text-center">{degree}</div>
        <div className={`text-2xl text-secondary`}>{year}</div>
        <div className="text-2xl text-center">The University of Queensland</div>
      </div>
    </div>
  );
};
export default EduBox;
