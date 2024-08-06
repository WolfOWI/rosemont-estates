import Navbar from "../components/navigation/Navbar";
import heroImg from "../assets/images/plant-wall-1.jpg";

function HomePage() {
  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-[40vh] overflow-hidden relative bg-thorn-M1">
        <img
          src={heroImg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        />
        <Navbar transparent={true} className="relative z-20" />
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="relative z-10 text-beige-0 mt-16">Discover your dream mansion</h1>
            <p className="relative z-10 text-beige-M3">
              Search and filter to find the right luxury home for you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
