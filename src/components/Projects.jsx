import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-100">
        <h2 className="text-5xl font-bold text-center mb-8">Projects</h2>
        <div className="flex space-x-32 p-6">
          <div className="h-80 w-80 relative cursor-pointer">
            <div className="absolute inset-0 bg-[#9d74c4] opacity-75 rounded-lg shadow-2xl shadow-purple-800">
              <div className="absolute inset-0 transform hover:scale-75 transition duration-300">
                <div className="h-full w-full shadow-2xl">
                  <Image
                    src="/../public/assets/projectChess.png"
                    alt="/"
                    width="400"
                    height="30"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-80 relative cursor-pointer ">
            <div className="absolute inset-0 bg-[#9d74c4] opacity-75 rounded-lg shadow-2xl shadow-purple-800">
              <div className="absolute inset-0 transform hover:scale-75 transition duration-300 ">
                <div className="h-full w-full ">
                  <Image
                    src="/../public/assets/projectPortfolio.png"
                    alt="/"
                    width="400"
                    height="30"
                
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-80 relative cursor-pointer">
            <div className="absolute inset-0 bg-[#9d74c4] opacity-75 rounded-lg shadow-2xl shadow-purple-800">
              <div className="absolute inset-0 transform hover:scale-75 transition duration-300">
                <div className="h-full w-full ">
                  <Image
                    src="/../public/assets/commingSoon.png"
                    alt="/"
                    width="400"
                    height="30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
