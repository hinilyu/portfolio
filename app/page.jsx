import Link from "next/link";

const Home = () => {
  return (
    <div className="content">
      <div className="text-left">
        <button className="border-2 border-black dark:border-white py-0.5 px-1 text-2xl hover:underline">Daniel Tse</button>
        <h1 className="">a software engineer.</h1>
        <Link href={"/projects/recreation-toronto"}>
          <button className="hover:underline mt-10 text-2xl text-left p-0.5 bg-orange-200 dark:bg-orange-900">Recreation Toronto</button>
        </Link>
        <span> Explore Toronto's recreation program with email reminders on registration</span>
        <br></br>
        <Link href={"/projects/fridge-processor"}>
          <button className="hover:underline mt-3 text-2xl text-left p-0.5 bg-green-200 dark:bg-green-900">Fridge Processor</button>
        </Link>
        <span> Generate recipes from your fridge's leftovers</span>
      </div>
    </div>
  );
};

export default Home;
