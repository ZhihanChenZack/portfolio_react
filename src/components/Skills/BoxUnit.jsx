const BoxUnit = ({ iconPath, iconName }) => {
  return (
    <div className="w-full mb-12 flex flex-col items-center gap-3 ">
      <img src={iconPath} alt={iconName} className="w-9" />
      <p className="text-center">{iconName}</p>
    </div>
  );
};
export default BoxUnit;
