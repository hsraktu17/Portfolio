"use client";

export default function Floating() {
  return (
    <nav className="fixed top-0 left-0 right-0 text-white flex justify-center pt-5">
      <div className="w-[45rem] flex justify-center items-center p-4 border rounded-full  dark:bg-gray-800 dark:border-black dark:bg-opacity-90 bg-white bg-opacity-95">
        <div className="flex space-x-14 text-black dark:text-white">
          <div>
            <a className="px-4 py-2 rounded-full hover:border">Home</a>
          </div>
          <div>
            <a className="px-4 py-2 hover:border rounded-full">About</a>
          </div>
          <div>
            <a className="px-4 py-2 rounded-full hover:border">Skills</a>
          </div>
          <div>
            <a className="px-4 py-2 rounded-full hover:border">Projects</a>
          </div>
          <div>
            <a className="px-4 py-2 rounded-full hover:border">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
