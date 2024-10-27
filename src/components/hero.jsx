function Hero() {
    return (
      <div className="relative">
        <div className="flex flex-col items-start justify-start mt-4 w-[305px] h-[189px] md:w-[646px] md:h-[182px] bg-[#fff7fc] rounded-lg mx-auto">
          <h3 className="pt-4 px-5 justify-start text-rose-800 font-semibold">
            Preparation time
          </h3>
  
          <ul className="flex flex-col space-y-5 mt-3 md:mt-3.5 px-8">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-rose-800 rounded-full"></span>
              <span>
                <span className="font-bold leading-normal tracking-wide p-0.5">
                  Total:
                </span>{" "}
                Approximately 10 minutes
              </span>
            </li>
          </ul>
  
          <ul className="flex flex-col space-y-2 mt-2 px-8">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-rose-800 rounded-full"></span>
              <span>
                <span className="font-bold leading-normal tracking-wide p-0.5">
                  Preparation:
                </span>{" "}
                5 minutes
              </span>
            </li>
          </ul>
  
          <ul className="flex flex-col space-y-2 mt-2 px-8">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-rose-800 rounded-full"></span>
              <span>
                <span className="font-bold leading-normal tracking-wide p-0.5">
                  Cooking:
                </span>{" "}
                5 minutes
              </span>
            </li>
          </ul>
        </div>
  
        <div className="flex flex-col items-start justify-start mt-3 px-8 md:px-0">
          <h1 className="text-3xl font-normal mt-2 justify-center leading-snug md:leading-relaxed tracking-normal text-brown-800">
            Ingredients
          </h1>
  
          <ul className="flex flex-col space-y-3 mt-5">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-brown-800 rounded-full"></span>
              <span>
                <span className="leading-normal tracking-wide p-0.5">
                  2-3 large eggs
                </span>
              </span>
            </li>
          </ul>
  
          <ul className="flex flex-col space-y-2 mt-5">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-brown-800 rounded-full"></span>
              <span>
                <span className="leading-normal tracking-wide p-0.5">
                  Salt, to taste
                </span>
              </span>
            </li>
          </ul>
  
          <ul className="flex flex-col space-y-2 mt-5">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-brown-800 rounded-full"></span>
              <span>
                <span className="leading-normal tracking-wide p-0.5">
                  Pepper, to taste
                </span>
              </span>
            </li>
          </ul>
  
          <ul className="flex flex-col space-y-2 mt-5">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-brown-800 rounded-full"></span>
              <span>
                <span className="leading-normal tracking-wide p-0.5">
                  1 tablespoon of butter or oil
                </span>
              </span>
            </li>
          </ul>
  
          <ul className="flex flex-col space-y-2 mt-5">
            <li className="flex items-center space-x-5">
              <span className="w-1.5 h-1.5  bg-brown-800 rounded-full"></span>
              <span>
                <span className="leading-normal tracking-wide p-/5">
                  Optional fillings: cheese, diced vegetables, cooked meats, herbs
                </span>
              </span>
            </li>
          </ul>
  
          <hr className="w-full my-10 border-b-3.5 border-[#e0e0e0] md:block" />
  
          {/* INSTRUCTIONS */}
  
          <div className="flex flex-col items-start justify-start mt-0 px-0 md:px-0">
            <h1 className="text-3xl font-normal mt-0 justify-center leading-snug md:leading-relaxed tracking-normal text-brown-800">
              Instructions
            </h1>
  
            <ul className="flex flex-col space-y-3 mt-5">
              <li className="flex items-center space-x-5">
                <span className=" text-brown-800">1.</span>
                <span>
                  <span className="leading-normal tracking-wide p-0.5 font-bold">
                    Beat the eggs:
                  </span>{" "}
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </li>
            </ul>
  
            <ul className="flex flex-col space-y-3 mt-5">
              <li className="flex items-center space-x-5">
                <span className=" text-brown-800">2.</span>
                <span>
                  <span className="leading-normal tracking-wide p-0.5 font-bold">
                    Heat the pan:
                  </span>{" "}
                  Place a non-stick frying pan over medium heat and add butter or
                  oil.
                </span>
              </li>
            </ul>
  
            <ul className="flex flex-col space-y-3 mt-5">
              <li className="flex items-center space-x-5">
                <span className=" text-brown-800">3.</span>
                <span>
                  <span className="leading-normal tracking-wide p-0.5 font-bold">
                    Cook the omelette:
                  </span>{" "}
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>
              </li>
            </ul>
  
            <ul className="flex flex-col space-y-3 mt-5">
              <li className="flex items-center space-x-5">
                <span className=" text-brown-800">4.</span>
                <span>
                  <span className="leading-normal tracking-wide p-0.5 font-bold">
                    Add fillings (optional):
                  </span>{" "}
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one half
                  of the omelette.
                </span>
              </li>
            </ul>
  
            <ul className="flex flex-col space-y-3 mt-5">
              <li className="flex items-center space-x-5">
                <span className=" text-brown-800">5.</span>
                <span>
                  <span className="leading-normal tracking-wide p-0.5 font-bold">
                    Fold and Serve:
                  </span>{" "}
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute, then
                  slide it onto a plate.
                </span>
              </li>
            </ul>
  
            <ul className="flex flex-col space-y-3 mt-5">
              <li className="flex items-center space-x-5">
                <span className=" text-brown-800">6.</span>
                <span>
                  <span className="leading-normal tracking-wide p-0.5 font-bold">
                    Enjoy:
                  </span>{" "}
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ul>
  
            <hr className="w-full my-10 border-b-3.5 border-[#e0e0e0] md:block" />
          </div>
  
          
  
  
          {/* NUTRITION SECTION */}
  
          <div className="flex flex-col items-start justify-start mt-0 px-0 md:px-0">
            <h1 className="text-3xl font-normal mt-0 justify-center leading-snug md:leading-relaxed tracking-normal text-brown-800">
              Nutrition
            </h1>
            <p className="font-normal mt-4 justify-center leading-snug p-0.5 md:p-0.5 md:leading-relaxed tracking-normal">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
  
            <div className="items-start justify-center grid grid-cols-2 gap-6 mt-6 px-7">
              <div className="flex px-4 font-normal">Calories</div>
              <span className="font-bold text-brown-800">277 kcal</span>
              <hr className="w-[310px] md:w-[640px] -ml-7 col-span-2 border-b-3.5 border-[#e0e0e0]" />
  
              <div className="flex px-4 font-normal">Carbs</div>
              <span className="font-bold text-brown-800">0g</span>
              <hr className="w-[310px] md:w-[640px] -ml-7 col-span-2 border-b-3.5 border-[#e0e0e0]" />
  
              <div className="flex px-4 font-normal">Protein</div>
              <span className="font-bold text-brown-800">20g</span>
              <hr className="w-[310px] md:w-[640px] -ml-7 col-span-2 border-b-3.5 border-[#e0e0e0]" />
  
              <div className="flex px-4 font-normal">Fat</div>
              <span className="font-bold  text-brown-800">22g</span>
              <hr className="w-[310px] md:w-[640px] -ml-7 col-span-2 border-b-3.5 border-[#e0e0e0]" />
  
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  