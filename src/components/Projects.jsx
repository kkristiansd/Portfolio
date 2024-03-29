import Image from "next/image";
import commingsoon from "/public/assets/projects/commingSoon.png"
import chess from "/public/assets/projects/projectChess.png"
import portfolio from "/public/assets/projects/projectPortfolio.png"


const Projects = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-100 " >
        <h2 className="text-5xl font-bold text-center mb-8">Projects</h2>
        <div className="flex space-x-36 p-12">
          <div className="h-60 w-60 relative cursor-pointer">
            <div className="absolute inset-0 bg-[#9d74c4] opacity-75 rounded-lg shadow-2xl shadow-purple-800">
              <div className="absolute inset-0 transform hover:scale-75 transition duration-300">
                <div className="h-full w-full shadow-2xl">
                  <Image
                    src={chess}
                    alt="/"
                    width="400"
                    height="30"
                  />
                </div>
                <a
                  href="https://github.com/kkristiansd/Chess"
                  className="absolute bottom-4  text-white bg-[#390847] hover:[#9d74c4] focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5  mx-26  dark:bg-[#390847] dark:hover:bg-[#9d74c4] focus:outline-none  "
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>

          <div className="h-60 w-60 relative cursor-pointer ">
            <div className="absolute inset-0 bg-[#9d74c4] opacity-75 rounded-lg shadow-2xl shadow-purple-800">
              <div className="absolute inset-0 transform hover:scale-75 transition duration-300 ">
                <div className="h-full w-full ">
                  <Image
                    src={portfolio}
                    alt="/"
                    width="400"
                    height="30"
                  />
                </div>
                <a
                  href="https://github.com/kkristiansd/Portfolio"
                  className="absolute bottom-4  text-white bg-[#390847] hover:[#9d74c4] focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5  mx-26  dark:bg-[#390847] dark:hover:bg-[#9d74c4] focus:outline-none  "
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
          <div className="h-60 w-60 relative cursor-pointer">
            <div className="absolute inset-0 bg-[#9d74c4] opacity-75 rounded-lg shadow-2xl shadow-purple-800">
              <div className="absolute inset-0 transform hover:scale-75 transition duration-300">
                <div className="h-full w-full ">
                  <Image
                    src={commingsoon}
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
