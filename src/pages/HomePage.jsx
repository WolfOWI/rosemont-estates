import Navbar from "../components/navigation/Navbar";
import heroImg from "../assets/images/plant-wall-1.jpg";
import SearchBar from "../components/input/SearchBar";

function HomePage() {
  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-[50vh] overflow-hidden relative bg-thorn-M1">
        <img
          src={heroImg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        />
        <Navbar transparent={true} className="relative z-20" />
        <div className="flex flex-col items-center h-[40vh]">
          <h1 className="relative z-10 text-beige-0 mt-16">Discover your dream mansion</h1>
          <p className="relative z-10 text-beige-M3">Find the right luxury home for you.</p>
        </div>
      </div>
      <div className="flex justify-center mt-[-40px] w-full">
        <SearchBar />
      </div>
    </>
  );
}

export default HomePage;
