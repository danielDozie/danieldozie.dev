import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HomeBlogSectionProps {
  id: number,
  name: string,
  color: string,
  title: string,
  description: string,
}

export const HomeBlogSection:React.FC <HomeBlogSectionProps> = () => {
  const Icons = [
    {
      id: 1,
      name: "react",
      color: "bg-purple-500",
      title: "Another one",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      id: 2,
      name: "react",
      color: "bg-purple-500",
      title: "Another one",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      id: 3,
      name: "react",
      color: "bg-purple-500",
      title: "Another one",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      id:4,
      name: "react",
      color: "bg-purple-500",
      title: "Another one",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto md:py-8 sm:px-6 lg:py-16 h-full">
        <div className="flex flex-col justify-start mb-4 md:mb-8 mx-8 md:mx-0">
          <h1 className="font-archivo text-4xl  font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-800 mt-20 md:mt-0">
            Yeah! I&apos;ve got a blog too
          </h1>
          <p className="text-pink-500 text-sm pt-2 dark:text-gray-300">
            Catch up with some really cool posts on the latest tech trends
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-2  p-4 md:p-10 ">
              {Icons.map(({ name, title, description, id }) => (
                <div
                  className={`flex flex-col md:flex-row md:justify-between py-4 px-4 rounded-lg shadow-2xl  dark:border-gray-600 bottom-2`}
                  key={id}
                >
                  <div className="flex h-full bg-center w-full mr-8 mb-4 ">
                    <Image
                      src={"/assets/images/happy.gif"}
                      width={500}
                      height={"300px"}
                      className="rounded-lg"
                      alt={name}
                    />
                  </div>
                  <div className="w-full flex flex-col ">
                    <h1 className="font-mitr font-semibold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                      {title}
                    </h1>
                    <p className="font-mitr font-light text-sm mb-5 text-gray-700 dark:text-gray-200">
                      {" "}
                      {description?.substr(0, 110)}{" "}
                      <Link href={"/"}>...Read more</Link>
                    </p>
                    <hr />
                    <div className="flex text-xs font-thin mt-2 justify-between">
                      <p className="text-gray-700 dark:text-gray-300">
                        Published:{" "}
                        <span className="text-pink-500">Sept. 2021</span>
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Author: <span className="text-pink-500">Badt0men</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="justify-center text-center py-8 md:py-0 md:pt-16">
          <button className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Load More...
          </button>
        </div>
    </>
  );
};
