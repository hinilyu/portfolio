import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Recreation Toronto",
      url: "https://recreation-toronto.vercel.app/",
      desc: "Explore Toronto's recreation program with email reminders on registration",
    },
  ];
  return (
    <div className="mt-10">
      {/* Rec To */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-400 p-5 rounded-md">
        <div className="sm:col-span-1 flex justify-center px-8 py-3">
          <Link href={"/projects/recreation-toronto"}>
            <Image src={"/images/recreation-toronto-1.png"} width={305} height={318} className="hover:scale-125 transition duration-500"></Image>
          </Link>
        </div>
        <div className="md:col-span-2 px-5 md:px-8">
          <div>
            <Link href={"/projects/recreation-toronto"}>
              <button className="hover:underline mt-7 text-xl md:text-2xl font-bold ">Recreation Toronto</button>
            </Link>
            <h2 className="mt-1 text-base">Explore Toronto's recreation program with email reminders on registration.</h2>
          </div>

          <div className="my-5 text-xs font-medium opacity-70 select-none">
            <span className="mr-2 mb-2 px-2 py-1 text-white bg-cyan-500">React</span>
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-teal-500">JavaScript</span>
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-amber-500">NextJS</span>
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-blue-500">Python</span>
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-green-500">MongoDB</span>
          </div>
          <div className="mt-8 sm:mt-10 flex justify-center md:justify-start mb-5">
            <Link href={"/projects/recreation-toronto"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Learn More
              </button>
            </Link>
            <Link href={"https://github.com/hinilyu/recreation-toronto"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Github
              </button>
            </Link>
            <Link href={"https://recreation-toronto.vercel.app/"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Live Project
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Fridge Processor */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-400 p-5 rounded-md mt-10">
        <div className="sm:col-span-1 flex justify-center px-8 py-3">
          <Link href={"/projects/fridge-processor"}>
            <Image src={"/images/fridge-processor-1.png"} width={305} height={318} className="hover:scale-125 transition duration-500"></Image>
          </Link>
        </div>
        <div className="md:col-span-2 px-5 md:px-8">
          <div>
            <Link href={"/projects/fridge-processor"}>
              <button className="hover:underline mt-7 text-xl md:text-2xl font-bold ">Fridge Processor</button>
            </Link>
            <h2 className="mt-1 text-base">Generate recipes from your fridge's leftovers.</h2>
          </div>

          <div className="my-5 text-xs font-medium opacity-70 select-none">
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-indigo-500">TypeScript</span>
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-red-500">Angular</span>
          </div>
          <div className="mt-8 sm:mt-10 flex justify-center md:justify-start mb-5">
            <Link href={"/projects/fridge-processor"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Learn More
              </button>
            </Link>
            <Link href={"https://github.com/hinilyu/fridge-processor"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Github
              </button>
            </Link>
            <Link href={"https://fridge-processor.azurewebsites.net/"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Live Project
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Food Bank */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-400 p-5 rounded-md mt-10 mb-20">
        <div className="sm:col-span-1 flex justify-center px-8 py-3">
          <Link href={"/projects/foodbank"}>
            <Image src={"/images/foodbank-1.png"} width={305} height={318} className="hover:scale-125 transition duration-500"></Image>
          </Link>
        </div>
        <div className="md:col-span-2 px-5 md:px-8">
          <div>
            <Link href={"/projects/foodbank"}>
              <button className="hover:underline mt-7 text-xl md:text-2xl font-bold ">Scarborough Food Network</button>
            </Link>
            <h2 className="mt-1 text-base">
              Locate Food Banks, and reserve food hampers using QR code embeded receipt. Also includes a staff portal
            </h2>
          </div>

          <div className="my-5 text-xs font-medium opacity-70 select-none">
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-indigo-500">TypeScript</span>
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-red-500">Angular</span>
            <span className="mr-2 mb-2 px-2 py-1  text-white bg-green-500">MongoDB</span>
          </div>
          <div className="mt-8 sm:mt-10 flex justify-center md:justify-start mb-5">
            <Link href={"/projects/foodbank"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Learn More
              </button>
            </Link>
            <Link href={"https://github.com/hinilyu/foodbank"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Github
              </button>
            </Link>
            <Link href={"https://scarboroughfoodbanknetwork.azurewebsites.net/"}>
              <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
                Live Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
