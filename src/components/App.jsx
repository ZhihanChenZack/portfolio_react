import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";

function App() {
  return (
    <main className="bg-black overflow-auto h-screen">
      <section className="w-5/6 relative m-auto h-full">
        <Navbar></Navbar>
        <About></About>
        <Education></Education>
        <Skills></Skills>
      </section>
    </main>
  );
}

export default App;
