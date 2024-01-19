import Link from "next/link";
import Image from "next/image";

const ProjectDetail = ({ project }) => {
  const projects = {
    "recreation-toronto": {
      title: "Recreation Toronto",
      summary:
        "This application allows users to search and explore recreational programs offered in Toronto. And then they can add them to wishlist and set up email reminders.",
      why: "A lot of amazing programs is offered by the City of Toronto at an affordable price. However, it is not convenient to discover new programs using the official eFun webiste, and it's easy for people to forget registering (including me and my friends). As a result, this app was built to make user-friendly program search and email reminders. It can also show the spots available for each program.",
      learned:
        "<li>Able to retrieve programs information using API services</li> <li>Implemented Nodemailer and Cron to send email reminders on schedule </li> <li> Utilized the amazing MongoDB aggregation pipeline attach geoLocation and calculate distance </li><li> Used Python to create automatic script to cache data from eFun official website</li>",
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
        "<li>Proficient in designing wireframes using Figma</li><li>Developed an autocomplete component using JavaScript, enhancing user interaction and search functionalityt</li> <li>Implemented data caching techniques using localStorage and sessionStorage, optimizing user experience by preserving essential information locally</li> <li>Demonstrated the ability to pass multiple search parameters into API services</li>",
      github: "https://github.com/hinilyu/fridge-processor",
      url: "https://fridge-processor.azurewebsites.net/",
      tech: "JavaScript, TypeScript, Angular, HTML, CSS, Tailwind",
    },
    foodbank: {
      title: "Scarborough Food Network",
      summary:
        "Securing 3rd place in the WIMTACH and Scarborough Food Network hackathon, this website, under my leadership, successfully implemented essential functions for a food bank. These features, including the 'Hamper Booking and QR Code Scanning System,' 'Food Bank Locator,' and 'Food Bank News Feed,' address both public and staff needs. The hamper reservation process involves sending users a QR code for efficient identification verification by food bank staff during distribution.",
      why: "In order to optimize the hamper collection process, I envisioned a streamlined booking system for food banks. This not only conserves human resources but also accelerates assistance delivery to a broader audience. The website prioritizes accessibility with its user-friendly design, featuring large buttons for ease of use.",
      learned:
        "<li>Leveraged Github for collaboration, facilitating teamwork</li> <li>Implemented Scrum methodologies for efficient project organization.</li> <li>Familiared QR code generation and scanning techniques for enhanced user verification.</li> <li>Developed skills in UI/UX design, ensuring a visually appealing and user-friendly interface.</li> <li>Gained proficiency in TailwindCSS</li> ",
      github: "https://github.com/hinilyu/foodbank",
      url: "https://scarboroughfoodbanknetwork.azurewebsites.net/",
      tech: "TypeScript, Angular, TailwindCSS",
    },
  };

  return (
    <div className="w-full mb-20">
      <Link href={"/projects"}>
        <button className="text-lg font-light">{"<<"}Back</button>
      </Link>
      <div className="w-full text-left flex justify-start mt-2">
        <h1 className="text-3xl md:text-4xl font-bold text-left">{projects[project].title}</h1>
      </div>
      <div className="sm:col-span-1 flex justify-center sm:justify-start mt-10">
        <Image src={`/images/${project}-1.png`} width={200} height={200} className="hover:scale-125 hover:mr-10 transition duration-500 mr-5"></Image>
        <Image
          src={`/images/${project}-2.png`}
          width={200}
          height={200}
          className="hover:scale-150 hover:ml-10 hover:mr-14 transition duration-500 mr-5 hidden sm:flex"
        ></Image>
        <Image
          src={`/images/${project}-3.png`}
          width={200}
          height={200}
          className="hover:scale-150 hover:ml-10 hover:mr-14 transition duration-500 mr-5 hidden md:flex"
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
      <h1 className="text-2xl mt-7">Why This Project?</h1>
      <p className="font-light mt-2">{projects[project].why}</p>

      <h1 className="text-2xl mt-7">What I Have Learned</h1>
      <p className="font-light mt-2" dangerouslySetInnerHTML={{ __html: projects[project].learned }}></p>
      <h1 className="text-2xl mt-7">Tech</h1>
      <p className="font-light mt-2">{projects[project].tech}</p>
    </div>
  );
};

export default ProjectDetail;
