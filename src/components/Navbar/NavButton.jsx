const NavButton = ({ content }) => {
  return (
    <button className="px-5 py-8 border-b-black border-b-4 hover:border-b-green-400 hover:border-b-4">
      {content}
    </button>
  );
};
export default NavButton;
