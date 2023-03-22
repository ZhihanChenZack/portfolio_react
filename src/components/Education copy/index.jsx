import EduBox from "./EduBox";

const Education = () => {
  return (
    <section className="py-16 px-20 flex flex-col justify-center items-center ">
      <h1 className="text-text text-5xl">Education</h1>
      <div className="flex w-full justify-center gap-60">
        <EduBox
          degree={"BACHELOR OF ENGINEERING"}
          year={"2015-2019"}
          color={"tertiary"}
        ></EduBox>
        <EduBox
          degree={"MASTER OF INFORMATION TECHNOLOGY"}
          year={"2020 - 2022"}
          color={"secondary"}
        ></EduBox>
      </div>
    </section>
  );
};
export default Education;
