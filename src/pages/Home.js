import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EmptyCard from "../components/EmptyCard";
import SideBar from "../components/SideBar";
import loading from "../images/loading.gif";

export default function Home() {
  return (
    <div className="h-screen mx-auto">
      <div>
        <NavBar />
      </div>
      <div className="flex ">
        <div className="hidden lg:flex border-r h-full overflow-y-scroll top-0 no-scrollbar">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="text-indigo-900 container mx-auto flex flex-col lg:items-center">
            {/* WELCOME TEXT */}

            <div className="mb-10 p-10 lg:hidden">
              <h1 className="text-3xl font-bold mb-2">Welcome , Mwelwa!</h1>
              <p className="text-lg opacity-80">
                see what your friends are doing
              </p>
            </div>
            <div className="flex lg:hidden">
              <Footer />
            </div>

            {/* CARDS */}
            <main
              className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 no-scrollbar smooth-scroll lg:ml-10 "
              style={{ scrollSnapType: "x" }}
            >
              <EmptyCard src="https://media-exp1.licdn.com/dms/image/C4D03AQFAKUjQ8zIsFA/profile-displayphoto-shrink_200_200/0/1611671601557?e=1622073600&v=beta&t=XZWn5RALkSWOjbCVROOa7OobGY4ouLjPnYs1gy5NTZ4" />

              <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTH3PMvlD5Bg-qBBtDHYVIxwFO0aw0kUzh6K6QdTAUeFu2d3B2VF5NRs8xerKrmvJmSw&usqp=CAU" />
              <Card src="https://i.redd.it/e0vc7k10vma51.jpg" />
              <Card src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FRileyReid%2Fcomments%2Fhqg0mp%2Fdesirable_ass%2F&psig=AOvVaw3VURPj19kOnHaQyf5M3RTH&ust=1619270176170000&source=images&cd=vfe&ved=2ahUKEwiM_7fOuZTwAhUG2-AKHU0XD2YQjRx6BAgAEAc" />
              <Card src="https://cdncontent.xxxwaffle.com/gthumb/2/676/2676426_0c57400_300x_.jpg" />
              <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhyz9zkgaL1uVzZebFgycx_kF5jslPvkpHA&usqp=CAU" />
              <Card src="https://i.pinimg.com/736x/3e/8d/48/3e8d48c13cdeb3b2f2ecb5e6f75c22de.jpg" />

              <img src={loading} alt="loader" className="select-none" />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
