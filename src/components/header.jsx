import omeletteImage from "../images/image-omelette.jpeg";

function Header() {
  return (
    <div className="relative">
      {/* Mobile Only Image */}
      <img
        src={omeletteImage}
        alt="Omelette"
        className="w-screen h-[170px] object-cover md:w-full md:h-60 md:rounded-lg md:hidden"
      />

      {/* MD and LG Only Image */}
      <img
        src={omeletteImage}
        alt="Omelette"
        className="hidden md:block w-full h-full object-cover rounded-lg"
      />

      <div className="flex flex-col justify-start w-screen h-full md:w-full md:h-full py-4 px-8 md:py-3 md:px-0.5">
        <h1 className="text-4xl font-semibold mt-4 justify-center leading-snug md:leading-relaxed tracking-normal">
          Simple Omelette Recipe
        </h1>
        <p className="font-light leading-relaxed tracking-normal mt-4">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    </div>
  );
}

export default Header;
