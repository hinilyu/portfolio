import Link from "next/link";
import Image from "next/image";

const ProjectDetail = ({ project }) => {
  const projects = {
    "recreation-toronto": {
      title: "Recreation Toronto",
      summary:
        "This application allows users to search and explore various recreational programs offered in Toronto. And then they can add them to wishlist and set up email reminders.",
      why: "A lot of amazing programs is offered by the City of Toronto at an affordable price. However, it is not convenient to discover new programs using the official eFun webiste, and it's easy for people to forget registering (including me and my friends). As a result, this app was built to make user-friendly program search and email reminders. It can also show the spots available for each program.",
      learned:
        "<li>Retrieve programs information using API services</li> <li> Use Nodemailer and Cron to send email reminders on schedule </li> <li> Utilize the amazing MongoDB aggregation pipeline attach geoLocation and calculate distance </li><li> Use Python to create automatic script to cache data from eFun official website</li>",
      github: "https://github.com/hinilyu/recreation-toronto",
      url: "https://recreation-toronto.vercel.app/",
      tech: "React, JavaScript, NextJS, Python, MongoDB, HTML, CSS, Tailwind",
    },
    "fridge-processor": {
      title: "Fridge Processor",
      summary:
        "Imagine a fridge processor that magically transforms your available ingredients into some mouthwatering recipes. This is a user-friendly app that not only generates recipes but also allows you to bookmark your favorites.",
      why: "Do you have food that are almost expired? We all do. That's where my app comes in handy, efficiently processing leftover ingredients to ensure nothing goes to waste. You're welcome~",
      learned:
        "<li>Design wireframes with Figma</li><li>Create autoomplete component using javascript</li> <li>Cache user's data using localStorage and sessionStorage</li> <li>Pass in multiple search parameters into the API service</li>",
      github: "https://github.com/hinilyu/fridge-processor",
      url: "https://fridge-processor.azurewebsites.net/",
      tech: "JavaScript, TypeScript, Angular, HTML, CSS, Tailwind",
    },
    foodbank: {
      title: "Scarborough Food Network",
      summary:
        "This application allows users to search and explore various recreational programs offered in Toronto. Features include Program Search, Interactove Map, Whishlist and Email reminders",
      why: "A lot of amazing programs is offered by the City of Toronto at an affordable price. However, it is not convenient to discover new programs using the official eFun webiste, and it's easy for people to forget registering (including me and my friends). As a result, this app was built to make user-friendly program search and email reminders. It can also show the spots available for each program.",
      learned: "<li>Get",
      github: "https://github.com/hinilyu/foodbank",
      url: "https://scarboroughfoodbanknetwork.azurewebsites.net/",
      tech: "TypeScript, Angular",
    },
  };

  return (
    <div className="w-full mb-20">
      <div className="w-full text-left flex justify-start mt-5">
        <h1 className="text-3xl md:text-4xl font-bold text-left">{projects[project].title}</h1>
      </div>
      <div className="sm:col-span-1 flex justify-center sm:justify-start mt-10">
        <Image src={`/images/${project}-1.png`} width={200} height={200} className="hover:scale-125 transition duration-500 mr-5"></Image>
        <Image
          src={`/images/${project}-2.png`}
          width={200}
          height={200}
          className="hover:scale-150 transition duration-500 mr-5 hidden sm:flex"
        ></Image>
        <Image
          src={`/images/${project}-3.png`}
          width={200}
          height={200}
          className="hover:scale-150 transition duration-500 mr-5 hidden md:flex"
        ></Image>
      </div>
      <div className="mt-8 sm:mt-10 flex justify-center md:justify-start mb-5">
        <Link href={projects[project].github}>
          <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
            Github
          </button>
        </Link>
        <Link href={projects[project].url}>
          <button className="dark:hover:bg-slate-600 dark:hover:text-white hover:text-slate-600 hover:bg-slate-200 border border-black dark:border-white text-sm px-2 py-1 rounded mr-2 sm:mr-4">
            Live Project
          </button>
        </Link>
      </div>

      <h1 className="text-2xl">Summary</h1>
      <p className="font-light mt-2">{projects[project].summary}</p>
      <h1 className="text-2xl mt-5">Why This Project?</h1>
      <p className="font-light mt-2">{projects[project].why}</p>

      <h1 className="text-2xl mt-5">What I Have Learned</h1>
      <p className="font-light mt-2" dangerouslySetInnerHTML={{ __html: projects[project].learned }}></p>
      <h1 className="text-2xl mt-5">Tech</h1>
      <p className="font-light mt-2">{projects[project].tech}</p>
    </div>
  );
};

export default ProjectDetail;
