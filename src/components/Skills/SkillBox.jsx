import BoxUnit from "./BoxUnit";
import javascript from "../../assets/pngIcons/javascriptPNG.png";
import typescript from "../../assets/pngIcons/typescriptPNG.png";
import reactJS from "../../assets/pngIcons/reactPNG.png";
import nextJS from "../../assets/pngIcons/nextPNG.png";

const SkillBox = ({ skillType }) => {
  return (
    <div
      className={`mt-16 p-2 h-auto bg-boxContainer text-text  rounded-sm shadow-skillBoxShadow`}
    >
      <div className="mt-7 flex flex-col items-center justify-center">
        <h2>{skillType}</h2>
        <div className="px-7 py-9 grid grid-cols-2 gap-2">
          <BoxUnit
            iconPath={javascript}
            iconName={"HTML CSS Javascript"}
          ></BoxUnit>
          <BoxUnit iconPath={typescript} iconName={"Typescript"}></BoxUnit>
          <BoxUnit iconPath={reactJS} iconName={"react"}></BoxUnit>
          <BoxUnit iconPath={nextJS} iconName={"next.js"}></BoxUnit>
        </div>
      </div>
    </div>
  );
};
export default SkillBox;
