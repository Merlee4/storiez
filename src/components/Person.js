export default function Person() {
  return (
    <div className="h-20 w-12 flex flex-col items-center p-1 cursor-pointer group relative">
      <div className="relative">
        <img
          src="https://www.itsretunes.com/trinah_files/retunes_Trinah_no_matter.jpg"
          className="rounded-full h-full w-full"
          alt="person"
        />
        <div className="rounded-full w-2/6 h-2/6 absolute bg-green-400 bottom-0 border border-green-900 "></div>
      </div>

      <div>
        <p className="text-white group-hover:text-indigo-900 transition duration-300">
          Tatiana
        </p>
      </div>
    </div>
  );
}
