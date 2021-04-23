import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex ">
        <div className="hidden lg:flex border h-full overflow-y-scroll top-0">
          <SideBar />
        </div>
        <div>
          <div className="text-indigo-900 container mx-auto flex flex-col lg:items-center">
            {/* WELCOME TEXT */}
            <div className="mb-10 p-10 ">
              <h1 className="text-3xl font-bold mb-2">Welcome , Mwelwa!</h1>
              <p className="text-lg opacity-80">
                see what your friends are doing
              </p>
            </div>

            {/* CARDS */}
            <main
              className="flex overflow-x-auto gap-10 no-scrollbar smooth-scroll lg:ml-10"
              style={{ scrollSnapType: "x" }}
            >
              <Card />
            </main>

            <div className="flex lg:hidden">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
