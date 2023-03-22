import SkillBox from "./SkillBox";

const Skills = () => {
  return (
    <section className="py-16 px-20 flex flex-col justify-center items-center ">
      <h1 className="text-text text-5xl">Skills</h1>
      <div className="flex w-full justify-center gap-12">
        <SkillBox skillType={"Front-end"}></SkillBox>
        <SkillBox skillType={"Back-end"}></SkillBox>
        <SkillBox skillType={"Other"}></SkillBox>
      </div>
    </section>
  );
};
export default Skills;
