export default function Person() {
  return (
    <div className="h-12 w-12 flex flex-col items-ceneter p-1 cursor-pointer">
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/I/81B5c6m0jaL._SS500_.jpg"
          className="rounded-full h-full w-full"
          alt="person"
        />
        <div className="rounded-full w-2/6 h-2/6 absolute bg-green-400 bottom-0 border border-green-900 "></div>
      </div>
      <p className="tes">Tatiana</p>
    </div>
  );
}
