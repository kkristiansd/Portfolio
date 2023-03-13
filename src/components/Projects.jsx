import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex space-x-32 h-96">
      <div class="h-80 w-80 relative cursor-pointer ">
        <div class="absolute inset-0 bg-white opacity-75 rounded-lg shadow-2xl">
          <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
            <div class="h-full w-full bg-black rounded-lg shadow-2xl">
              <Image
                src="/../public/assets/myAvatar (1).png"
                alt="/"
                width="400"
                height="30"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="h-80 w-80 relative cursor-pointer">
        <div class="absolute inset-0 bg-white opacity-75 rounded-lg shadow-2xl">
          <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
            <div class="h-full w-full bg-black rounded-lg shadow-2xl">
              <Image
                src="/../public/assets/myAvatar (1).png"
                alt="/"
                width="400"
                height="30"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="h-80 w-80 relative cursor-pointer">
        <div class="absolute inset-0 bg-white opacity-75 rounded-lg shadow-2xl">
          <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
            <div class="h-full w-full bg-black rounded-lg shadow-2xl">
              <Image
                src="/../public/assets/myAvatar (1).png"
                alt="/"
                width="400"
                height="30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
