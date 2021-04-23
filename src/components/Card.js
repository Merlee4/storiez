export default function Card() {
  const Owner = () => {
    return (
      <div className="flex">
        <div className="h-12 w-12 flex items-ceneter p-1">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/81B5c6m0jaL._SS500_.jpg"
              className="rounded-full h-full w-full"
              alt="person"
            />
            <div className="rounded-full w-2/6 h-2/6 absolute bg-green-400 bottom-0 border border-green-900 "></div>
          </div>
        </div>
        <div>
          <p className=" text-black">Riley VKACJ</p>
          <p className="text-sm">Active Now</p>
        </div>
      </div>
    );
  };
  return (
    <div className="py-2 ml-2 h-full w-full">
      <div className="relative h-3/6 w-96 lg:w-3/6 lg:h-3/6 cursor-pointer bg-white  ">
        <Owner />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdac0Z3-RPtZLTjHJH49GRB5yx1lJkrfUz4w&usqp=CAU"
          alt="profile"
          className="object-cover w-screen h-full"
        />
        <div className="absolute -bottom-1 -left-1 right-0 bg-white p-2">
          <p className="text-sm truncate w-28">Add your text</p>
        </div>
      </div>
    </div>
  );
}
