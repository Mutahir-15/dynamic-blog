import React from "react";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex justify-center items-center lg:mt-20">
    <button className="bg-orange-900 lg:p-10 grid col-span-1 lg:px-10 rounded-md  ">
      <Link className="text-white font-bold text-4xl text-center" href={'/blogs'}>Click to Read Blogs.
      </Link>
    </button>
  </div>
  );
}
