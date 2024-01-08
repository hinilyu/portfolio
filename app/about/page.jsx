import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="content">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="mt-5 flex flex-col justify-center items-center ">
          <Image src={"/portrait.png"} width={200} height={200} className="rounded-full mb-8"></Image>
          <div className="text-2xl font-semibold text-center mb-1">Daniel Tse</div>
          <div className="text-sm font-normal text-center">Software Engineer</div>
        </div>
        <div className="mt-10 lg:mt-20 lg:col-span-3 mb-10 sm:px-20 px-5">
          <div className="text-left flex flex-col ">
            <div className="text-left">A self-motivated software engineer with a passion for collaborative work. </div>
            <br />
            <div>
              Currently pursuiting a software development career while making some actually{" "}
              <Link href="/projects" className="font-bold">
                useful apps
              </Link>{" "}
              for my friends and family. My educational background includes bachelor's degree in communication & media and a diploma in software
              engineering, providing me with a unique blend of technical expertise and creativity.
            </div>
            <br />
            <div>Beyond coding, I am also a freelance video editor, photographer and graphic designer.</div>
            <br />
            <div>Outside of work, you will find me enjoying snowboarding, swimming and meeting new people.</div>
          </div>
          <div className="text-left flex flex-col items-center mt-10">
            <div>
              <h1 className="text-xl font-semibold mb-2 flex-1">Skills</h1>
              <div className="mb-1 flex flex-wrap">
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-yellow-500">JavaScript</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-blue-500">Python</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-teal-500">Java</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-sky-500">C#</span>

                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-cyan-500">React</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-amber-500">NextJS</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-red-500">Angular</span>

                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-orange-500">AWS</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-orange-500">Azure</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-blue-500">Docker</span>

                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-green-500">MongoDB</span>
                <span className="mr-2 mb-2 px-2 py-1 text-xs font-medium text-white bg-violet-500">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
