import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="flex mx-6 mt-12">
      <svg
        width="72"
        height="73"
        viewBox="0 0 72 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="16.7376"
          y="16.9423"
          width="38.873"
          height="39.4685"
          stroke="white"
          stroke-width="4"
        />
        <rect
          width="20.2368"
          height="20.2368"
          transform="matrix(0.702213 0.711966 -0.702213 0.711966 36.1741 22.2686)"
          fill="white"
        />
        <rect
          x="2.80885"
          width="47.2665"
          height="47.2665"
          transform="matrix(0.702213 -0.711966 0.702213 0.711966 0.836439 38.4998)"
          stroke="white"
          stroke-width="4"
        />
      </svg>
      <nav className="flex gap-2 ml-9 text-white text-xl font-normal font-inter">
        <NavButton content={"About"}></NavButton>
        <NavButton content={"Education"}></NavButton>
        <NavButton content={"Skill"}></NavButton>
        <NavButton content={"Experience"}></NavButton>
        <NavButton content={"Contact"}></NavButton>
      </nav>
    </div>
  );
};
export default Navbar;
